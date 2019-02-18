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

class Spring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1)
    };
  }

  handlePress = () => {
    this.state.animation.addListener(({ value }) => {
      console.log(value);
    });
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,
      tension: 160,
      useNativeDriver: true
    }).start(() => {
      Animated.spring(this.state.animation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true
      }).start();
    });
  };

  render() {
    const animationStyles = {
      transform: [{ scale: this.state.animation }]
    };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animated.View style={[styles.box, animationStyles]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default Spring;
