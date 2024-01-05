import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  colors,
  formStyles,
  headingStyle,
  defaultStyles,
  inputOptions,
} from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Button, TextInput, Avatar } from "react-native-paper";
import { inputStyling } from "./../../styles/styles";
import SelectComponent from "../../components/SelectComponent";

const NewProduct = ({ navigation, route }) => {
  const loading = false;

  const [image, setImage] = useState("");
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

  useEffect(() => {
    if (route.params?.image) setImage(route.params.image);
  }, [route.params]);

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
          <Text style={[formStyles.heading, headingStyle]}>New Product</Text>
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
              <View
                style={{
                  width: 120,
                  height: 150,
                  alignSelf: "center",
                  marginBottom: 30,
                }}
              >
                <Image
                  style={{
                    backgroundColor: colors.color2,
                    width: 125,
                    height: 125,
                    alignSelf: "center",
                    resizeMode: "contain",
                  }}
                  source={{
                    uri: image ? image : null,
                  }}
                />

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("camera", { newProduct: true })
                  }
                >
                  <Avatar.Icon
                    icon={"camera"}
                    size={30}
                    color={colors.color3}
                    style={{
                      backgroundColor: colors.color2,
                      alignSelf: "center",
                      margin: 10,
                    }}
                  />
                </TouchableOpacity>
              </View>
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
                loading={loading}
                disabled={loading}
                color={colors.color2}
              >
                Add
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

const styles = StyleSheet.create({
  scrollView: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
});

export default NewProduct;
