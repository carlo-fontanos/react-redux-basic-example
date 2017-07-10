import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, StatusBar, Button, TextInput } from 'react-native';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	
	async componentWillMount() {
		/* Check storage if user was previously logged-in to the device */
		await AsyncStorage.getItem('user')
			.then(req => JSON.parse(req))
			.then((data) => {
				/* Set state of the user who was previously logged-in */
				if(data){
					this.props.log_in(data);
					console.log(data);
				}
			}
		);
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
									this.doLogin(this.state.username, this.state.username);
								}
							}}/>
						</View>
					}
					{isLoggedIn && 
						<View>
							<Text style={{ fontSize: 20 }}>Premium content goes here</Text>
							<Text style={{ marginBottom: 15 }}>Lorem ipsum dolor sit amet, ac urna eget, fermentum velit dis sit mauris metus, rutrum sodales ut lorem, risus lectus aenean consequatur nulla ratione rhoncus. Ac tempus, sed rerum, leo felis mattis mauris taciti culpa sodales.</Text>
							<Text style={{ marginBottom: 25 }}>Donec donec amet nunc, orci porta gravida ipsum. Wisi viverra ac eu, ullamcorper proin massa nec egestas hendrerit per. Volutpat nulla nulla ligula dis auctor aliquam, in sit sit et eu ligula dolor.</Text>
							<Button title="Logout" onPress={() => this.doLogout()}/>
						</View>
					}
				</View>
			</View>
		);
	}
	
	async doLogout(){
		/* Remove user creds storage */
		await AsyncStorage.removeItem('user');
		/* Update store */
		this.props.log_out()
	}
	
	async doLogin(un, ps){
		// Do server authentication check here
		// let userCreds await serverAuthCheck(un, ps);
		
		let userCreds = {
			isLoggedIn: true,
			authToken: 'fgh8F8ffFj43gghe3FJFFJE4ff9fd9', // response from server
			id: 101, // response from server
			name: un
		}
		
		/* Update store */
		this.props.log_in(userCreds);
		/* Save to storage */
		await AsyncStorage.setItem('user', JSON.stringify(userCreds));
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
