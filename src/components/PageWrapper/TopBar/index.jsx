import React from "react";
import { View, Image, StyleSheet } from "react-native";
// import { Link } from "expo-router";
import { Link } from "@react-navigation/native";

import logo from "../../../../assets/Logo.png"; // Adjust the path to where your image is located

const TopBar = () => {
  return (
    <Link to={{ screen: "Home", params: {} }}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
});

export default TopBar;
