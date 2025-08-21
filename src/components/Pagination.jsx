import React, { useState, useEffect } from "react";

const Pagination = ({
  currentPage: externalCurrentPage = 1,
  totalPages = 1,
  onPageChange,
  showQuickNavigation = true,
  showFirstLastButtons = true,
  showPrevNextButtons = true,
  className = "",
}) => {
  const [internalCurrentPage, setInternalCurrentPage] =
    useState(externalCurrentPage);
  const [inputValue, setInputValue] = useState(externalCurrentPage.toString());

  useEffect(() => {
    setInternalCurrentPage(externalCurrentPage);
    setInputValue(externalCurrentPage.toString());
  }, [externalCurrentPage]);

  const handlePageChange = (newPage) => {
    if (
      newPage >= 1 &&
      newPage <= totalPages &&
      newPage !== internalCurrentPage
    ) {
      setInternalCurrentPage(newPage);
      setInputValue(newPage.toString());
      onPageChange?.(newPage);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setInputValue(value);
  };

  const handleInputBlur = () => {
    let page = parseInt(inputValue, 10);

    if (isNaN(page) || page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }

    if (page !== internalCurrentPage) {
      handlePageChange(page);
    } else {
      setInputValue(page.toString());
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  const goToFirstPage = () => handlePageChange(1);
  const goToLastPage = () => handlePageChange(totalPages);
  const goToNextPage = () => handlePageChange(internalCurrentPage + 1);
  const goToPrevPage = () => handlePageChange(internalCurrentPage - 1);

  const isFirstPage = internalCurrentPage === 1;
  const isLastPage = internalCurrentPage === totalPages;

  return (
    <div className={`Pagination ${className}`}>
      {showQuickNavigation && (
        <span className="PaginationText">
          <div style={{ flex: "1 1 auto" }}>
            <div className="Input PaginationInput PaginationInputMargin">
              <input
                tabIndex="0"
                type="text"
                data-test="table-pagination-input"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyPress={handleInputKeyPress}
                style={{ width: "48px" }}
                aria-label="Номер страницы"
              />
            </div>
          </div>
          из
          <span
            data-test="table-pagination-total-pages"
            className="PaginationLastPageText"
          >
            {totalPages}
          </span>
        </span>
      )}

      <div className="PaginationButtons">
        {showFirstLastButtons && (
          <button
            className="IconButton"
            type="button"
            data-test="table-pagination-to-first-page"
            onClick={goToFirstPage}
            disabled={isFirstPage}
            aria-label="Первая страница"
          >
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.2929 6.29289C17.6834 5.90237 18.3166 5.90237 18.7071 6.29289C19.0976 6.68342 19.0976 7.31658 18.7071 7.70711L14.4142 12L18.7071 16.2929C19.0976 16.6834 19.0976 17.3166 18.7071 17.7071C18.3166 18.0976 17.6834 18.0976 17.2929 17.7071L12.2929 12.7071C11.9024 12.3166 11.9024 11.6834 12.2929 11.2929L17.2929 6.29289Z"
                  fill="#2E3238"
                />
                <path
                  d="M11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289C13.0976 6.68342 13.0976 7.31658 12.7071 7.70711L8.41421 12L12.7071 16.2929C13.0976 16.6834 13.0976 17.3166 12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L6.29289 12.7071C5.90237 12.3166 5.90237 11.6834 6.29289 11.2929L11.2929 6.29289Z"
                  fill="#2E3238"
                />
              </svg>
            </span>
          </button>
        )}

        {showPrevNextButtons && (
          <button
            className="IconButton"
            type="button"
            data-test="table-pagination-prev-page"
            onClick={goToPrevPage}
            disabled={isFirstPage}
            aria-label="Предыдущая страница"
          >
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
                  fill="#2E3238"
                />
              </svg>
            </span>
          </button>
        )}

        {showPrevNextButtons && (
          <button
            className="IconButton"
            type="button"
            data-test="table-pagination-next-page"
            onClick={goToNextPage}
            disabled={isLastPage}
            aria-label="Следующая страница"
          >
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929L13.5858 12L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z"
                  fill="#2E3238"
                />
              </svg>
            </span>
          </button>
        )}

        {showFirstLastButtons && (
          <button
            className="IconButton"
            type="button"
            data-test="table-pagination-to-last-page"
            onClick={goToLastPage}
            disabled={isLastPage}
            aria-label="Последняя страница"
          >
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6.70711 6.29289C6.31658 5.90237 5.68342 5.90237 5.29289 6.29289C4.90237 6.68342 4.90237 7.31658 5.29289 7.70711L9.58579 12L5.29289 16.2929C4.90237 16.6834 4.90237 17.3166 5.29289 17.7071C5.68342 18.0976 6.31658 18.0976 6.70711 17.7071L11.7071 12.7071C12.0976 12.3166 12.0976 11.6834 11.7071 11.2929L6.70711 6.29289Z"
                  fill="#2E3238"
                />
                <path
                  d="M13.7071 6.29289C13.3166 5.90237 12.6834 5.90237 12.2929 6.29289C11.9024 6.68342 11.9024 7.31658 12.2929 7.70711L16.5858 12L12.2929 16.2929C11.9024 16.6834 11.9024 17.3166 12.2929 17.7071C12.6834 18.0976 13.3166 18.0976 13.7071 17.7071L18.7071 12.7071C19.0976 12.3166 19.0976 11.6834 18.7071 11.2929L13.7071 6.29289Z"
                  fill="#2E3238"
                />
              </svg>
            </span>
          </button>
        )}
      </div>

      {totalPages > 0 && (
        <div className="PaginationInfo">
          Страница {internalCurrentPage} из {totalPages}
        </div>
      )}
    </div>
  );
};

export default Pagination;
