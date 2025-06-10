import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import { useNavigate } from '@tanstack/react-router';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
};

const CharacterTable = ({ data }: { data: Character[] }) => {
  const navigate = useNavigate();

  const columns: ColumnDef<Character>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'species', header: 'Species' },
    { accessorKey: 'gender', header: 'Gender' },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => {
          const characterId = row.original.id;
          return (
            <tr
              key={row.id}
              onClick={() => navigate({ to: '/character/$id', params: { id: String(characterId) } })}
              style={{ cursor: 'pointer' }}
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CharacterTable;
