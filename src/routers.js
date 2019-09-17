import { createAppContainer, createStackNavigator, createMaterialTopTabNavigator } from "react-navigation";
import Me   from "./screens/Me";
import Login from "./screens/Login"
import ReposScreen from "./screens/ReposScreen";
import Router from "./config/Router";

// userStack : 
export const AppStack = createAppContainer(createMaterialTopTabNavigator({
    Me: {
        screen: Me,
        navigationOptions:{
            header: null
        }},
    Busca: {
        screen: ReposScreen,
       
    }
},{
    defaultNavigationOptions:({navigation}) => ({
        tabBarPosition: 'bottom',
       
    }),
    tabBarOptions:{
        activeTintColor: "white",
        indicatorStyle:{backgroundColor: "#dad7d6",},
        style:{backgroundColor: "#918f8e",}
    }

    
}));


// authStack
export const AuthStack = createAppContainer(createStackNavigator({
    Auth: {
        screen: Login,
        navigationOptions:{
            header: null
        }
}}));


export default createAppContainer(Router);