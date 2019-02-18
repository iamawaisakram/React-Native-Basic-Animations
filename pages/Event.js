import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  ScrollView
} from 'react-native';

//style
import styles from '../styles/common';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: [1, 0]
    });

    const backgroundStyle = {
      backgroundColor: 'tomato',
      opacity: backgroundInterpolate
    };

    return (
      <View style={styles.container}>
        <Animated.ScrollView
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.state.animation
                  }
                }
              }
            ],
            { useNativeDriver: true }
          )}
        >
          <Animated.View style={[styles.content, backgroundStyle]} />
        </Animated.ScrollView>
      </View>
    );
  }
}

export default Event;
