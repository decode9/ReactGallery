import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131c21',
    width: '100%',
    height: '100%',
  },
  textView: {
    width: '80%',
    marginTop: 10
  },
  text: {
    color: 'white',
    fontSize: 16
  },
  link: {
    color: 'blue',
    fontSize: 16,
    textDecorationLine: 'underline'
  },
  button: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 20,
  },
  buttonText: {
    color: '#131c21',
    textAlign: 'center',
    fontSize: 20,
    width: '100%'
  }
});

export default styles;
