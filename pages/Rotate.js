import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

//style
import styles from '../styles/common';

class Rotate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 360,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    const rotateInterpolate = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '-90deg']
    });

    const textInterpolation = this.state.animation.interpolate({
      inputRange: [0, 360],
      outputRange: ['0deg', '360deg']
    });

    const animationStyles = {
      transform: [
        {
          rotateX: textInterpolation
        },
        {
          rotateY: rotateInterpolate
        }
      ]
    };

    const textStyles = {
      transform: [
        {
          rotateY: textInterpolation
        }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animationStyles]}>
            <Animated.Text style={textStyles}>Hello! Rotate</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Rotate;
