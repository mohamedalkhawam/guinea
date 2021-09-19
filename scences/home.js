import React, {useState, useEffect} from 'react';
import {Text, ImageBackground, Animated, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import localize from '../locales/i18n';
import {globalStyle} from '../styles/index';
import {goTo} from '../redux/actions';
import Sound from 'react-native-sound';
export default function Home({navigation}) {
  const homeLogo = useState(new Animated.Value(0))[0];
  const homeGrid = useState(new Animated.Value(0))[0];
  const leftDescription = useState(new Animated.Value(0))[0];
  const rightDescription = useState(new Animated.Value(0))[0];
  const englishBtn = useState(new Animated.Value(0))[0];
  const frenchBtn = useState(new Animated.Value(0))[0];
  const styles = globalStyle();
  const dispatch = useDispatch();
  const appReducer = useSelector(state => state.appReducer);
  const sound = new Sound(require('../assets/sound.mp3'));
  const playSound = () => {
    sound.play();
  };
  useEffect(() => {
    if (appReducer.goTo === 'home') {
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
      fadein(leftDescription, 0),
      fadein(rightDescription, 0),
      fadein(englishBtn, 0),
      fadein(frenchBtn, 0),
    ]).start();
  };
  const homeAnimationFadeOut = () => {
    Animated.parallel([
      fadeOut(homeLogo, 0),
      fadeOut(homeGrid, 0),
      fadeOut(leftDescription, 0),
      fadeOut(rightDescription, 0),
      fadeOut(englishBtn, 0),
      fadeOut(frenchBtn, 0),
    ]).start();
  };
  const clickEvent = lang => {
    playSound();
    homeAnimationFadeOut();
    localize.changeLanguage(lang);
    console.log(localize.language);
    const homeLogos = setTimeout(() => {
      dispatch(goTo('about'));
    }, 500);
    return () => {
      clearTimeout(homeLogos);
    };
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
    <View style={styles.bgImageStyle}>
      <Animated.Image
        resizeMode="contain"
        source={require('../assets/logo-home.png')}
        style={[styles.homeLogo, animationStyle(homeLogo)]}
      />
      <Animated.Image
        blurRadius={0}
        resizeMode="contain"
        source={require('../assets/grid.png')}
        style={[styles.homeGrid, animationStyle(homeGrid)]}
      />

      <Animated.View
        style={[styles.homeDescriptionItem, animationStyle(leftDescription)]}>
        <Text style={styles.homeDescriptionTextStyle}>INVESTMENT</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.homeDescriptionItemSmall,
          animationStyle(leftDescription),
        ]}>
        <Text style={styles.homeDescriptionTextSmallStyle}>OPPORTUNITIES</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.homeDescriptionItemFr,
          animationStyle(rightDescription),
        ]}>
        <Text style={styles.homeDescriptionTextStyle}>PERSPECTIVES</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.homeDescriptionItemSmallFr,
          animationStyle(rightDescription),
        ]}>
        <Text style={styles.homeDescriptionTextSmallStyle}>
          {'D’INVESTISSEMENT'}
        </Text>
      </Animated.View>

      <Animated.View
        style={[styles.englishButton, animationStyle(englishBtn)]}
        onTouchEnd={() => clickEvent('en')}>
        <Text style={styles.changeLanguageTextButtons}>English</Text>
      </Animated.View>
      <Animated.View
        style={[styles.frenchButton, animationStyle(frenchBtn)]}
        onTouchEnd={() => clickEvent('fr')}>
        <Text style={styles.changeLanguageTextButtons}>FRANÇAIS</Text>
      </Animated.View>
    </View>
  );
}
