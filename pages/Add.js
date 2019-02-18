import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

//style
import styles from '../styles/common';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 200
      }).start();
    });
  };

  render() {
    const randomValue = new Animated.Value(-150);

    const newAnimation = Animated.add(this.state.animation, randomValue);
    const animationStyles = {
      transform: [
        {
          translateY: newAnimation
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

export default Add;
