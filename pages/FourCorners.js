import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FourCorners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.ValueXY()
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={this.startAnimation}
          onLayout={this.saveDimensions}
        >
          <Animated.View style={[styles.box]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
    position: 'absolute',
    top: 0,
    left: 0
  }
});

export default FourCorners;
