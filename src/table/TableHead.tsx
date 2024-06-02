import { ColumnType } from "../types/types";

const TableHead = ({ columns }: { columns: ColumnType[]}) => {
  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor, footnote } : ColumnType ) => {
          return <th key={accessor}>{label}<sup>{footnote}</sup></th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
