import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import MainContainer from './src/containers/MainContainer';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={createStore(reducers)}>
				<MainContainer />
			</Provider>
		);
	}
}