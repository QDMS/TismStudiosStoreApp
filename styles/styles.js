import { StyleSheet, Platform, StatusBar } from "react-native";

export const colors = {
  color1: "#bb0e18",
  color1_light: "rgba(213,45,56,0.8)",
  color1_light2: "rgba(220,93,96,0.8)",
  color2: "#ffffff",
  color3: "#343434",
  color4: "#00FFFF00",
  color5: "#f2f2f2",
  color6: "#f7f7f7",
  color7: "#999595",
};

export const defaultStyles = StyleSheet.create({
  padding: 35,
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  flex: 1,
  backgroundColor: colors.color2,
});

export const inputStyling = StyleSheet.create({
  height: 50,
  backgroundColor: colors.color2,
  marginVertical: 10,
  marginHorizontal: 20,
});

export const inputOptions = {
  style: inputStyling,
  padding: 10,
  borderRadius: 10,
  mode: "outlined",
  activeOutlineColor: colors.color1,
};

export const headingStyle = {
  fontSize: 25,
  fontWeight: "500",
  textAlign: "center",
  backgroundColor: colors.color1,
  padding: 5,
  borderRadius: 5,
  elevation: 10,
};

export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.color3,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 10,
  },
  eyeIcon: {
    top: 4,
  },
  forgot: {
    color: colors.color1_light2,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "flex-end",
    fontWeight: "300",
  },
  btn: {
    backgroundColor: colors.color1,
    margin: 20,
    padding: 6,
  },
  or: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "100",
    color: colors.color2,
  },
  link: {
    color: colors.color1,
    alignSelf: "center",
    fontSize: 18,
    textTransform: "uppercase",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.color2,
    marginHorizontal: 10,
  },
});

export const defaultImg =
  "https://i.pinimg.com/474x/1a/09/3a/1a093a141eeecc720c24543f2c63eb8d.jpg";
