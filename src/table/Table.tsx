/**
 * Table source: https://blog.logrocket.com/creating-react-sortable-table/
 */
import { useState } from "react";
import jsonData from "../../data/mageoinfo_new.json";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import About from "./About";

const Table = () => {
  //@ts-ignore
  const [tableData, setTableData] = useState(jsonData);

  const columns = [
    { label: "City/Town", accessor: "city" },
    { label: `Highest Elevation`, accessor: "elevation_name" },
    { label: "Elevation", accessor: "elevation_ft", footnote: 1 },
    { label: "Latitude", accessor: "latitude" },
    { label: "Longitude", accessor: "longitude" },
    { label: "County", accessor: "COUNTY" },
  ];

  return (
    <>
      <h1>Massachusetts City/Town High Points</h1>
      <Tabs>
        <TabList>
          <Tab>List</Tab>
          <Tab>About</Tab>
        </TabList>

        <TabPanel>
          <table className="table">
            <TableHead columns={columns} />
            <TableBody columns={columns} tableData={tableData} />
          </table>
        </TabPanel>
        <TabPanel>
          <About></About>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Table;
