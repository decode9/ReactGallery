import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131c21',
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  inputBox: {
    width: '80%',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 50
  },
  button: {
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 30,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    width: '100%'
  }
});

export default styles;
