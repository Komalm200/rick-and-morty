import { Link } from '@tanstack/react-router';

const CharacterList = ({ characters }: { characters: any[] }) => (
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
