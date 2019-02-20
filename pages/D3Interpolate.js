import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
  TouchableOpacity,
  setNativeProps
} from 'react-native';
import { interpolateNumber, interpolateRgb } from 'd3-interpolate';

//style
import styles from '../styles/common';

class D3Interpolate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  componentWillMount() {
    const positionInterpolate = interpolateNumber(0, 200);
    const colorInterpolation = interpolateRgb(
      'rgb(255, 99, 71)',
      'rgb(99, 71, 255)'
    );

    this.state.animation.addListener(({ value }) => {
      const position = positionInterpolate(value);
      const color = colorInterpolation(value);
      const style = [
        styles.box,
        {
          backgroundColor: color,
          transform: [{ translateY: position }]
        }
      ];
      this._view.setNativeProps({ style });
    });
  }

  handlePress = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500
    }).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.box} ref={view => (this._view = view)} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default D3Interpolate;
