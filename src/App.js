import Message from "./message";

function App() {
  const name = 'Сергей';

  return (
    <div>
      <Message name={name}/>
    </div>
  );
}

export default App;
