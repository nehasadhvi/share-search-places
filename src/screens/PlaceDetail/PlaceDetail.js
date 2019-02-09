import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { deletePlace } from "../../store/actions/PlacesActions";
import { connect } from "react-redux";

class PlaceDetail extends Component {
  deleteItemHandler = () => {
    this.props.deleteItem(this.props.placeSelected.key);
    this.props.navigator.pop();
  };

  render() {
    return (
      <View style={styles.modalContainer}>
        <View>
          <Text style={styles.placeName}>{this.props.placeSelected.name}</Text>
          <Image
            source={this.props.placeSelected.image}
            style={styles.placeImage}
          />
        </View>
        <View>
          <TouchableOpacity onPress={this.deleteItemHandler}>
            <View style={styles.iconContainer}>
              <Icon name="ios-trash" size={30} color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 25
  },
  placeImage: {
    height: 200,
    width: "100%",
    marginTop: 20
  },
  placeName: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28
  },
  iconContainer: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => ({
  deleteItem: key => dispatch(deletePlace(key))
});

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetail);
