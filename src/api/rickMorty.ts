import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = async (page: number) => {
  const res = await axios.get(`${BASE_URL}/character?page=${page}`);
  return res.data;
};

export const fetchCharacterById = async (id: string) => {
  const res = await axios.get(`${BASE_URL}/character/${id}`);
  return res.data;
};

// ✅ New function to fetch all characters across all pages
type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export const fetchAllCharacters = async () => {
  const allCharacters: Character[] = [];
  let nextUrl: string | null = `${BASE_URL}/character`;

  interface ApiResponse {
    info: { next: string | null };
    results: Character[];
  }

  while (nextUrl) {
    const res: import('axios').AxiosResponse<ApiResponse> = await axios.get<ApiResponse>(nextUrl);
    allCharacters.push(...res.data.results);
    nextUrl = res.data.info.next;
  }

  return allCharacters;
};
