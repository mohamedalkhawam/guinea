import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {goTo} from '../redux/actions';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {globalStyle} from '../styles/index';
import {useTranslation} from 'react-i18next';
import Sound from 'react-native-sound';

export default function About({navigation, invest, triggerAnimation}) {
  const dispatch = useDispatch();
  const appReducer = useSelector(state => state.appReducer);
  const {t} = useTranslation();
  const styles = globalStyle();
  const sound = new Sound(require('../assets/sound.mp3'));
  const playSound = () => {
    sound.play();
  };
  return (
    <>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          playSound();
          if (triggerAnimation) {
            triggerAnimation();
          }
          const homeLogos = setTimeout(() => {
            if (appReducer.goTo === 'about') {
              dispatch(goTo('home'));
            } else {
              dispatch(goTo('about'));
            }
          }, 800);
          return () => {
            clearTimeout(homeLogos);
          };
        }}>
        <Image
          // blurRadius={10}
          resizeMode="contain"
          source={require('../assets/back.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      {invest ? (
        <View></View>
      ) : (
        <TouchableOpacity
          style={styles.investButton}
          onPress={() => {
            playSound();
            if (triggerAnimation) {
              triggerAnimation();
            }
            const homeLogos = setTimeout(() => {
              dispatch(goTo('invest'));
            }, 800);
            return () => {
              clearTimeout(homeLogos);
            };
          }}>
          <Image
            resizeMode="contain"
            source={require('../assets/invest1.png')}
            style={styles.investIcons}
          />
          <Text blurRadius={10} style={styles.investLargeTextButton}>
            READY TO
          </Text>

          <Text style={styles.investSmallTextButton}>INVEST</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => {
          playSound();
          if (triggerAnimation) {
            triggerAnimation();
          }
          const homeLogos = setTimeout(() => {
            dispatch(goTo('home'));
          }, 800);
          return () => {
            clearTimeout(homeLogos);
          };
        }}>
        <Image
          resizeMode="contain"
          source={require('../assets/house.png')}
          style={styles.homeIcon}
        />
      </TouchableOpacity>
    </>
  );
}
