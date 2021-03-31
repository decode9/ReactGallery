import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    backgroundColor: 'rgba(0,0,0,0.4)'
  }
});

export default styles;
