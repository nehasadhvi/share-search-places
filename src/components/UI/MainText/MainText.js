import React from "react";
import { Text, StyleSheet } from "react-native";

const MainText = props => {
  return <Text style={[styles.mainText, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  mainText: {
    color: "grey"
  }
});

export default MainText;
