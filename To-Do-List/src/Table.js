import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th colSpan="4">Task To Do</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.text.map((text, index) => {
    const handleStrike = (event) => {
      const row = event.target.closest("tr");
      let td = row.childNodes[0];
      td.classList.add("strike");
    };
    return (
      <tr key={index}>
        <td className="">{text}</td>
        <td>
          <input type="button" value="Done" onClick={handleStrike}></input>
        </td>
        <td>
          <input
            type="button"
            value="Delete"
            onClick={() => props.handleDelete(index)}
          ></input>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const text = props.data;
  const handleDelete = props.handleDelete;
  return (
    <table>
      <TableHeader />
      <TableBody text={text} handleDelete={handleDelete} />
    </table>
  );
};

export default Table;
