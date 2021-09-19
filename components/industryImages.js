import React, { useState, useEffect } from "react";
import { Image, Animated } from "react-native";
import { globalStyle } from "../styles/index";
export const renderImage = (industryName, animatedOpject) => {
  const styles = globalStyle();
  switch (industryName) {
    case "tourism":
      return (
        <Animated.Image
          blurRadius={0}
          resizeMode="stretch"
          source={require("../assets/tourism.png")}
          style={[styles.industryImage, animatedOpject]}
        />
      );
    case "energy":
      return (
        <Animated.Image
          resizeMode="stretch"
          source={require("../assets/energy.png")}
          style={[styles.industryImage, animatedOpject]}
        />
      );
    case "infrastructure":
      return (
        <Animated.Image
          resizeMode="stretch"
          source={require("../assets/infrastructure.png")}
          style={[styles.industryImage, animatedOpject]}
        />
      );
    case "agriculture":
      return (
        <Animated.Image
          resizeMode="stretch"
          source={require("../assets/agriculture.png")}
          style={[styles.industryImage, animatedOpject]}
        />
      );
    default:
      break;
  }
};
