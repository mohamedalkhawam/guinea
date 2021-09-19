import React, {useEffect, useState} from 'react';
import {Text, ImageBackground, Animated, View} from 'react-native';
import {goTo} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import i18n from '../locales/i18n';
import ActionButtons from '../components/actionButtons';
import {globalStyle} from '../styles/index';
import {useTranslation} from 'react-i18next';
export default function About({navigation, route}) {
  const homeLogo = useState(new Animated.Value(0))[0];
  const homeGrid = useState(new Animated.Value(0))[0];
  const description = useState(new Animated.Value(0))[0];
  const lines = useState(new Animated.Value(0))[0];
  const image = useState(new Animated.Value(0))[0];
  const dispatch = useDispatch();
  const appReducer = useSelector(state => state.appReducer);
  const {t} = useTranslation();
  const styles = globalStyle();
  useEffect(() => {
    if (appReducer.goTo === 'invest') {
      homeAnimationFadeIn();
    }
  }, [appReducer.goTo]);
  const fadein = (value, delay) => {
    return Animated.timing(value, {
      delay: delay,
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    });
  };
  const fadeOut = (value, delay) => {
    return Animated.timing(value, {
      delay: delay || 0,
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    });
  };
  const homeAnimationFadeIn = () => {
    Animated.sequence([
      fadein(homeLogo, 0),
      fadein(homeGrid, 0),
      fadein(lines, 0),
      fadein(image, 0),
      fadein(description, 0),
    ]).start();
  };
  const homeAnimationFadeOut = () => {
    Animated.parallel([
      fadeOut(homeLogo, 0),
      fadeOut(homeGrid, 0),
      fadeOut(lines, 0),
      fadeOut(image, 0),
      fadeOut(description, 0),
    ]).start();
  };
  const animationStyle = value => {
    return {
      opacity: value,
      transform: [
        {
          scale: value.interpolate({
            inputRange: [0, 1],
            outputRange: [0.95, 1],
          }),
        },
      ],
    };
  };
  return (
    <View
      // resizeMode="cover"
      // source={require("../assets/background.png")}
      style={styles.bgImageStyle}>
      <ActionButtons
        navigation={navigation}
        invest
        triggerAnimation={homeAnimationFadeOut}
      />
      <Animated.Image
        resizeMode="contain"
        source={require('../assets/grid.png')}
        style={[styles.investGrid, animationStyle(homeGrid)]}
      />
      <Animated.Image
        source={require('../assets/logo-home.png')}
        style={[styles.homeLogo, animationStyle(homeLogo)]}
      />
      <Animated.Image
        resizeMode="stretch"
        source={require('../assets/invest-lines.png')}
        style={[styles.investLines, animationStyle(lines)]}
      />
      <Animated.Image
        resizeMode="contain"
        source={require('../assets/invest-qr.png')}
        style={[styles.ivestQrImage, animationStyle(image)]}
      />
      <Animated.View
        style={[
          styles.investDescriptionContainer,
          animationStyle(description),
        ]}>
        <Text
          style={[
            styles.industryDescriptionText,
            {fontSize: i18n.language === 'en' ? 25 : 20},
          ]}>
          {t('investDescription')}
        </Text>
        <Text style={[styles.industryDescriptionText]}>
          {t('investDescriptionSmall')}
        </Text>
      </Animated.View>
    </View>
  );
}
