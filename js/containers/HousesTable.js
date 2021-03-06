import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';

import Table from '../components/Table';
import getHousesAPI from '../helpers/getHousesAPI';

export default class HousesTable extends React.Component {
  constructor() {
    super();
    this.columns = [{
        Header: 'Name',
        accessor: 'name',
      }, {
        Header: 'Region',
        accessor: 'region',
      }, {
        Header: 'Members',
        accessor: 'url',
        Cell: props => {
          let url = `/house/${props.value.match(/([\d]+)/)[1]}/members`;
          return <div style={{ 'text-align': 'center' }}>
            <a onClick={ () => this.props.history.push(url) }>
              <span class="glyphicon glyphicon-new-window" aria-hidden="true"></span>
            </a>
          </div>;
        }
      }
    ];
    this.state = { data: [], pages: -1, loading: false };
  }

  render = () => {
    return <ReactTable
      data={this.state.data} // should default to []
      pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
      loading={this.state.loading}
      manual
      onFetchData={(state, instance) => {
        this.setState({loading: true});
        getHousesAPI(state.page).then(({data, pages}) =>
          this.setState({ data, pages, loading: false }));
      }}
      defaultPageSize={10}
      columns={this.columns}
      className="-striped -highlight"/>;
  }
}
