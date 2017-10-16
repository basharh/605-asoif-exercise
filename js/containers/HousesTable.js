import React from "react";
import ReactTable from "react-table";
import PropTypes from "prop-types";

import getHousesAPI from "../helpers/getHousesAPI";

export default class HousesTable extends React.Component {
  constructor() {
    super();
    this.columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Region",
        accessor: "region"
      },
      {
        Header: "Members",
        accessor: "url",
        Cell: cellProps => {
          const url = `/house/${cellProps.value.match(/([\d]+)/)[1]}/members`;
          return (
            <div style={{ "text-align": "center" }}>
              <button onClick={() => this.props.history.push(url)} role="link">
                <span
                  className="glyphicon glyphicon-new-window"
                  aria-hidden="true"
                />
              </button>
            </div>
          );
        }
      }
    ];
    this.state = { data: [], pages: -1, loading: false };
  }

  render = () => (
    <ReactTable
      data={this.state.data} // should default to []
      pages={this.state.pages}
      loading={this.state.loading}
      manual
      onFetchData={state => {
        this.setState({ loading: true });
        getHousesAPI(state.page).then(({ data, pages }) =>
          this.setState({ data, pages, loading: false })
        );
      }}
      defaultPageSize={10}
      columns={this.columns}
      className="-striped -highlight"
    />
  );
}

HousesTable.propTypes = {
  history: PropTypes.object.isRequired
};
