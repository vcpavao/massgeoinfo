import about from "../markdown/about.md";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";

export default function About() {
  return (
    <div style={{ margin: "0 20%" }}>
      <h2>Methodology</h2>
      <p>
        These data points resulted from geoprocessing LIDAR data inside a
        shapefile containing polygons of the municipalities of Massachusetts.
        After extracting these coordinates, a manual effort was made to match
        each one to a place name such as 'Mount Greylock'. During this time, the
        points were briefly checked for accuracy. It was determined that the
        computerized process outlined in the first line had revealed errors in
        previously-believed municipality high points. If no place name could be
        determined, the coordinates were assigned 'Unnamed Point.'
      </p>
      <p>
        There were many instances in which the municipalities had multiple
        coordinates near a high point. Coordinates that were the furthest away
        from private property and/or nearest a trail or road were selected in
        these cases.
      </p>
      <p>
        It was determined that LIDAR had inaccurate elevation points for a few
        municipalities Southern Massachusetts. This was confirmed by examining
        the LIDAR data outside of the project. This project intends to resolve
        the affected municipalities as soon as possible. In the meantime, the
        affected municipalities will have a blank name for the elevation high
        point.
      </p>
      <h2>Disclaimer</h2>
      <p>
        This page provides information about the high elevation points of each
        municipality in Massachusetts. Its use is for informational purposes
        only. This page does not endorse trespassing.
      </p>
    </div>
  );
}
