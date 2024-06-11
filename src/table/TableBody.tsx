import { ColumnType } from "../types/types";


type TableDataProps = {
    Rank?: number;
    City?: string;
    "Highest Elevation"?: string;
    Type?: string;
    Elevation?: number;
    County?: string;
    Landowner?: string;
    CHP?: string;
    Notes?: string;
}


const TableBody = ({ tableData, columns }: { tableData: TableDataProps[], columns: ColumnType[]}) => {
    return (
     <tbody>
      {tableData.map((data: any) => {
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