import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center'
  },
  percentageBox: {
    width: '20%',
    height: '20%',
    backgroundColor: 'tomato'
  },
  absoluteBox: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: 150,
    backgroundColor: 'tomato'
  },
  backgroundColorBox: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    height: 3000,
    width: 500
  },
  nativePropContainer: {
    flex: 1,
    paddingTop: 50
  },
  scroll: {
    flex: 1,
    opacity: 1
  },
  hide: {
    opacity: 0
  },
  show: {
    opacity: 1
  },
  fakeContent: {
    height: 3000,
    backgroundColor: 'tomato'
  },
  top: {
    borderBottomWidth: 1,
    borderBottomColor: '#AAA'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
