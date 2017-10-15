import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Table from '../components/Table';
import getHousesAction from '../actions/getHouses';

class HousesTable extends React.Component {
  componentDidMount() {
    const { match: { params: { page }, getHouses } } = this.props;
    getHouses(page);
  }

  render() {
    const { houses } = this.props;
    return <Table data={houses} />;
  }
}

HousesTable.propTypes = {
  match: PropTypes.object.isRequired,
  houses: PropTypes.arrayOf(PropTypes.object),
};

HousesTable.defaultProps = {
  houses: [],
};

const mapStateToProps = state => ({
  houses: state.app.houses,
});

const mapDispatchToProps = dispatch => bindActionCreators({ getHouses: getHousesAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HousesTable);
