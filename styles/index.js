import React from 'react';
import {StyleSheet, useWindowDimensions, Platform} from 'react-native';
// import { useFonts } from "expo-font";

export const primaryColor = '#7cfbbf';
export const secondaryColor = '#e5e5e5';
export const globalStyle = () => {
  // const [loaded] = useFonts({
  //   [`CODE-Light`]: require("../assets/fonts/CODE-Light.otf"),
  //   [`Roboto-Regular`]: require("../assets/fonts/Roboto-Regular.ttf"),
  // });
  const loaded = true;
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return StyleSheet.create({
    homeLogo: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: windowWidth * 0.6,
      height: windowHeight * 0.4,
      zIndex: 1,
    },
    homeGrid: {
      right: windowWidth * 0.29,
      width: windowWidth * 0.11,
      top: windowHeight * 0.07,
      height: windowHeight * 0.25,
      position: 'absolute',
      zIndex: 1,
    },
    homeDescriptionItem: {
      position: 'absolute',
      left: windowWidth * 0.14,
      top: windowHeight * 0.53,
    },
    homeDescriptionItemSmall: {
      top: windowHeight * 0.63,
      left: windowWidth * 0.14,
      position: 'absolute',
    },
    homeDescriptionItemFr: {
      position: 'absolute',
      right: windowWidth * 0.14,
      top: windowHeight * 0.53,
    },
    homeDescriptionItemSmallFr: {
      top: windowHeight * 0.63,
      right: windowWidth * 0.14,
      position: 'absolute',
    },
    homeDescriptionTextStyle: {
      color: secondaryColor,
      fontSize: 65,
      fontFamily: loaded ? 'CODE-Light' : '',
    },

    homeDescriptionTextSmallStyle: {
      color: secondaryColor,
      fontSize: 50,
      fontFamily: loaded ? 'CODE-Light' : '',
    },
    englishButton: {
      borderWidth: 2,
      borderColor: primaryColor,
      position: 'absolute',
      top: windowHeight * 0.77,
      left: windowWidth * 0.16,
      width: windowWidth * 0.18,
      paddingVertical: 17,
      borderRadius: windowWidth * 0.09,
      alignItems: 'center',
    },
    frenchButton: {
      borderWidth: 2,
      borderColor: primaryColor,
      position: 'absolute',
      top: windowHeight * 0.77,
      right: windowWidth * 0.17,
      width: windowWidth * 0.18,
      paddingVertical: 17,
      borderRadius: windowWidth * 0.09,
      alignItems: 'center',
    },
    changeLanguageTextButtons: {
      color: 'white',
      fontSize: 25,
      fontFamily: 'Roboto-Regular',
    },
    bgImageStyle: {
      flex: 1,
      minWidth: '100%',
      height: '100%',
    },
    flexBetween: {
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
    },
    flexCenter: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    flexEnd: {
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
    },

    flexStart: {
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
    },
    flexAround: {
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
    },
    flexEvenly: {
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      flexDirection: 'row',
    },
    aboutGrid: {
      position: 'absolute',
      right: windowWidth * 0.45,
      width: windowWidth * 0.11,
      top: windowHeight * 0.06,
      height: windowHeight * 0.25,
    },
    logoSlug: {
      position: 'absolute',
      left: windowWidth * 0.03,
      top: windowHeight * 0.05,
      width: windowWidth * 0.19,
    },
    aboutDescriptionContainer: {
      position: 'absolute',
      left: '7%',
      top: '32%',
    },
    aboutDescriptionText: {
      color: 'white',
      fontSize: 22,
      fontFamily: loaded ? 'Roboto-Regular' : '',
    },
    tourismButton: {
      borderWidth: 2,
      borderColor: primaryColor,
      position: 'absolute',
      top: windowHeight * 0.29,
      right: windowWidth * 0.05,
      width: windowWidth * 0.28,
      paddingVertical: 20,
      borderRadius: windowWidth * 0.09,
      alignItems: 'center',
    },
    energyButton: {
      borderWidth: 2,
      borderColor: primaryColor,
      position: 'absolute',
      top: windowHeight * 0.46,
      right: windowWidth * 0.11,
      width: windowWidth * 0.28,
      paddingVertical: 20,
      borderRadius: windowWidth * 0.09,
      alignItems: 'center',
    },
    infrastructureButton: {
      borderWidth: 2,
      borderColor: primaryColor,
      position: 'absolute',
      top: windowHeight * 0.625,
      right: windowWidth * 0.16,
      width: windowWidth * 0.28,
      paddingVertical: 20,
      borderRadius: windowWidth * 0.09,
      alignItems: 'center',
    },
    agricultureButton: {
      borderWidth: 2,
      borderColor: primaryColor,
      position: 'absolute',
      top: windowHeight * 0.79,
      right: windowWidth * 0.22,
      width: windowWidth * 0.28,
      paddingVertical: 20,
      borderRadius: windowWidth * 0.09,
      alignItems: 'center',
    },
    aboutButtonsText: {
      color: 'white',
      fontSize: 35,
      fontFamily: loaded ? 'CODE-Light' : '',
    },

    investIcons: {width: '60%'},
    backIcon: {width: '65%'},
    backButton: {
      position: 'absolute',
      width: '8%',
      left: '5%',
      bottom: '5%',
      height: '35%',
    },
    investButton: {
      position: 'absolute',
      width: '8%',
      right: '2%',
      bottom: '2.5%',
      height: '20%',
    },
    investLargeTextButton: {
      color: primaryColor,
      fontSize: 15,
      marginTop: -15,
    },
    investSmallTextButton: {color: primaryColor, fontSize: 19},
    homeButton: {
      position: 'absolute',
      width: '8.5%',
      right: '2%',
      top: '4%',
    },
    homeIcon: {width: '70%'},
    industryGrid: {
      position: 'absolute',
      right: windowWidth * 0.645,
      width: windowWidth * 0.1,
      top: windowHeight * 0.08,
      height: windowHeight * 0.23,
    },
    industryLines: {
      position: 'absolute',
      left: '10%',
      top: '20%',
      width: '79%',
      height: '60%',
    },
    industryImage: {
      position: 'absolute',
      width: '23%',
      height: '25%',
      left: '15%',
      top: '57%',
    },
    industryTitleContainer: {
      position: 'absolute',
      top: '42.5%',
      left: '18%',
    },
    industryDescriptionContainer: {
      position: 'absolute',
      top: '22%',
      left: '43%',
    },
    industryDescriptionText: {
      color: secondaryColor,
      fontSize: 19,
      fontFamily: loaded ? 'Roboto-Regular' : '',
      lineHeight: 30,
    },
    investGrid: {
      position: 'absolute',
      right: windowWidth * 0.2,
      width: windowWidth * 0.11,
      top: windowHeight * 0.06,
      height: windowHeight * 0.25,
    },
    investLines: {
      position: 'absolute',
      left: '17%',
      bottom: 0,
      width: '70%',
      height: '60%',
    },
    ivestQrImage: {
      position: 'absolute',
      top: '55%',
      left: '24%',
      width: '10%',
      height: '20%',
    },
    investDescriptionContainer: {
      position: 'absolute',
      top: '50%',
      right: '10%',
    },
    bubbles: {
      position: 'absolute',
      width: 20,
      height: 20,
    },
    showVideoButton: {
      borderWidth: 2,
      borderColor: primaryColor,
      position: 'absolute',
      top: windowHeight * 0.8,
      left: windowWidth * 0.54,
      width: windowWidth * 0.16,
      paddingVertical: 15,
      borderRadius: windowWidth * 0.09,
      alignItems: 'center',
    },
    video: {
      width: '100%',
      height: '100%',
    },
    closeVideoButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
      width: 60,
      height: 60,
    },
  });
};
