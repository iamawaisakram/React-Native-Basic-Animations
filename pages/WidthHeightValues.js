import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, Animated } from 'react-native';

//style
import styles from '../styles/common';

class WidthHeightValues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(150),
      animationWithPercentage: new Animated.Value(0)
    };
  }

  startAnimation = () => {
    Animated.timing(this.state.animationWithPercentage, {
      // toValue: 300,
      toValue: 1,
      duration: 1500
    }).start(() => {
      Animated.timing(this.state.animationWithPercentage, {
        // toValue: 50,
        toValue: 0,
        duration: 1500
      }).start();
    });
  };

  render() {
    const animationStyles = {
      width: this.state.animation,
      height: this.state.animation
    };

    const widthInterpolate = this.state.animationWithPercentage.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '60%']
    });

    const heightInterpolate = this.state.animationWithPercentage.interpolate({
      inputRange: [0, 1],
      outputRange: ['20%', '30%']
    });

    const animationStylesWithPercentage = {
      width: widthInterpolate,
      height: heightInterpolate
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View
            style={[styles.percentageBox, animationStylesWithPercentage]}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
// Animate without percentage
//  <View style={styles.container}>
//   <TouchableWithoutFeedback onPress={this.startAnimation}>
//     <Animated.View style={[styles.box, animationStyles]} />
//   </TouchableWithoutFeedback>
// </View>

export default WidthHeightValues;
