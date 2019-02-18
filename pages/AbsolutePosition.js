import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import { SafeAreaView } from 'react-navigation';

//style
import styles from '../styles/common';

class AbsolutePosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 40,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    const animationStyles = {
      top: this.state.animation,
      left: this.state.animation,
      right: this.state.animation
    };
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Animated.View style={[styles.absoluteBox, animationStyles]} />
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    );
  }
}

export default AbsolutePosition;
