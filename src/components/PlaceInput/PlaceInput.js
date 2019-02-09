import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = val => {
    this.setState({ placeName: val });
  };

  placesSubmitHandler = () => {
    if (this.state.placeName.trim()) {
      this.props.onPlaceAdded(this.state.placeName);
    }
  };

  render() {
    return (
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="Type something..."
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placesSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
