import Todo from "./components/Todo";

function App() {
  // className is the property used to set calss in Vanila Script
  // as JSX tries to do the same thing so in this html
  // instead of using class we need to use className
  return (
    <div>
        <h1>My Todos</h1>
        <Todo text="learn React"/>
        <Todo text="master react"/>
        <Todo text="explore React"/>        
    </div>    
  );
}

export default App;
