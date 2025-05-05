import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pages1 from './Page1';
import Pages2 from './Page2';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Page1' component={Pages1} options={{headerShown: false}} />
            <Stack.Screen name='Page2' component={Pages2} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default Router;