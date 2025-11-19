import { useState } from "react";
import "./style.css";

const data = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export default function App() {
  const [dropdownVal, setDropdownVal] = useState(null);
  const [checkboxVal, setCheckboxVal] = useState([]);
  const [radioVal, setRadioVal] = useState(null);

  const handleCheckbox = (e) => {
    if (!checkboxVal.includes(e.target.value)) {
      setCheckboxVal((prev) => [...prev, e.target.value]);
    } else {
      setCheckboxVal((prev) => {
        let modified = prev.filter((item) => item !== e.target.value);
        return modified;
      });
    }
  };

  const handleRadioCheck = (e) => {
    setRadioVal(e.target.value);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <hr />
      <label htmlFor="dropdown">Select Dropdown</label>
      <select id="dropdown" onChange={(e) => setDropdownVal(e.target.value)}>
        {data.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <hr />
      <label htmlFor="checkboxes">Select checkboxes</label>
      {data.map((item) => (
        <div key={item} id="checkboxes">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            value={item}
            checked={checkboxVal.includes(item)}
          />
          {item}
        </div>
      ))}
      <hr />
      <label htmlFor="radiobox">Select Radio:</label>
      {data.map((item) => (
        <div key={item}>
          <input
            type="radio"
            name="weeks"
            onChange={handleRadioCheck}
            value={item}
            checked={item === radioVal}
          />
          {item}
        </div>
      ))}
      <hr />
      <div>Selected Dropdown: {dropdownVal}</div>
      <div>Selected Checkboxes are: {checkboxVal.join(",")}</div>
      <div>Selected Radio: {radioVal}</div>
    </div>
  );
}
