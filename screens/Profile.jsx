import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, defaultStyles, formStyles } from "../styles/styles";
import { Avatar, Button } from "react-native-paper";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Profile = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState(null);

  const user = {
    name: "Qujuan Miller",
    email: "qujuanmiller@gmail.com",
  };

  const logoutHandler = () => {
    console.log("Logging Out...");
  };

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Orders":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("changepassword");
        break;
      case "Logout":
        logoutHandler();
        break;

      default:
      case "Profile":
        navigation.navigate("updateprofile");
        break;
        break;
    }
  };

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

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
      //TODO: Dispatch updatePic Here
    }
  }, [route.params]);

  return (
    <>
      <View style={{ ...defaultStyles, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View
          style={{
            marginBottom: 20,
            top: 10,
          }}
        >
          <Text style={[formStyles.heading, headingStyle]}>Profile</Text>
        </View>

        {/* Loading */}

        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={styles.container}>
              <Avatar.Image
                source={{
                  uri: avatar,
                }}
                size={130}
                style={{
                  backgroundColor: colors.color1,
                }}
              />
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }
              >
                <Button color={colors.color1}>Change Photo</Button>
              </TouchableWithoutFeedback>

              <Text style={styles.name}>{user?.name}</Text>
              <Text
                style={{
                  fontWeight: "300",
                  color: colors.color2,
                }}
              >
                {user?.email}
              </Text>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-between",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Orders"}
                  icon={"format-list-bulleted"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  icon={"view-dashboard"}
                  text={"Admin"}
                  reverse={true}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"Profile"}
                  icon={"pencil"}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <ButtonBox
                  handler={navigateHandler}
                  text={"Password"}
                  icon={"lock"}
                />
                <ButtonBox
                  handler={navigateHandler}
                  text={"Logout"}
                  icon={"exit-to-app"}
                />
              </View>
            </View>
          </>
        )}
      </View>

      <Footer />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
