import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { colors, defaultStyles } from "../styles/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { cartItems } from "./Cart";
import ComfirmOrderItem from "../components/ComfirmOrderItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from 'react-native-paper';

const ConfirmOrder = () => {
  const navigate = useNavigation();

  const itemsPrice = 4000;
  const shippingCharges = 20;
  const tax = 0.074 * itemsPrice;
  const totalAmount = itemsPrice + shippingCharges + tax;

  return (
    <View style={defaultStyles}>
      <Header back={true} />
      <Heading text1="Confirm" text2="Orders" />
      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i) => (
            <ComfirmOrderItem
              key={i.product}
              price={i.price}
              image={i.image}
              name={i.name}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>
      <PriceTag heading={"Subtotal"} value={itemsPrice} />
      <PriceTag heading={"Shipping"} value={shippingCharges} />
      <PriceTag heading={"Tax"} value={tax} />
      <PriceTag heading={"Total"} value={totalAmount} />

      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment", {
            itemsPrice,
            shippingCharges,
            tax,
            totalAmount,
          })
        }
      ><Button icon={"cash"} color={colors.color1} style={{ 
        backgroundColor: colors.color3,
        borderRadius: 100,
        padding: 5,
        margin: 10,
       }}>
        Payment
        </Button></TouchableOpacity>
    </View>
  );
};

const PriceTag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>${value}</Text>
  </View>
);

export default ConfirmOrder;
