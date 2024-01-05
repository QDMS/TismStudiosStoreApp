import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput, Button, Avatar } from "react-native-paper"; // Import IconButton from react-native-paper
import {
  colors,
  defaultImg,
  defaultStyles,
  formStyles,
  inputOptions,
} from "./../../styles/styles";
import Footer from "../../components/Footer";
// import defaultImg from "../../assets/defaultImg.png"

const Register = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [usaState, setUsaState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const animatedValue = new Animated.Value(0);

  const loading = false;

  const disableBtn =
    !name ||
    !email ||
    !phone ||
    !password ||
    !address ||
    !city ||
    !usaState ||
    !zipCode;

  const submitHandler = () => {
    alert("Yeah");
  };

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
      //TODO: Dispatch updatePic Here
    }
  }, [route.params]);

  useEffect(() => {
    // Start the animation sequence when the component mounts
    animateRegisterText();
  }, []);

  const animateRegisterText = () => {
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
            Register
          </Animated.Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 10,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View style={[{ justifyContent: "center", minHeight: 1050 }]}>
            <View
              style={
                {
                  // padding: 20
                }
              }
            >
              <Avatar.Image
                size={130}
                source={{
                  uri: avatar ? avatar : defaultImg,
                }}
                backgroundColor={colors.color1}
                style={{
                  alignSelf: "center",
                }}
              />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button color={colors.color1}>Change Photo</Button>
            </TouchableOpacity>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              keyboardType="default"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              {...inputOptions}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              {...inputOptions}
              placeholder="Phone Number"
              keyboardType="number-pad"
              value={phone}
              onChangeText={setPhone}
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
            <TextInput
              {...inputOptions}
              placeholder="Street Address"
              keyboardType="default"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
              {...inputOptions}
              placeholder="City"
              keyboardType="default"
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              {...inputOptions}
              placeholder="State"
              keyboardType="default"
              value={usaState}
              onChangeText={setUsaState}
            />
            <TextInput
              {...inputOptions}
              placeholder="Zip Code"
              keyboardType="number-pad"
              value={zipCode}
              onChangeText={setZipCode}
            />

            <Button
              loading={loading}
              color={colors.color3}
              disabled={disableBtn}
              style={formStyles.btn}
              onPress={submitHandler}
            >
              Register
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
              <Text
                style={[
                  formStyles.link,
                  {
                    // bottom: 15
                  },
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Register;
