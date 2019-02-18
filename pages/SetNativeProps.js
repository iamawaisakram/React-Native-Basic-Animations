import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
  TouchableOpacity,
  setNativeProps
} from 'react-native';

//style
import styles from '../styles/common';

class SetNativeProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }
  _enabled = true;

  handleToggle = () => {
    this._enabled = !this._enabled;
    let style = [styles.scroll];

    if (!this._enabled) {
      style.push(styles.hide);
    } else {
      style.push(styles.show);
    }

    this._scroll.setNativeProps({
      scrollEnabled: this._enabled,
      style
    });
  };

  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(99,71, 255)', 'rgb(255,99,71)']
    });

    const backgroundStyle = {
      backgroundColor: backgroundInterpolate
      // opacity: backgroundInterpolate
    };

    return (
      <View style={styles.nativePropContainer}>
        <TouchableOpacity onPress={this.handleToggle}>
          <Text>Toggle</Text>
        </TouchableOpacity>
        <ScrollView
          style={styles.scroll}
          ref={scroll => (this._scroll = scroll)}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.state.animation
                  }
                }
              }
            ]
            // { useNativeDriver: true }
          )}
        >
          <Animated.View style={[styles.fakeContent, backgroundStyle]} />
        </ScrollView>
      </View>
    );
  }
}

export default SetNativeProps;
