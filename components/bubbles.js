import React, {useState, useEffect} from 'react';
import {Animated, ImageBackground, View} from 'react-native';
import {globalStyle} from '../styles/index';
import Video from 'react-native-video';
export default function Bubbles() {
  const [play, setPlay] = useState(true);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const styles = globalStyle();
  return (
    <View
      style={[
        styles.bgImageStyle,
        {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        },
      ]}>
      <Video
        isPlaying={play}
        shouldPlay={play}
        repeat
        fullscreen
        style={[
          styles.bgImageStyle,
          {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          },
        ]}
        fullscreenOrientation="landscape"
        source={require('../assets/bg.mp4')}
        resizeMode="cover"
        muted
      />
    </View>
  );
}
