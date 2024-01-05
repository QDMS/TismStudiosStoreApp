import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
  formStyles,
  defaultStyles,
  colors,
  headingStyle,
  inputOptions,
} from "../../styles/styles";
import Header from "../../components/Header";
import CategoryCard from "../../components/CategoryCard";
import { Button } from "react-native-paper";

export const categories = [
  {
    name: "Trays",
    _id: "1",
  },
  {
    name: "Self Defensive",
    _id: "2",
  },
  {
    name: "Web App",
    _id: "3",
  },
  {
    name: "Mobile App",
    _id: "4",
  },
  {
    name: "Games",
    _id: "5",
  },
];

const Categories = () => {
  const [category, setCategory] = useState();

  const deleteHandler = (id) => {
    console.log(`Deleting Category, ${id}`);
  };

  const submitHandler = () => {

  };

  const loading = false;

  return (
    <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>
      <Header back={true} />
      {/* Heading */}
      <View
        style={{
          marginBottom: 20,
          paddingTop: 70,
        }}
      >
        <Text style={[formStyles.heading, headingStyle]}>Categories</Text>
      </View>
      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color5,
            padding: 20,
            minHeight: 500,
          }}
        >
          {categories.map((i) => (
            <CategoryCard
              name={i.name}
              id={i._id}
              key={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.container}>
        <TextInput
          {...inputOptions}
    
          placeholder="Category"
          keyboardType="default"
          value={category}
          onChangeText={setCategory}
        />
        <Button color={colors.color3} style={styles.btn} onPress={submitHandler} loading={loading} disabled={!category}>
          Add
        </Button>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 20,
    backgroundColor: colors.color3,
  },
  btn: {
    backgroundColor: colors.color7,
    borderRadius: 20,
    margin: 20,
    padding: 6,
    minWidth: 200,
    alignSelf: "center",
  },
});
