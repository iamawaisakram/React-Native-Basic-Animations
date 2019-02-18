import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

//style
import styles from '../styles/hoc';

//alteration of pages
import pages from '../utilities/alteration';

class HOC extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        {pages.map((page, index) => {
          return (
            <Text
              onPress={() => this.props.navigation.navigate(`${page.name}`)}
              style={styles.welcome}
              key={index}
            >
              {page.name}
            </Text>
          );
        })}
      </ScrollView>
    );
  }
}

export default HOC;
