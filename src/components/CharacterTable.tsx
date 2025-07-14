import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
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
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4 bg-white shadow-md rounded">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-800 text-white">
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className="px-4 py-2 border">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tfoot>
  <tr>
    <td colSpan={columns.length}>
      <div className="flex justify-center items-center gap-2 py-4">
        <button
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1 bg-black text-white rounded disabled:bg-gray-400"
        >
          ⏮️
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1 bg-black text-white rounded disabled:bg-gray-400"
        >
          ◀️
        </button>
        <span className="font-semibold mx-2">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1 bg-black text-white rounded disabled:bg-gray-400"
        >
          ▶️
        </button>
        <button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1 bg-black text-white rounded disabled:bg-gray-400"
        >
          ⏭️
        </button>
      </div>
    </td>
  </tr>
</tfoot>
        <tbody>
          {table.getRowModel().rows.map(row => {
            const characterId = row.original.id;
            return (
              <tr
                key={row.id}
                onClick={() =>
                  navigate({ to: '/character/$id', params: { id: String(characterId) } })
                }
                className="hover:bg-blue-50 cursor-pointer even:bg-gray-100"
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-4 py-2 border">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CharacterTable;
