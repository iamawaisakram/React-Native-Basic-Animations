import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Easing
} from 'react-native';

//style
import styles from '../styles/common';

class Ease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 200,
      duration: 500,
      // easing: Easing.back(5)
      easing: Easing.bounce
      // easing: Easing.elastic(3)
      // easing: Easing.bezier(0.06, 1, 0.86, 0.23)
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500
      }).start();
    });
  };

  render() {
    const animationStyles = {
      transform: [{ translateY: this.state.animation }]
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

export default Ease;
