import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.navBar}>
					<Text style={styles.navBarButton}>Back</Text>
					<Text style={styles.navBarHeader}>Awesome App</Text>
					<Text style={styles.navBarButton}>More</Text>
				</View>
				<View style={styles.content}>
					<Text style={styles.text}>
						Welcome to Awesome App!
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: StatusBar.currentHeight
	},
	navBar: {
		flexDirection: 'row',
		paddingTop: 25,
		height: 64,
		backgroundColor: '#1EAAF1',
	},
	navBarButton: {
		color: '#FFFFFF',
		textAlign:'center',
		width: 64
	},
	navBarHeader: {
		flex: 1,
		color: '#FFFFFF',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#374046'
	},
	text: {
		color: '#EEEEEE'
	},
});
