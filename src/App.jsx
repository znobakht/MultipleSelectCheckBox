import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MultipleSelectCheckBox from "./components/MultipleSelectCheckBox";

function App() {
  // const [count, setCount] = useState(0)
  const [selected, setSelected] = useState([]);
  const options = [
    { name: "آذربایجان شرقی", id: 1 },
    { name: "آذربایجان غربی", id: 2 },
    { name: "اردبیل", id: 3 },
    { name: "اصفهان", id: 4 },
    { name: "البرز", id: 5 },
    { name: "ایلام", id: 6 },
    { name: "بوشهر", id: 7 },
    { name: "تهران", id: 8 },
  ];
  const onSelect = (selectedItems) => {
    setSelected(selectedItems);
  };

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        {" "}
        {selected.map((item) => {
          return (
            <h4
              key={item.name}
              style={{ display: "inline", marginRight: "10px" }}
            >
              {item.name}
            </h4>
          );
        })}
      </div>
      <MultipleSelectCheckBox options={options} onSelect={onSelect} />
    </>
  );
}

export default App;
