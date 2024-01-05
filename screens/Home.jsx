import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "../styles/styles";
import Header from "../components/Header";
import { colors } from "./../styles/styles";
import { Avatar, Button } from "react-native-paper";
import SearchModal from "../components/SearchModal";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const categories = [
  { category: "Trays", _id: "1" },
  { category: "Self Defensive", _id: "2" },
  { category: "Web App", _id: "3" },
  { category: "Mobile App", _id: "4" },
  { category: "Games", _id: "5" },
];

export const products = [
  {
    price: 5000,
    stock: 100,
    name: "E-comm Mobile App",
    _id: "ECMA",
    category: "Mobile App",
    images: [
      {
        url: "https://psdgang.com/wp-content/uploads/2018/10/08shopping-app-ui-psd.jpg",
      },
    ],
  },
  {
    price: 600,
    stock: 100,
    name: "E-comm Web App",
    _id: "ECWA",
    category: "Web App", 
    images: [
      {
        url: "https://www.datocms-assets.com/205/1640011361-react-ecommerce-tutorial.png?h=500",
      },
    ],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryButtonHandler = (id) => {
    setCategory(id);
  };

  const addToCartHandler = (id) => {
console.log("Add To Cart", id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}

      <View style={defaultStyles}>
        {/* Header */}
        <Header />
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <View>
            <Text style={{ fontSize: 25, color: colors.color3 }}>
              TismStudios
            </Text>
            <Text
              style={{ fontSize: 25, fontWeight: "900", color: colors.color3 }}
            >
              Products
            </Text>
          </View>
          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color={colors.color7}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {categories.map((item, index) => (
              <Button
                color={colors.color1}
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5,
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color:
                      category === item._id ? colors.color2 : colors.color7,
                  }}
                >
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Products */}
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView
           contentContainerStyle={{ 
            alignItems: 'center',
            }}
            vertical
            showsVerticalScrollIndicator={false}
          >
            {
                products.map((item, index)=> (
                    <ProductCard 
                    stock={item.stock}
                    name={item.name}
                    price={item.price}
                    image={item.images[0]?.url}
                    addToCartHandler={addToCartHandler}
                    id={item._id}
                    key={item._id}
                    i={index}
                    navigate={navigate}
                    />
                ))}
          </ScrollView>
        </View>
      </View>
      <Footer activeRoute={"home"}/>
    </>
  );
};

export default Home;
