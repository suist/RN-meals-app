import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },

    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: "Categories",

    defaultNavigationOptions: {
      headerStyle: {
        backgroudColor:
          Platform.OS === "android" ? Colors.primaryColor : "yellow",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
      headerTitle: "a aaa",
    },
  }
);

export default createAppContainer(MealsNavigator);
