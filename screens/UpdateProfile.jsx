import React, { useState} from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";
import { TextInput, Button } from "react-native-paper"; // Import IconButton from react-native-paper
import {
  colors,
  defaultStyles,
  formStyles,
  headingStyle,
  inputOptions,
} from "../styles/styles";
import Header from "../components/Header";

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [usaState, setUsaState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const loading = false;

  const disableBtn = !name || !email || !phone || !address || !city || !usaState || !zipCode

  const submitHandler = () => {
    alert("Yeah");
  };

  return (
    
      <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>
        <Header back={true} />
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
            paddingTop: 70,
          }}
        >
          <Text style={[formStyles.heading, headingStyle]}>
            Update Profile
          </Text>
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
          <View style={[{ justifyContent: "center"}]}>
            <View style={{ 
                // padding: 20
             }}>
            </View>
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
              Update
            </Button>
          </View>
        </ScrollView>
      </View>
    
  );
};

export default UpdateProfile