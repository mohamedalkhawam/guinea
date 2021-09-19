import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Animated,
  View,
} from 'react-native';
import {goTo} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import ActionButtons from '../components/actionButtons';
import {globalStyle} from '../styles/index';
import {useTranslation} from 'react-i18next';
import {renderImage} from '../components/industryImages';
import {renderVideo} from '../components/industryVideo';
import {Button, Overlay} from 'react-native-elements';
import Sound from 'react-native-sound';
export default function Industry({navigation, name}) {
  const homeLogo = useState(new Animated.Value(0))[0];
  const homeGrid = useState(new Animated.Value(0))[0];
  const description = useState(new Animated.Value(0))[0];
  const lines = useState(new Animated.Value(0))[0];
  const image = useState(new Animated.Value(0))[0];
  const btn = useState(new Animated.Value(0))[0];
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();

  const styles = globalStyle();
  const dispatch = useDispatch();
  const appReducer = useSelector(state => state.appReducer);
  const sound = new Sound(require('../assets/sound.mp3'));
  const playSound = () => {
    sound.play();
  };
  useEffect(() => {
    if (appReducer.goTo.includes('industry')) {
      homeAnimationFadeIn();
    }
  }, [appReducer.goTo]);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
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
      fadein(btn, 0),
    ]).start();
  };
  const homeAnimationFadeOut = () => {
    Animated.parallel([
      fadeOut(homeLogo, 0),
      fadeOut(homeGrid, 0),
      fadeOut(lines, 0),
      fadeOut(image, 0),
      fadeOut(description, 0),
      fadeOut(btn, 0),
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
  const industryName = name;
  const video = useRef(null);
  return (
    <View
      // resizeMode="cover"
      // source={require("../assets/background.png")}
      style={styles.bgImageStyle}
      // onLoad={() => homeAnimationFadeIn()}
    >
      <ActionButtons
        navigation={navigation}
        triggerAnimation={homeAnimationFadeOut}
      />
      <Animated.Image
        resizeMode="contain"
        source={require('../assets/grid.png')}
        style={[styles.industryGrid, animationStyle(homeGrid)]}
      />
      <Animated.Image
        resizeMode="contain"
        source={require('../assets/logo-slug.png')}
        style={[styles.logoSlug, animationStyle(homeLogo)]}
      />
      <Animated.Image
        resizeMode="stretch"
        source={require('../assets/industry-lines.png')}
        style={[styles.industryLines, animationStyle(lines)]}
      />
      <Animated.View
        style={[
          styles.industryTitleContainer,
          {
            left:
              industryName === 'infrastructure'
                ? '13%'
                : industryName === 'agriculture'
                ? '15%'
                : '18%',
          },
          animationStyle(image),
        ]}>
        <Text style={[styles.aboutButtonsText, {fontSize: 45}]}>{t(name)}</Text>
      </Animated.View>
      {renderImage(name, animationStyle(image))}
      <Animated.View
        blurRadius={100}
        style={[styles.showVideoButton, animationStyle(btn)]}
        onTouchEnd={() => {
          playSound();
          toggleOverlay();
        }}>
        <Text style={[styles.changeLanguageTextButtons, {fontSize: 22}]}>
          Watch video
        </Text>
      </Animated.View>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        animationType="fade"
        statusBarTranslucent={true}
        transitionDuration={1000}
        overlayStyle={{
          width: '85%',
          height: '80%',
          padding: 0,
          position: 'relative',
        }}>
        <TouchableOpacity
          style={[styles.closeVideoButton]}
          onPress={toggleOverlay}>
          <Image
            source={require('../assets/close.png')}
            style={[styles.closeVideoButton]}
          />
        </TouchableOpacity>
        {renderVideo(name)}
      </Overlay>
      <Animated.View
        style={[
          styles.industryDescriptionContainer,
          animationStyle(description),
        ]}>
        <Text style={[styles.industryDescriptionText]}>
          {t(`${industryName}Description`)}
        </Text>
      </Animated.View>
    </View>
  );
}
