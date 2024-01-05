import React, { useState, useEffect } from "react";
import { View, Text, Animated, Easing, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper"; // Import IconButton from react-native-paper
import {
  colors,
  defaultStyles,
  inputOptions,
  formStyles,
} from "./../../styles/styles";
import Footer from "../../components/Footer";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const animatedValue = new Animated.Value(0);

  const loading = false;

  const submitHandler = () => {
    alert("Yeah");
    // TODO:Will Remove This In Future
    navigation.navigate("verify");
  };

  useEffect(() => {
    // Start the animation sequence when the component mounts
    animateForgotPasswordText(); 
  }, []);

  const animateForgotPasswordText = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 0.5,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0.5,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const headingStyle = {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    backgroundColor: colors.color1,
    padding: 5,
    borderRadius: 5,
    elevation: 10,
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, -20, 0],
        }),
      },
    ],
  };

  return (
    <>
      <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
            top: 20,
          }}
        >
          <Animated.Text style={headingStyle}>Forgot Password</Animated.Text>
        </View>
        <View style={formStyles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <Button
            loading={loading}
            color={colors.color3}
            disabled={email === ""}
            style={formStyles.btn}
            onPress={submitHandler}
          >
            Send OTP
          </Button>

          {/* Divider Lines */}
          <View style={formStyles.dividerContainer}>
            <View style={formStyles.dividerLine} />
            <Text style={formStyles.or}>OR</Text>
            <View style={formStyles.dividerLine} />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("login")}
          >
            <Text style={formStyles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default ForgotPassword;
