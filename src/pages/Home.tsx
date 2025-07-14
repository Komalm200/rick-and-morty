import { useQuery } from '@tanstack/react-query';
import { fetchAllCharacters } from '../api/rickMorty';
import CharacterTable from '../components/CharacterTable';

const Home = () => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['allCharacters'],
    queryFn: fetchAllCharacters,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data found.</div>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Refresh
      </button>
      <CharacterTable data={data} />
    </div>
  );
};

export default Home;
