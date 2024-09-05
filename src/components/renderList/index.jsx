import { useState } from "react";
import { data } from "./data";

const getList = (data) => {
  const list = [];
  list.push(data.name);
  if (data.children) {
    list.push(...getList(data.children));
  }
  return list;
};

export const RenderListInRecursion = () => {
  const [selectedText, setSelectedText] = useState(null);
  return (
    <>
      <select onChange={(e) => setSelectedText(e.target.value)}>
        {getList(data).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div>Selected text: {selectedText}</div>
    </>
  );
};
