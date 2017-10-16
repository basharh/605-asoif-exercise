import React from "react";
import PropTypes from "prop-types";

export default function Table(props) {
  const { headers, data } = props;
  return data.length > 0 ? (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>{headers.map((header, i) => <th key={i}>{header}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((record, i) => (
          <tr key={i}>
            {headers.map((header, j) => <td key={j}>{record[header]}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
}

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
