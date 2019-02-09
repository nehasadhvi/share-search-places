import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

const ListItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <View style={styles.itemStyle}>
        <Image source={props.placeImage} style={styles.placeImage} />
        <Text>{props.placeName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  placeImage: {
    marginRight: 8,
    height: 40,
    width: 40
  }
});

export default ListItem;
