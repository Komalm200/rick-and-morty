import { useQuery } from '@tanstack/react-query';
import { fetchCharacterById } from '../api/rickMorty';
import '../App.css';

const CharacterDetails = ({ id }: { id: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="character-details">
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p><strong>Status:</strong> {data.status}</p>
      <p><strong>Species:</strong> {data.species}</p>
      <p><strong>Gender:</strong> {data.gender}</p>
      <p><strong>Origin:</strong> {data.origin.name}</p>
      <p><strong>Location:</strong> {data.location.name}</p>
    </div>
  );
};

export default CharacterDetails;
