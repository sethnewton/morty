import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import CharacterDetailScreen from "./src/screens/CharacterDetailScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CharacterDetail: CharacterDetailScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Morty Characters",
    },
  }
);

export default createAppContainer(navigator);
