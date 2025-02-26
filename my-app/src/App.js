/* eslint-disable no-unused-vars */
import './App.css';

import { useState } from "react";


function App() {
  const [componentsArray, setComponentsArray] = useState([
    0
  ]);
  const [inputData, setInputData] = useState();
  const [index, setIndex] = useState(0);
  const [lastClicked, setLastClicked] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const prevComponent = () => {
    setIndex((prev) => (prev === 0 ? componentsArray.length - 1 : prev - 1));
    setLastClicked("prev");
  };

  const nextComponent = () => {
    setIndex((prev) => (prev === componentsArray.length - 1 ? 0 : prev + 1));
    setLastClicked("next");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddComponents = () => {
    setInputData(inputValue)
    const items = inputValue.split(",").map((item, i) => (
      <div key={i} className="p-4 ">{item.trim()}</div>
    ));
    console.log(items)
    setComponentsArray([
      <div className="p-4">click next to start</div>,
      ...items,
      <div className="p-4">data ended</div>
    ]);
    setInputValue("");
  };
  // const [index, setIndex] = useState(0);
  // const [lastClicked, setLastClicked] = useState(null);

  // const prevComponent = () => {
  //   setIndex((prev) => (prev === 0 ? componentsArray.length - 1 : prev - 1));
  //   setLastClicked("prev");
  // };

  // const nextComponent = () => {
  //   setIndex((prev) => (prev === componentsArray.length - 1 ? 0 : prev + 1));
  //   setLastClicked("next");
  // };

  return (
    <div className="App">
       <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Enter components separated by commas"
        className="p-2 border rounded"
      />
      <button 
        onClick={handleAddComponents} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add data
      </button>

      <p>{inputData}</p>
      <header className="App-header">
      <div className="flex flex-col items-center space-y-4 p-6">
        
      <div className="text-lg font-semibold">{componentsArray[index]}</div>
      <div className="flex space-x-4">
        <button 
          onClick={prevComponent} 
          className={`px-4 py-2 rounded ${lastClicked === "prev" ? "bg-black text-white" : "bg-gray-300 text-black"}`}
        >
          Prev
        </button>
        <br/> <br/>
        <button 
          onClick={nextComponent} 
          className={`px-4 py-2 rounded ${lastClicked === "next" ? "bg-black text-white" : "bg-gray-300 text-black"}`}
        >
          Next
        </button>
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;
