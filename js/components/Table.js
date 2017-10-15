import React from 'react';
import PropTypes from 'prop-types';

export default function Table(props) {
  const { data } = props;
  const headers = Object.keys(data[0]);
  return (
    <table>
      <tr>
        {headers.map(header => <th>{header}</th>)}
      </tr>
      {data.map(record => <tr>{headers.map(header => <td>{record[header]}</td>)}</tr>)}
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  data: [],
};
