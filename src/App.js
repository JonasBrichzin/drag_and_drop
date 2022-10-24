import React from 'react';
import ReactDOM from 'react-dom';
import DragAndDrop from './Pages/test/DragAndDrop';

ReactDOM.render(<DragAndDrop />, document.getElementById("root"));

function App() {
  return (
    <div className="App">
      <DragAndDrop />
    </div>
  );
}

export default App;