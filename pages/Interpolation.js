import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { SafeAreaView } from 'react-navigation';

//style
import styles from '../styles/common';

class Interpolation extends Component {
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
        toValue: 2,
        duration: 1500
      }).start();
    });
  };

  render() {
    const animatedInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 300, 0]
    });

    const interpolatedInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 300],
      outputRange: [1, 0.5]
    });

    const translateXInterpolate = animatedInterpolate.interpolate({
      inputRange: [0, 30, 50, 80, 100, 150, 299, 300],
      outputRange: [0, -30, -50, 80, -100, 200, 0, -100]
    });

    const animatedStyles = {
      transform: [
        {
          translateY: animatedInterpolate
        },
        {
          translateX: translateXInterpolate
        }
      ],
      opacity: interpolatedInterpolate
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Interpolation;
