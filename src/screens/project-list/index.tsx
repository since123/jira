import React, { useState, useEffect } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "http://localhost:3001";
// console.log("process.env.REACT_APP_API_URL", process, apiUrl);
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([1, 23]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}/projects`).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [param]);
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        // @ts-ignore
        setUsers(await res.json);
      }
    });
  });
  return (
    <div>
      <SearchPanel
        setParam={setParam}
        param={param}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
};
