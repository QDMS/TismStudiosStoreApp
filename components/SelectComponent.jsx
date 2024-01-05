import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import { Avatar, Headline } from "react-native-paper";
import { colors } from "../styles/styles";

const SelectComponent = ({
  visible,
  setVisible,
  setCategory,
  setCategoryID,
  categories = [],
}) => {
  const selectCategoryHandler = (item) => {
    setCategory(item.category);
    setCategoryID(item._id);
    setVisible(false);
  };

  return (
    visible && (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={1} onPress={() => setVisible(false)}>
          <Avatar.Icon
            size={30}
            style={{
              alignSelf: "flex-end",
              backgroundColor: colors.color1,
            }}
            color={colors.color7}
            icon={"close"}
          />
        </TouchableOpacity>
        <Headline style={styles.heading}> Select A Category</Headline>
        <ScrollView>
          {categories.map((i) => (
            <Text
              key={i._id}
              onPress={() => selectCategoryHandler(i)}
              style={styles.text}
            >
              {i.category}
            </Text>
          ))}
        </ScrollView>
      </View>
    )
  );
};

export default SelectComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    position: "absolute",
    padding: 35,
    borderRadius: 20,
    width: "90%",
    height: "93%",
    alignSelf: "center",
    elevation: 10,
    top: 40,
  },
  heading: {
    textAlign: "center",
    marginVertical: 10,
    backgroundColor: colors.color3,
    borderRadius: 5,
    padding: 3,
    color: colors.color2,
  },
  text: {
    fontSize: 17,
    fontWeight: "300",
    textTransform: "uppercase",
    marginVertical: 10,
  },
});
