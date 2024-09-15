// This is a browser Pagination.
// There should be a search operation.
// data, currentPageNumber, chunkSize

// sizes, 10,20,50 per page
import { PaginationWrapper } from "./PaginationWrapper";
import { TableData } from "./TableData";
import { PaginationContextProvider } from "./paginationContext";
import { SelectNumberOfItemsPerPage } from "./selectNumberOfItems";

export const BrowserPagination = () => {
  return (
    <PaginationContextProvider>
      <TableData />
      <PaginationWrapper />
      <SelectNumberOfItemsPerPage />
    </PaginationContextProvider>
  );
};
