/* eslint-disable no-unused-vars */
import { usePagination } from "./usePagination";
import style from "./index.module.css";

export const TableData = () => {
  const { data } = usePagination();
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.users?.[data.currentPage]?.map((item) => (
          <tr key={item?.id}>
            <td>{item?.firstName}</td>
            <td>{item?.lastName}</td>
            <td>{item?.phone}</td>
            <td>{item?.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
