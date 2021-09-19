import React, {useState, useEffect} from 'react';
import Home from './home';
import About from './about';
import Industry from './industry';
import Invest from './invest';
import {View, ImageBackground} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {globalStyle} from '../styles/index';
import {goTo} from '../redux/actions';
import BackGroundWithBubbles from '../components/bubbles';
export default function App() {
  const appReducer = useSelector(state => state.appReducer);
  const dispatch = useDispatch();

  const renderPages = () => {
    switch (appReducer.goTo) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'industry@tourism':
        return <Industry name={'tourism'} />;
      case 'industry@energy':
        return <Industry name={'energy'} />;
      case 'industry@infrastructure':
        return <Industry name={'infrastructure'} />;
      case 'industry@agriculture':
        return <Industry name={'agriculture'} />;
      case 'invest':
        return <Invest />;
      default:
        return <Home />;
    }
  };
  return (
    <>
      <BackGroundWithBubbles />
      {renderPages()}
    </>
  );
}
