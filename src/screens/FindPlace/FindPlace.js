import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import PlaceList from "../../components/PlaceList/PlaceList";
import PlaceDetail from "../PlaceDetail/PlaceDetail";

class FindPlace extends Component {
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

  itemSelectedHandler = key => {
    const selectedItem = this.props.places.find(place => place.key === key);
    this.props.navigator.push({
      screen: "awesome-places.PlaceDetail",
      title: selectedItem.name,
      passProps: {
        placeSelected: selectedItem
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onSelectItem={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  places: state.places.places
});

export default connect(mapStateToProps)(FindPlace);
