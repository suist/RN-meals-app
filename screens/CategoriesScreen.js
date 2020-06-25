import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          })
        }
      />
    );
  };

  // const renderGridItem = (itemData) => {
  //   return (
  //     <TouchableOpacity
  //       style={styles.gridItem}
  //       onPress={() => {
  //         props.navigation.navigate("CategoryMeals", {
  //           categoryId: itemData.item.id,
  //         });
  //         // props.navigation.navigate({routeName:"CategoryMeals",params:{categoryId:itemData.item.id}});
  //       }}
  //     >
  //       <View>
  //         <Text>{itemData.item.title}</Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />

    // <View style={styles.screen}>
    //   <Text>The Categories Screen!</Text>
    //   <Button
    //     title="Go to Meals!"
    //     onPress={() => {
    //       // props.navigation.navigate({ routeName: "CategoryMeals" });
    //       // props.navigation.push("CategoryMeals");
    //       // props.navigation.navigate("CategoryMeals"); same
    //     }}
    //   ></Button>
    // </View>
  );
};
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
  },
});

export default CategoriesScreen;
