import React, { Component } from "react";
import { View, ImageBackground, Button, StyleSheet } from "react-native";
import startTab from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import CustomButton from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from "../../assets/background.jpg";

class Auth extends Component {
  loginHandler = () => {
    startTab();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Plase Log In</HeadingText>
          </MainText>
          <CustomButton color="#b091ea" onPress={() => alert("Login Button")}>
            Switch to Login
          </CustomButton>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your Email Address"
              style={styles.input}
            />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <CustomButton color="#b091ea" onPress={this.loginHandler}>
            Sign Up
          </CustomButton>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  imageBackground: {
    flex: 1
  }
});

export default Auth;
