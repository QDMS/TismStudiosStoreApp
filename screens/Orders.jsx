import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyles, formStyles } from "../styles/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";

export const orders = [
  {
    _id: "dsjfsldkf",
    shippingInfo: {
      address: "326 Brookfield Rd. Unit A",
      city: "Valdosta",
      State: "Georgia",
      zipCode: 31602,
    },
    createAt: "12/30/2023T2343",
    orderStatus: "Processing",
    paymentMethod: "COD",
    totalAmount: 5000,
  },

  {
    _id: "fdijisld",
    shippingInfo: {
      address: "327 Brookfield Rd.",
      city: "Valdosta",
      State: "Georgia",
      zipCode: 31602,
    },
    createAt: "12/30/2023T2343",
    orderStatus: "Processing",
    paymentMethod: "ONLINE",
    totalAmount: 600,
  },
];

const Orders = () => {
  const loading = false;

  const headingStyle = {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: colors.color1,
    padding: 5,
    borderRadius: 5,
    elevation: 10,
  };

  return (
    <View style={{ ...defaultStyles, backgroundColor: colors.color5 }}>
      <Header back={true} />
      {/* Heading */}
      <View
        style={{
          marginBottom: 20,
          paddingTop: 70,
        }}
      >
        <Text style={[formStyles.heading, headingStyle]}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createAt.split("T")[0]}
                  address={` ${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.State} ${item.shippingInfo.zipCode}`}
                />
              ))
            ) : (
              <Headline
                style={{
                  textAlign: "center",
                }}
              >
                No Orders Yet
              </Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
