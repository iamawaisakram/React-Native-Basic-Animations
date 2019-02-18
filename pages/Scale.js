import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

//style
import styles from '../styles/common';

class Scale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1500
      }).start();
    });
  };

  render() {
    const animationStyles = {
      transform: [
        {
          scale: this.state.animation
        }
      ]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animationStyles]}>
            <Text>Flippity Floppity foo!</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Scale;
