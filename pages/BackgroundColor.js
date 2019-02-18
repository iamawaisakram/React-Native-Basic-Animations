import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

//style
import styles from '../styles/common';

class BackgroundColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255,99,71)', 'rgb(99,71, 255)']
    });

    const textInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(99,71, 255)', 'rgb(255,99,71)']
    });

    const animationStyles = {
      backgroundColor: boxInterpolation
    };

    const textStyles = {
      color: textInterpolation
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.backgroundColorBox, animationStyles]}>
            <Animated.Text style={textStyles}>
              Hello! Testing Animation.
            </Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default BackgroundColor;
