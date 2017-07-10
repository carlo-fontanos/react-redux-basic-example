import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainComponent from '../components/Main';

/* Everytime there is a store update, mapStateToProps will be called. */
/* Bellow can be accessed as "this.props.REDUCER" within the component */
const mapStateToProps = state => (state)

/* List of functions that will dispatch action triggers defined within components */
const mapDispatchToProps = (dispatch) => ({
	log_in: (userData) => { dispatch({ type: 'LOG_IN', data: userData }) },
	log_out: () => { dispatch({ type: 'LOG_OUT' }) },
})

/* Pass current state to the component as props */
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
