/**
 * Table source: https://blog.logrocket.com/creating-react-sortable-table/
 */
import { useState } from "react";
import tableData1 from "../../data/mageoinfo.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {

  //@ts-ignore
  const [tableData, setTableData] = useState(tableData1);

  const columns = [
    { label: "City/Town", accessor: "City" },
    { label: `Highest Elevation`, accessor: "Highest Elevation" },
    { label: "Elevation", accessor: "Elevation", footnote: 1 },
    { label: "County", accessor: "County" },
    { label: "Landowner", accessor: "Landowner" },
  ];

  return (
    <>
      <h1>Massachusetts City/Town High Points</h1>
      <table className="table">
        <TableHead columns={columns} />
        <TableBody columns={columns} tableData={tableData} />
      </table>
    </>
  );
};

export default Table;
