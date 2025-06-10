import { useNavigate } from '@tanstack/react-router';

const Pagination = ({ currentPage, totalPages }: { currentPage: number; totalPages: number }) => {
  const navigate = useNavigate();

  const goToPage = (page: number) => {
    navigate({ to: '/', search: { page } });
  };

  return (
    <div>
      <button disabled={currentPage <= 1} onClick={() => goToPage(1)}>First</button>
      <button disabled={currentPage <= 1} onClick={() => goToPage(currentPage - 1)}>Prev</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button disabled={currentPage >= totalPages} onClick={() => goToPage(currentPage + 1)}>Next</button>
      <button disabled={currentPage >= totalPages} onClick={() => goToPage(totalPages)}>Last</button>
    </div>
  );
};

export default Pagination;
