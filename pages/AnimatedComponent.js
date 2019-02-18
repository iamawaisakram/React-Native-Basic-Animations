import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  Button
} from 'react-native';

//style
import styles from '../styles/common';

const AnimatedButton = Animated.createAnimatedComponent(Button);

class AnimatedComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(1)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500
      }).start();
    });
  };

  render() {
    const animatedColor = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)']
    });

    const animationStyles = {};
    return (
      <View style={styles.container}>
        <AnimatedButton
          title="Press me"
          onPress={this.startAnimation}
          color={animatedColor}
        />
      </View>
    );
  }
}

export default AnimatedComponent;
