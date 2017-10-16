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
    this.state = { data: [], pages: -1, loading: false };
  }

  render = () => {
    let houseId = this.props.match.params.id;
    return <ReactTable
      data={this.state.data} // should default to []
      pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
      loading={this.state.loading}
      manual
      onFetchData={(state, instance) => {
        this.setState({loading: true});
        getHouseMembersAPI(houseId).then(data => {
          console.log('data:', data);
          this.setState({ data, loading: false });
        });
      }}
      defaultPageSize={10}
      columns={this.columns}
      className="-striped -highlight"/>;
  }
}
