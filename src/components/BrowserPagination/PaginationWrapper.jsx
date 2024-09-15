import { usePagination } from "./usePagination";

export const PaginationWrapper = () => {
  const { data, setPageData } = usePagination();
  const arr = new Array(data.numberOfPages).fill(0);

  const handlePreviousClick = () => {
    if (data?.currentPage > 0) {
      setPageData(data?.currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (data?.currentPage < data?.users?.length) {
      setPageData(data?.currentPage + 1);
    }
  };
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "25px" }}>
      <button onClick={handlePreviousClick} disabled={data?.currentPage === 0}>
        Prev
      </button>
      {arr.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setPageData(index)}
            style={{
              backgroundColor: data?.currentPage === index ? "#80A6FF" : null,
            }}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        onClick={handleNextClick}
        disabled={data?.currentPage === data?.users?.length - 1}
      >
        Next
      </button>
    </div>
  );
};
