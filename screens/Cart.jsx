import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyles } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from '@react-navigation/native';

export const cartItems = [
  {
    name: "E-comm Mobile App",
    price: 5000,
    stock: 3,
    quantity: 2,
    product: "ECMA",
    image:
      "https://psdgang.com/wp-content/uploads/2018/10/08shopping-app-ui-psd.jpg",
  },
  {
    name: "E-comm Web App",
    price: 600,
    stock: 3,
    quantity: 2,
    product: "ECWA",
    image:
      "https://www.datocms-assets.com/205/1640011361-react-ecommerce-tutorial.png?h=500",
  },
  {
    name: "Epoxy Self Defensive Gear Set",
    price: 20,
    stock: 10,
    quantity: 2,
    product: "ESDGS",
    image:
      "https://m.media-amazon.com/images/I/51XyXvEDt9L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Epoxy Self Defensive Gear Set",
    price: 20,
    stock: 10,
    quantity: 2,
    product: "ESDGP",
    image:
      "https://m.media-amazon.com/images/I/51XyXvEDt9L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Epoxy Self Defensive Gear Set",
    price: 20,
    stock: 10,
    quantity: 2,
    product: "ESDGZ",
    image:
      "https://m.media-amazon.com/images/I/51XyXvEDt9L._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "Epoxy Self Defensive Gear Set",
    price: 20,
    stock: 10,
    quantity: 2,
    product: "ESDGW",
    image:
      "https://m.media-amazon.com/images/I/51XyXvEDt9L._AC_UF894,1000_QL80_.jpg",
  },
];

const Cart = () => {

    const navigate = useNavigation();

    const incrementHandler = (id, qty, stock) => {
        console.log("Increasing", id, qty, stock);
    }

    const decrementHandler = (id, qty) => {
console.log("Decreasing", id, qty);
    }

  return (
    <View
      style={{
        ...defaultStyles,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />
      {/* Heading */}
      <Heading text1="Shopping" text2="Cart" />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView>
          {cartItems.map((i, index) => (
            <CartItem
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
              navigate={navigate}
            />
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>$5 Items</Text>
      </View>
      <TouchableOpacity onPress={ cartItems.length > 0 ? () => navigate.navigate("comfirmorder") : null}>
        <Button
          color={colors.color1}
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"check"}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
