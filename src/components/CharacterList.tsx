import { Link } from '@tanstack/react-router';

interface Character {
  id: number | string;
  name: string;
  // Add other properties if needed
}

const CharacterList = ({ characters }: { characters: Character[] }) => (
  <ul>
    {characters.map((char) => (
      <li key={char.id}>
        <Link to="/character/$id" params={{ id: String(char.id) }}>
          {char.name}
        </Link>
      </li>
    ))}
  </ul>
);
export default CharacterList;
