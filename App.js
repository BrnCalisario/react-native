import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserContext, UserProvider } from './contexts/UserContext';
import Login from "./pages/Login"
import Register from './pages/Register';
import UserList from './pages/UserList';

export default function App() {

	const Stack = createStackNavigator();

	return (
		<UserProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen component={Login} name="Login" />
					<Stack.Screen component={Register} name="Register" />
					<Stack.Screen component={UserList} name="UserList" />
				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	);
}