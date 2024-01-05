import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  colors,
  defaultStyles,
  formStyles,
  headingStyle,
} from "../../styles/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { orders } from "../Orders";
import OrderItem from "../../components/OrderItem";

const AdminOrders = () => {
  const loading = false;

  const processOrderLoading = false;
  const updateHandler = () => {};


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
        <Text style={[formStyles.heading, headingStyle]}>All Orders</Text>
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
                  admin={true}
                  updateHandler={updateHandler}
                  loading={processOrderLoading}
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

export default AdminOrders;

const styles = StyleSheet.create({});
