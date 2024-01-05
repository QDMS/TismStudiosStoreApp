import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Toast from "react-native-toast-message";
import Cart from "./screens/Cart";
import ConfirmOrder from "./screens/ConfirmOrder";
import Payment from "./screens/Payment";
import Login from "./screens/auth/Login";
import ForgotPassword from "./screens/auth/ForgotPassword";
import Verify from "./screens/auth/Verify";
import Register from "./screens/auth/Register";
import Profile from "./screens/Profile";
import UpdateProfile from "./screens/UpdateProfile";
import ChangePassword from "./screens/auth/ChangePassword";
import Orders from "./screens/Orders";
import AdminPanel from "./screens/admin/AdminPanel";
import Categories from "./screens/admin/Categories";
import AdminOrders from "./screens/admin/AdminOrders";
import UpdateProduct from "./screens/admin/UpdateProduct";
import NewProduct from "./screens/admin/NewProduct";
import ProductImages from "./screens/admin/ProductImages";
import Camera from "./screens/Camera";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          {/* App Routes */}
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="camera" component={Camera} />
          <Stack.Screen name="productdetails" component={ProductDetails} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="confirmorder" component={ConfirmOrder} />
          <Stack.Screen name="payment" component={Payment} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="updateprofile" component={UpdateProfile} />
          <Stack.Screen name="changepassword" component={ChangePassword} />
          <Stack.Screen name="orders" component={Orders} />
          {/* Password Resetting Routes */}
          <Stack.Screen name="forgotpassword" component={ForgotPassword} />
          <Stack.Screen name="verify" component={Verify} />
          {/* Admin Routes */}
          <Stack.Screen name="adminpanel" component={AdminPanel} />
          <Stack.Screen name="categories" component={Categories} />
          <Stack.Screen name="adminorders" component={AdminOrders} />
          <Stack.Screen name="updateproduct" component={UpdateProduct} />
          <Stack.Screen name="newproduct" component={NewProduct} />
          <Stack.Screen name="productimages" component={ProductImages} />
        </Stack.Group>
      </Stack.Navigator>

      <Toast position="bottom" bottomOffset={120} />
    </NavigationContainer>
  );
};

export default Main;
