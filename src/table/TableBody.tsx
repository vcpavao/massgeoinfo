import { ColumnType } from "../types/types";


type TableDataProps = {
    elevation_name?: string;
    city?: string;
    //Type?: string;
    elevation_ft?: number | string;
    TOWN_ID?: number
    TYPE?: number | string;
    COUNTYE?: string;
    FIPS_STCO?: number;
    POP2010?: number;
    POP2020?: number;
    POPCH10_20?: number;
    _max?: number;
    latitude?: number;
    longitude?: number;
    view?: string;
    chp: string;
    elevation_type?: string;
    County?: string;
    Landowner?: string;
    CHP?: string;
    Notes?: string;			
}

//TODO: 

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