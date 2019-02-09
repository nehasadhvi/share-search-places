import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "../ListItem/ListItem";

const PlaceList = props => (
  <FlatList
    style={styles.listContainer}
    data={props.places}
    renderItem={info => (
      <ListItem
        placeImage={info.item.image}
        placeName={info.item.name}
        onSelect={() => props.onSelectItem(info.item.key)}
      />
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default PlaceList;
