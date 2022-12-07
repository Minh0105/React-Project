import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import useFetch from "../custom/Fetch";
const Covid = () => {
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const priorDay = moment().subtract(20, "days");
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    // "https://api.covid19api.com/country/vietnam?from=2022-10-01T00%3A00%3A00Z&to=2022-10-20T00%3A00%3A00Z"
    `https://api.covid19api.com/country/vietnam?from=${priorDay.toISOString()}&to=${today.toISOString()}`
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Confirmed</th>
          <th>Active</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {isError === false &&
          isLoading === false &&
          dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item) => {
            item.Date = moment(item.Date).format("MM/DD/YYYY");
            return (
              <tr key={item.ID}>
                <td>{item.Date}</td>
                <td>{item.Confirmed}</td>
                <td>{item.Active}</td>
                <td>{item.Deaths}</td>
              </tr>
            );
          })}
        {isLoading === true && (
          <tr>
            <td>...Loading</td>
          </tr>
        )}
        {isError === true && (
          <tr>
            <td>Something Wrong</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default Covid;
