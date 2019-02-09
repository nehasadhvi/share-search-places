import { Navigation } from "react-native-navigation";
import Auth from "./src/screens/Auth/Auth";
import { Provider } from "react-redux";
import storeConfig from "./src/store/store";
import SharePlace from "./src/screens/SharePlace/SharePlace";
import FindPlace from "./src/screens/FindPlace/FindPlace";
import PlaceDetail from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = storeConfig();

// Register Screens
Navigation.registerComponent(
  "awesome-places.Auth",
  () => Auth,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SharePlace",
  () => SharePlace,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.FindPlace",
  () => FindPlace,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.PlaceDetail",
  () => PlaceDetail,
  store,
  Provider
);
Navigation.registerComponent("awesome-places.SideDrawer", () => SideDrawer);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.Auth",
    title: "Login"
  }
});
