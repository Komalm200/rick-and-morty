import { useSearch } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/rickMorty';
import CharacterTable from '../components/CharacterTable';
import Pagination from '../components/Pagination';

const Home = () => {
  const { page = 1 } = useSearch({ from: '/' });
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
    // keepPreviousData removed for React Query v5+
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data found.</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <CharacterTable data={data.results} />
      <Pagination currentPage={page} totalPages={data.info.pages} />
    </div>
  );
};

export default Home;
