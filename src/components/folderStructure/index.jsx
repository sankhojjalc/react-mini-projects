/* eslint-disable react/prop-types */
import { useState } from "react";

import { data } from "./data";
import styles from "./index.module.css";

const Folder = ({ item, isFirst }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleChange = () => setIsExpanded((prevState) => !prevState);
  return (
    <div style={{ marginLeft: isFirst ? "" : "20px" }}>
      <div className={styles.wrapper}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {item?.hasOwnProperty("children") ? (
              <i className="bi bi-folder-plus"></i>
            ) : (
              <i className="bi bi-file-earmark"></i>
            )}
            <span style={{ paddingLeft: "15px" }}>{item.name}</span>
          </div>
          {item?.children?.length > 0 &&
            (isExpanded ? (
              <i className="bi bi-dash" onClick={handleChange}></i>
            ) : (
              <i className="bi bi-plus" onClick={handleChange}></i>
            ))}
        </div>
      </div>
      {isExpanded &&
        item?.children?.map((child) => (
          <Folder item={child} key={child?.key} />
        ))}
    </div>
  );
};

export const FolderStructure = () => {
  return data.children.map((item) => (
    <Folder item={item} key={item.key} isFirst={true} />
  ));
};
