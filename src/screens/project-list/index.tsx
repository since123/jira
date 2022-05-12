import React, { useState, useEffect } from "react";
import { SearchPanel } from "screens/project-list/search-panel";
import { List } from "screens/project-list/list";
import { useMount, useDebounce, cleanObject } from "common";
import qs from "qs";
// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = "http://localhost:3001";
// console.log("process.env.REACT_APP_API_URL", process, apiUrl);
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 1000);
  useEffect(() => {
    // let data = "";
    // if (param.name) {
    //   data = param.name ? `?name=${param.name}` : "";
    // } else {
    //   data = param.personId ? `?personId=${param.personId}` : "";
    // }
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`)
      .then((response) => response.json())
      .then(async (data) => {
        setList(await data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [debounceParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`)
      .then((response) => response.json())
      .then(async (data) => {
        setUsers(await data);
      })
      .catch((error) => {
        console.error("Error:", error);
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
