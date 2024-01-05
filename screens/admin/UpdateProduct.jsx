import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  colors,
  formStyles,
  headingStyle,
  defaultStyles,
  inputOptions,
} from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Button, TextInput } from "react-native-paper";
import { inputStyling } from "./../../styles/styles";
import SelectComponent from "../../components/SelectComponent";

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loadingOther = false;

  const images = [
    {
      url: "https://m.media-amazon.com/images/I/51XyXvEDt9L._AC_UF894,1000_QL80_.jpg",
      _id: "ESDGS",
    },
    {
      url: "https://m.media-amazon.com/images/I/51XyXvEDt9L._AC_UF894,1000_QL80_.jpg",
      _id: "ESDGP",
    },
  ];

  const [id] = useState(route.params.id);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("E-comm Mobile App");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { category: "Trays", _id: "1" },
    { category: "Self Defensive", _id: "2" },
    { category: "Web App", _id: "3" },
    { category: "Mobile App", _id: "4" },
    { category: "Games", _id: "5" },
  ]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };

  return (
    <>
      <View style={{ ...defaultStyles, backgroundColor: colors.color5 }}>
        <Header back={true} />
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
            paddingTop: 70,
          }}
        >
          <Text style={[formStyles.heading, headingStyle]}>Update Product</Text>
        </View>
        {loading ? (
          <Loader />
        ) : (
          <ScrollView style={styles.scrollView}>
            <View
              style={{
                justifyContent: "center",
                height: 650,
              }}
            >
              <Button
                onPress={() =>
                  navigation.navigate("productimages", {
                    id,
                    images: images,
                  })
                }
                color={colors.color1}
              >
                Manage Images
              </Button>
              <TextInput
                {...inputOptions}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                {...inputOptions}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
              />
              <TextInput
                {...inputOptions}
                placeholder="Price"
                keyboardType="number-pad"
                value={price}
                onChangeText={setPrice}
              />
              <TextInput
                {...inputOptions}
                placeholder="Stock"
                keyboardType="number-pad"
                value={stock}
                onChangeText={setStock}
              />

              <Text
                style={{
                  ...inputStyling,
                  textAlign: "center",
                  textAlignVertical: "center",
                  borderRadius: 3,
                }}
                onPress={() => setVisible(true)}
              >
                {category}
              </Text>
              <Button
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                  borderRadius: 10,
                }}
                onPress={submitHandler()}
                loading={loadingOther}
                disabled={loadingOther}
                color={colors.color2}
              >
                Update
              </Button>
            </View>
          </ScrollView>
        )}
      </View>
      <SelectComponent
        visible={visible}
        setVisible={setVisible}
        setCategory={setCategory}
        setCategoryID={setCategoryID}
        categories={categories}
      />
    </>
  );
};

export default UpdateProduct;

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
});
