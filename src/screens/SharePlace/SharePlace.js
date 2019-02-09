import React, { Component } from "react";
import { View, Text, TextInput, Button, Stylesheet } from "react-native";
import { connect } from "react-redux";
import { addPlace } from "../../store/actions/PlacesActions";

class SharePlace extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = e => {
    if (e.type === "NavBarButtonPress" && e.id == "sideDrawerToggle") {
      this.props.navigator.toggleDrawer({
        side: "left"
      });
    }
  };

  addPlaceHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        <Text>Share a Place with Us !</Text>
        <View>
          <Text>Image Preview !</Text>
          <Button title="Pick Image" />
        </View>
        <View>
          <Text>Map</Text>
          <Button title="Locate Me" />
        </View>
        <TextInput placeholder="Type a place name..." />
        <Button title="Share the place" />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddPlace: placeName => dispatch(addPlace(placeName))
});

export default connect(
  null,
  mapDispatchToProps
)(SharePlace);
