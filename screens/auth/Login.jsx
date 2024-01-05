import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper"; // Import IconButton from react-native-paper
import {
  colors,
  defaultStyles,
  formStyles,
  inputOptions,
} from "./../../styles/styles";
import Footer from "../../components/Footer";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const animatedValue = new Animated.Value(0);

  const loading = false;

  const submitHandler = () => {
    alert("Yeah");
  };

  useEffect(() => {
    // Start the animation sequence when the component mounts
    animateLoginText();
  }, []);

  const animateLoginText = () => {
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
          <Animated.Text style={[formStyles.heading, headingStyle]}>
            Login
          </Animated.Text>
        </View>
        <View style={formStyles.container}>
          <TextInput
            {...inputOptions}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            {...inputOptions}
            placeholder="Password"
            value={password}
            secureTextEntry={!isPasswordVisible} // Use secureTextEntry property
            right={
              <TextInput.Icon
                style={formStyles.eyeIcon}
                name={isPasswordVisible ? "eye-off" : "eye"}
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            }
            onChangeText={setPassword}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("forgotpassword")}
          >
            <Text style={formStyles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <Button
            loading={loading}
            color={colors.color3}
            disabled={email === "" || password === ""}
            style={formStyles.btn}
            onPress={submitHandler}
          >
            Login
          </Button>
          {/* Divider Lines */}
          <View style={formStyles.dividerContainer}>
            <View style={formStyles.dividerLine} />
            <Text style={formStyles.or}>OR</Text>
            <View style={formStyles.dividerLine} />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("register")}
          >
            <Text style={formStyles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Login;
