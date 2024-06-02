import { ColumnType } from "../types/types";

type TableDataProps = {

}


const TableBody = ({ tableData, columns }: { tableData: TableDataProps, columns: ColumnType[]}) => {
    return (
     <tbody>
      {tableData.map((data) => {
       return (
        <tr key={data.id}>
         {columns.map(({ accessor }) => {
          const tData = data[accessor] ? data[accessor] : "——";
          return <td key={accessor}>{tData}</td>;
         })}
        </tr>
       );
      })}
     </tbody>
    );
   };
   
   export default TableBody;