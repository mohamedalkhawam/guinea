import React, {useState, useEffect} from 'react';
import {Text, ImageBackground, Animated, View} from 'react-native';
import {goTo} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import ActionButtons from '../components/actionButtons';
import {globalStyle} from '../styles/index';
import {useTranslation} from 'react-i18next';
import Sound from 'react-native-sound';
export default function About({navigation}) {
  const aboutLogo = useState(new Animated.Value(0))[0];
  const aboutGrid = useState(new Animated.Value(0))[0];
  const description = useState(new Animated.Value(0))[0];
  const bt1 = useState(new Animated.Value(0))[0];
  const bt2 = useState(new Animated.Value(0))[0];
  const bt3 = useState(new Animated.Value(0))[0];
  const bt4 = useState(new Animated.Value(0))[0];
  const dispatch = useDispatch();
  const appReducer = useSelector(state => state.appReducer);
  const {t} = useTranslation();
  const styles = globalStyle();
  const sound = new Sound(require('../assets/sound.mp3'));
  const playSound = () => {
    sound.play();
  };

  useEffect(() => {
    if (appReducer.goTo === 'about') {
      aboutAnimationFadeIn();
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
  const aboutAnimationFadeIn = () => {
    Animated.sequence([
      fadein(aboutLogo, 0),
      fadein(aboutGrid, 0),
      fadein(description, 0),
      fadein(bt1, 0),
      fadein(bt2, 0),
      fadein(bt3, 0),
      fadein(bt4, 0),
    ]).start();
  };
  const aboutAnimationFadeOut = () => {
    Animated.parallel([
      fadeOut(aboutLogo, 0),
      fadeOut(aboutGrid, 0),
      fadeOut(description, 0),
      fadeOut(bt1, 0),
      fadeOut(bt2, 0),
      fadeOut(bt3, 0),
      fadeOut(bt4, 0),
    ]).start();
  };
  const clickEvent = name => {
    aboutAnimationFadeOut();
    playSound();
    const homeLogos = setTimeout(() => {
      dispatch(goTo('industry@' + name));
    }, 800);
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
    <View
      // resizeMode="cover"
      // source={require("../assets/background.png")}
      style={styles.bgImageStyle}
      // onLoad={() => aboutAnimationFadeIn()}
    >
      <ActionButtons
        resizeMode="contain"
        navigation={navigation}
        triggerAnimation={aboutAnimationFadeOut}
      />
      <Animated.Image
        resizeMode="contain"
        source={require('../assets/grid.png')}
        style={[styles.aboutGrid, animationStyle(aboutGrid)]}
      />
      <Animated.Image
        resizeMode="contain"
        source={require('../assets/logo-slug.png')}
        style={[styles.logoSlug, animationStyle(aboutLogo)]}
      />
      <Animated.View
        style={[styles.aboutDescriptionContainer, animationStyle(description)]}>
        <Text style={styles.aboutDescriptionText}>{t(`aboutDescription`)}</Text>
      </Animated.View>
      <Animated.View
        style={[styles.tourismButton, animationStyle(bt1)]}
        onTouchEnd={() => {
          clickEvent('tourism');
        }}>
        <Text style={styles.aboutButtonsText}>{t('tourism')}</Text>
      </Animated.View>
      <Animated.View
        style={[styles.energyButton, animationStyle(bt2)]}
        onTouchEnd={() => {
          clickEvent('energy');
        }}>
        <Text style={styles.aboutButtonsText}>{t('energy')}</Text>
      </Animated.View>
      <Animated.View
        style={[styles.infrastructureButton, animationStyle(bt3)]}
        onTouchEnd={() => {
          clickEvent('infrastructure');
        }}>
        <Text style={styles.aboutButtonsText}>{t('infrastructure')}</Text>
      </Animated.View>
      <Animated.View
        style={[styles.agricultureButton, animationStyle(bt4)]}
        onTouchEnd={() => {
          clickEvent('agriculture');
        }}>
        <Text style={styles.aboutButtonsText}>{t('agriculture')}</Text>
      </Animated.View>
    </View>
  );
}
