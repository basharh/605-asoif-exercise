import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import getHouseMembersAPI from '../helpers/getHouseMembersAPI';

export default class HousesTable extends React.Component {
  constructor() {
    super();
    this.columns = [{
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      }, {
        Header: 'Gender',
        accessor: 'gender',
      },
    ];
    this.state = { data: [], pages: -1, loading: true };
  }

  componentDidMount() {
    let houseId = this.props.match.params.id;
    getHouseMembersAPI(houseId).then(data => {
      this.setState({ data, loading: false });
    });
  }

  render = () => {
    let houseId = this.props.match.params.id;
    return <ReactTable
      loading={this.state.loading}
      data={this.state.data} // should default to []
      columns={this.columns}
      defaultPageSize={10}
      className="-striped -highlight"/>;
  }
}
