import { useEffect, useContext } from "react";
import { PaginationContext } from "./paginationContext";
import { chunkDataAccordingToDataPerPage } from "./utils";

export const usePagination = () => {
  const { data, setData } = useContext(PaginationContext);

  const fetchUsersData = async () => {
    const response = await fetch("https://dummyjson.com/users?limit=0");
    const val = await response.json();
    const { numberOfPages, chunkedData } = chunkDataAccordingToDataPerPage(
      val.users,
      data.usersPerPage
    );
    setData((prev) => ({ ...prev, users: chunkedData, numberOfPages }));
  };

  const setPageData = (pageNumber) => {
    setData((prev) => ({ ...prev, currentPage: pageNumber }));
  };

  const setUsersPerPage = (data) => {
    setData((prev) => ({ ...prev, usersPerPage: Number(data) }));
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  useEffect(() => {
    const { numberOfPages, chunkedData } = chunkDataAccordingToDataPerPage(
      data.users,
      data.usersPerPage
    );
    setData((prev) => ({ ...prev, users: chunkedData, numberOfPages }));
  }, [data?.usersPerPage]);

  return { data, setPageData, setUsersPerPage };
};
