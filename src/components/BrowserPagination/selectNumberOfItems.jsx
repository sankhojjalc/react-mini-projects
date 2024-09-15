import { usePagination } from "./usePagination";

export const SelectNumberOfItemsPerPage = () => {
  const { setUsersPerPage } = usePagination();
  return (
    <select onChange={() => setUsersPerPage(event.target.value)}>
      <option value={10}>10</option>
      <option value={20} selected>
        20
      </option>
      <option value={50}>50</option>
    </select>
  );
};
