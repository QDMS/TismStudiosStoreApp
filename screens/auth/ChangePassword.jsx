import React, { useState } from "react";
import {
  View,
  Text,
} from "react-native";
import { TextInput, Button } from "react-native-paper"; // Import IconButton from react-native-paper
import {
  colors,
  defaultStyles,
  formStyles,
  inputOptions,
} from "./../../styles/styles";
import Header from "../../components/Header";

const ChangePassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const loading = false;

  const submitHandler = () => {
    alert("Yeah");
  };


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
      <View style={{ ...defaultStyles, backgroundColor: colors.color2  }}>
        <Header back={true}/>
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
            paddingTop: 55,
          }}
        >
          <Text style={[formStyles.heading, headingStyle]}>
            Update Password
          </Text>
        </View>
        <View style={formStyles.container}>
          
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

          <Button
            loading={loading}
            color={colors.color3}
            disabled={password === ""}
            style={formStyles.btn}
            onPress={submitHandler}
          >
            Update
          </Button>
        </View>
      </View>
  );
};

export default ChangePassword