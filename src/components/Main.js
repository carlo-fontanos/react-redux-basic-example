import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TextInput } from 'react-native';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	
	render() {
		let isLoggedIn = this.props.user.isLoggedIn;
		return (
			<View style={styles.container}>
				<View style={styles.navBar}>
					{!isLoggedIn && 
						<Text style={styles.navBarHeader}>Please Login</Text>
					}
					{isLoggedIn && 
						<Text style={styles.navBarHeader}>Welcome {this.props.user.name}</Text>
					}
				</View>
				<View style={styles.content}>
					{!isLoggedIn && 
						<View>
							<Text style={styles.label}>Username</Text>
							<TextInput
								style={styles.textinput}
								onChangeText={(text) => this.setState({username:text})}
							/>
							<Text style={styles.label}>Password</Text>
							<TextInput
								style={styles.textinput}
								onChangeText={(text) => this.setState({password:text})}
								secureTextEntry
							/>
							<Button title="Login" onPress={() => {
								if(this.state.username && this.state.password){
									this.props.log_in({
										authToken: 'fgh8F8ffFj43gghe3FJFFJE4ff9fd9',
										id: 101,
										name: this.state.username
									});
								}
							}}/>
						</View>
					}
					{isLoggedIn && 
						<View>
							<Button title="Logout" onPress={() => this.props.log_out()}/>
						</View>
					}
				</View>
			</View>
		);
	}
	
	submit(){
		
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingTop: StatusBar.currentHeight,
	},
	navBar: {
		flexDirection: 'row',
		paddingTop: 25,
		marginBottom: 20,
		height: 64,
		backgroundColor: '#1EAAF1',
	},
	navBarHeader: {
		flex: 1,
		color: '#FFFFFF',
		fontWeight: 'bold',
		textAlign: 'center'
	},
	content: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15
	},
	label: {
		color: '#333',
		fontSize: 16,
		marginTop: 15
	},
	textinput: {
		alignSelf: 'stretch',
		height: 40, 
		borderColor: 'white',
		fontSize: 16,
	}
});
