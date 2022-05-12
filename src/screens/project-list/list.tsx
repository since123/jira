import React from "react";
import { User } from "screens/project-list/search-panel";
interface Project {
  id: string;
  name: string;
  personId: string;
}
interface ListProps {
  list: Project[];
  users: User[];
}
export const List = ({ list, users }: ListProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>负责人</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>
                {users?.find((user) => user.id === project.personId)?.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
