import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

//style
import styles from '../styles/common';

class Delay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorAnimation: new Animated.Value(0),
      scaleAnimation: new Animated.Value(1)
    };
  }

  handlePress = () => {
    Animated.stagger(200, [
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 500
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300
      }),
      Animated.delay(2500),
      Animated.parallel([
        Animated.timing(this.state.colorAnimation, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(this.state.scaleAnimation, {
          toValue: 1,
          duration: 300
        })
      ])
    ]).start();
  };

  render() {
    const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)']
    });

    const boxStyle = {
      backgroundColor: backgroundColorInterpolate,
      transform: [
        {
          scale: this.state.scaleAnimation
        }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animated.View style={[styles.box, boxStyle]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Delay;
