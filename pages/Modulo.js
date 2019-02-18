import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

//style
import styles from '../styles/common';

class Modulo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  startAnimation = () => {
    Animated.parallel([
      Animated.timing(this.state.animation, {
        toValue: 12,
        duration: 3500
      })
    ]).start();
  };

  render() {
    const randomValue = 3;

    const newAnimation = Animated.modulo(this.state.animation, randomValue);

    const interpolated = newAnimation.interpolate({
      inputRange: [0, 3],
      outputRange: ['0deg', '270deg']
    });

    const animationStyles = {
      transform: [
        {
          rotate: interpolated
        }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animationStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Modulo;
