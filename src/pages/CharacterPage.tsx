
import { useParams } from '@tanstack/react-router';
import CharacterDetails from '../components/CharacterDetails';

const CharacterPage = () => {
  const { id } = useParams({ from: '/character/$id' });

  return <CharacterDetails id={id} />;
};

export default CharacterPage;


