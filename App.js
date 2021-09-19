/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import aesjs from 'aes-js';
import store from './redux/store';
import {Provider} from 'react-redux';
import Main from './scences/main';
import {StatusBar, BackHandler} from 'react-native';
import React, {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';
let dd;
export default function App() {
  const [shouldAppWork, setShouldAppWork] = useState(false);

  const checkFslFile = () => {
    let filePath = RNFS.ExternalDirectoryPath + '/license/fsl.lal';
    RNFS.readFile(filePath, 'ascii')
      .then(res => {
        console.log(res);
        if (/[0-9A-Fa-f]{6}/g.test(res) && res !== null) {
          var encodedDate = res;
          var key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var iv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          var encryptedBytes = aesjs.utils.hex.toBytes(encodedDate);
          var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
          var decryptedBytes = aesCbc.decrypt(encryptedBytes);
          var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
          var decodesToDay = new Date(decryptedText);
          var today = new Date();
          console.log('decodesToDay', decodesToDay);
          if (today < decodesToDay) {
            setShouldAppWork(true);
          } else {
            setShouldAppWork(false);
          }
        } else {
          setShouldAppWork(false);
        }
      })
      .catch(() => {
        setShouldAppWork(false);
      });
  };

  useEffect(() => {
    console.log({shouldAppWork});
    RNFS.exists(RNFS.ExternalDirectoryPath + '/license')
      .then(res => {
        if (res === false) {
          RNFS.mkdir(RNFS.ExternalDirectoryPath + '/license').then(() => {
            checkFslFile();
          });
        } else {
          checkFslFile();
        }
      })
      .catch(err => console.log({err}));
    RNFS.exists(RNFS.ExternalDirectoryPath + '/ghuinea_videos')
      .then(res => {
        if (res === false) {
          RNFS.mkdir(RNFS.ExternalDirectoryPath + '/ghuinea_videos');
        }
      })
      .catch(err => console.log({err}));

    if (shouldAppWork === false) {
      dd = setTimeout(() => {
        BackHandler.exitApp();
      }, 5000);
    }
    return () => {
      clearTimeout(dd);
    };
  }, [shouldAppWork]);

  return (
    <Provider store={store}>
      <Main />
      <StatusBar hidden />
    </Provider>
  );
}
