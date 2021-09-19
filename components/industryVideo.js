import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {globalStyle} from '../styles/index';
import localize from '../locales/i18n';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';
export const renderVideo = industryName => {
  const styles = globalStyle();
  if (localize.language === 'en') {
    switch (industryName) {
      case 'tourism':
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/tourism_English.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
      case 'energy':
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/energy_English.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
      case 'infrastructure':
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/infrastructures_English.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
      case 'agriculture':
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/agriculture_English.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
      default:
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/agriculture_English.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
    }
  } else {
    switch (industryName) {
      case 'tourism':
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/tourism_French.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
      case 'energy':
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/energy_French.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
      case 'infrastructure':
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/infrastructures_French.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
      case 'agriculture':
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/agriculture_French.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
      default:
        return (
          <Video
            isPlaying={true}
            shouldPlay={true}
            style={styles.video}
            source={{
              uri:
                RNFS.ExternalDirectoryPath +
                '/ghuinea_videos/agriculture_French.mov',
            }}
            resizeMode="cover"
            volume={100}
          />
        );
    }
  }
};
