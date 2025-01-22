# React Coding Challenge - Battle of Monsters

## Project Description
This project is an interactive application developed for the **React Coding Challenge - Battle of Monsters**, designed to evaluate my skills as a frontend developer. The game allows users to select monsters, view their stats, assign a random opponent, and simulate a battle to determine a winner.

## Features Implemented
1. **Monster Selection**  
   - Users can select a monster from a dropdown list.  
   - Detailed information about the selected monster, such as its image and stats, is displayed.  

2. **Opponent Assignment**  
   - A random opponent is automatically generated once a monster is selected.  

3. **Battle Simulation**  
   - The stats of both monsters are compared using a point system.  
   - A winner or a tie is determined based on the stats.  

4. **Improved User Interface**  
   - Utilized Material UI for a clean and professional visual experience.  
   - Stats are represented with dynamic progress bars.  

5. **Global State Management**  
   - Implemented Redux Toolkit to manage the global state of selected monsters and battle results.  

6. **Dynamic Messages**  
   - Displays a message to indicate the winner or a tie.  
   - Automatically resets the state after a defined time.  

7. **Testing**  
   - Developed unit tests for key components and validated project logic.  

## Technologies Used
- **React**: The main framework for creating interactive components.  
- **Redux Toolkit**: Efficient management of the application's global state.  
- **Material UI**: Styled components for a modern interface.  
- **TypeScript**: Static typing for increased robustness and maintainability.  
- **Jest**: Framework for unit testing.  
- **JSON Server**: Simulated API to retrieve monster data.  

## Installation and Execution
Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/battle-of-monsters.git
   ```

2. Navigate to the project directory:
   ```bash
   cd battle-of-monsters
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the API server:
   ```bash
   npm run server
   ```

5. Start the application:
   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Development Notes
- Followed best development practices such as code modularization and the use of modern tools.  
- The battle logic was implemented using a point-based comparison of stats.  
- Used `createAsyncThunk` to handle asynchronous calls in a structured manner.  

## Next Steps
- Optimize the design for mobile screens.  
- Enhance the user experience by adding animations for battle results.  
- Implement a leaderboard for the most powerful monsters.  

---

Thank you for taking the time to review this project! 🧡 I hope you enjoy it as much as I enjoyed developing it.  
