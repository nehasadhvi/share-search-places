import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View>
        <Text
          {...props}
          style={[styles.buttonBackground, { backgroundColor: props.color }]}
        >
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBackground: {
    borderColor: "#5b25c1",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    margin: 8
  }
});

export default CustomButton;
