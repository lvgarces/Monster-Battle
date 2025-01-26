// /api/battle.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');  // Actualiza el path al archivo db.json
const middlewares = jsonServer.defaults();
const data = require('./data/monsters.json'); // Ruta correcta para tu archivo de monsters

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }
  next();
});

server.get('/monsters', (req, res) => {
  res.jsonp(data.monsters);
});

server.post('/battle', (req, res) => {
  const { monster1Id, monster2Id } = req.body;

  if (!monster1Id || !monster2Id) {
    return res.status(400).jsonp({ message: 'Missing ID' });
  }

  const monster1 = data.monsters.find(monster => monster.id === monster1Id);
  const monster2 = data.monsters.find(monster => monster.id === monster2Id);

  if (!monster1 || !monster2) {
    return res.status(400).jsonp({ message: 'Invalid ID' });
  }

  const monster1Sum =
    monster1.attack + monster1.defense + monster1.hp + monster1.speed;
  const monster2Sum =
    monster2.attack + monster2.defense + monster2.hp + monster2.speed;

  if (monster1Sum > monster2Sum) {
    return res.json({ winner: monster1, tie: false });
  }

  if (monster2Sum > monster1Sum) {
    return res.json({ winner: monster2, tie: false });
  }

  if (monster1Sum === monster2Sum) {
    return res.json({ winner: null, tie: true });
  }
});

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});

// Vercel serverless functions don't need the `.listen()` part
