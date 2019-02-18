/** @format */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { createStackNavigator } from 'react-navigation';

//pages
import HOC from './hoc/HOC';
import Opacity from './pages/Opacity';
import TranslatePosition from './pages/TranslatePosition';
import Scale from './pages/Scale';
import WidthHeightValues from './pages/WidthHeightValues';
import AbsolutePosition from './pages/AbsolutePosition';
import BackgroundColor from './pages/BackgroundColor';
import Rotate from './pages/Rotate';
import Ease from './pages/Ease';
import Spring from './pages/Spring';
import Event from './pages/Event';
import Decay from './pages/Decay';
import Add from './pages/Add';
import Divide from './pages/Divide';
import Multiply from './pages/Multiply';
import Modulo from './pages/Modulo';
import Parallel from './pages/Parallel';
import Sequence from './pages/Sequence';
import Stagger from './pages/Stagger';
import Delay from './pages/Delay';
import Interpolation from './pages/Interpolation';
import Extrapolate from './pages/Extrapolate';
import AnimatedComponent from './pages/AnimatedComponent';
import SetNativeProps from './pages/SetNativeProps';

AppRegistry.registerComponent(appName, () => RootStack);

const RootStack = createStackNavigator(
  {
    Main: HOC,
    Opacity,
    TranslatePosition,
    Scale,
    WidthHeightValues,
    AbsolutePosition,
    BackgroundColor,
    Rotate,
    Ease,
    Spring,
    Event,
    Decay,
    Add,
    Divide,
    Multiply,
    Modulo,
    Parallel,
    Sequence,
    Stagger,
    Delay,
    Interpolation,
    Extrapolate,
    AnimatedComponent,
    SetNativeProps
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none'
  }
);
