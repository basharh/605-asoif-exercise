import React from "react";
import ReactTable from "react-table";
import PropTypes from "prop-types";

import getHouseMembersAPI from "../helpers/getHouseMembersAPI";

export default class HousesTable extends React.Component {
  constructor() {
    super();
    this.columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Gender",
        accessor: "gender"
      }
    ];
    this.state = { data: [], loading: true };
  }

  componentDidMount() {
    const houseId = this.props.match.params.id;
    getHouseMembersAPI(houseId).then(data => {
      this.setState({ data, loading: false });
    });
  }

  render = () => (
    <ReactTable
      loading={this.state.loading}
      data={this.state.data} // should default to []
      columns={this.columns}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  );
}

HousesTable.propTypes = {
  match: PropTypes.object.isRequired
};
