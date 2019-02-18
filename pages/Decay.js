import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  PanResponder
} from 'react-native';

//style
import styles from '../styles/common';

class Decay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.ValueXY(0)
    };
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.animation.extractOffset();
      },
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.animation.x,
          dy: this.state.animation.y
        }
      ]),
      onPanResponderRelease: (e, { vx, vy }) => {
        Animated.decay(this.state.animation, {
          velocity: { x: vx, y: vy },
          deceleration: 0.997
        }).start();
      }
    });
  }

  render() {
    const animationStyles = {
      transform: this.state.animation.getTranslateTransform()
    };
    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, animationStyles]}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

export default Decay;
