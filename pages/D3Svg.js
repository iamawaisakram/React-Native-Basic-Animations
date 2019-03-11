import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { interpolatePath } from 'd3-interpolate-path';

import SVGPath from 'art/modes/svg/path';
import { Tween } from 'art/morph/path';

//for smooth animation
import { interpolate } from 'flubber';

//style
import styles from '../styles/common';

// For increase in size
const startPath = `M45,50a5,5 0 1,0 10,0a5,5 0 1,0 -10,0`;
const endPath = `M20,50a30,30 0 1,0 60,0a30,30 0 1,0 -60,0`;

// For morphing
const startPath1 = `M32,16.009c0-0.267-0.11-0.522-0.293-0.714  l-9.899-9.999c-0.391-0.395-1.024-0.394-1.414,0c-0.391,0.394-0.391,1.034,0,1.428l8.193,8.275H1c-0.552,0-1,0.452-1,1.01  s0.448,1.01,1,1.01h27.586l-8.192,8.275c-0.391,0.394-0.39,1.034,0,1.428c0.391,0.394,1.024,0.394,1.414,0l9.899-9.999  C31.894,16.534,31.997,16.274,32,16.009z`;
const endPath1 = `M27.704,8.397c-0.394-0.391-1.034-0.391-1.428,0  L11.988,22.59l-6.282-6.193c-0.394-0.391-1.034-0.391-1.428,0c-0.394,0.391-0.394,1.024,0,1.414l6.999,6.899  c0.39,0.386,1.039,0.386,1.429,0L27.704,9.811C28.099,9.421,28.099,8.787,27.704,8.397C27.31,8.006,28.099,8.787,27.704,8.397z`;

//For Flubber
const startPath2 = `M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z`;
const endPath2 = `M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z`;

class D3Svg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0)
    };
  }

  componentWillMount() {
    //*********** Increase and decrease size */
    // const pathInterpolation = interpolatePath(startPath1, endPath1);
    // this.state.animation.addListener(({ value }) => {
    //   const path = pathInterpolation(value);
    //   this._path.setNativeProps({
    //     d: path
    //   });
    // });
    // ********** SVG morphing, i.e. from arrow to tick
    // const pathInterpolate = Tween(startPath1, endPath1);
    // const p = new SVGPath();
    // this.state.animation.addListener(({ value }) => {
    //   pathInterpolate.tween(value);
    //   pathInterpolate.applyToPath(p);
    //   this._path.setNativeProps({
    //     d: p.toSVG()
    //   });
    // });

    // For Flubber
    const pathInterpolate = interpolate(startPath2, endPath2, {
      maxSegmentLength: 1
    });

    this.state.animation.addListener(({ value }) => {
      const path = pathInterpolate(value);
      this._path.setNativeProps({
        d: path
      });
    });
  }

  handlePress = () => {
    Animated.sequence([
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 500
      }),
      Animated.delay(1500),
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 500
      })
    ]).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Svg width={150} height={150}>
            <Path
              d={startPath2}
              stroke="black"
              ref={path => (this._path = path)}
            />
          </Svg>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default D3Svg;
