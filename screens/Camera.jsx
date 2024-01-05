import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Avatar } from "react-native-paper";
import { Permissions } from "expo";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../styles/styles";

// Define constants for permission status
const PERMISSION_STATUS_GRANTED = "granted";

const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler}>
    <Avatar.Icon
      style={{
        backgroundColor: colors.color1,
      }}
      color={colors.color2}
      icon={icon}
      size={40}
    />
  </TouchableOpacity>
);

const CameraComponent = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false)
      return alert("Permission To Access Gallery Is Required");

    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!data.canceled && route.params?.newProduct)
      return navigation.navigate("newproduct", {
        image: data.assets[0].uri,
      });
    if (!data.canceled && route.params?.updateProduct)
      return navigation.navigate("productimages", {
        image: data.assets[0].uri,
      });
    if (!data.canceled && route.params?.updateProfile)
      return navigation.navigate("profile", {
        image: data.assets[0].uri,
      });
    else
      return navigation.navigate("register", {
        image: data.assets[0].uri,
      });
  };

  const clickPic = async () => {
    const data = await camera.takePictureAsync();

    if (!data.canceled && route.params?.newProduct)
      return navigation.navigate("newproduct", {
        image: data.uri,
      });
    if (!data.canceled && route.params?.updateProduct)
      return navigation.navigate("productimages", {
        image: data.uri,
      });
    if (!data.canceled && route.params?.updateProfile)
      return navigation.navigate("profile", {
        image: data.uri,
      });
    else
      return navigation.navigate("register", {
        image: data.uri,
      });
  };

  useEffect(() => {
    const getPermissionAsync = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === PERMISSION_STATUS_GRANTED);
    };
    getPermissionAsync();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Camera
        type={type}
        style={styles.camera}
        ratio={"1:1"}
        ref={(ref) => setCamera(ref)}
      />

      <View style={styles.iconContainer}>
        <MyIcon icon="image" handler={openImagePicker} />
        <MyIcon icon="camera" handler={clickPic} />
        <MyIcon
          icon="camera-flip"
          handler={() => {
            setType((prevType) =>
              prevType === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  iconContainer: {
    flexDirection: "row",
    bottom: 10,
    width: "100%",
    justifyContent: "space-evenly",
    position: "absolute",
  },
});

export default CameraComponent;
