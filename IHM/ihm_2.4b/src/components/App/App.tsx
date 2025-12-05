import { User } from "./User";


function App() {
  return (
    <div>
      <User name="Alice" age={25} isOnline={true} />
      <User name="Bob" age={30} isOnline={false} />
      <User name="Charlie" age={20} isOnline={true} />
    </div>
  );
}

export default App;
