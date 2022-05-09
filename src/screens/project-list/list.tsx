import React from "react";
// @ts-ignore
export const List = ({ list, users }) => {
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
          {/*  @ts-ignore */}
          {list.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>
                {/*  @ts-ignore */}

                {users.find((user) => user.id === project.personId)?.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
