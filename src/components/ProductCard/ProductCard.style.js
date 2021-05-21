import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    margin: 10,
    borderRadius: 10,
    width: Dimensions.get('window').width / 2 - 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 5,
    marginLeft: 12,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    margin: 10,
    marginBottom: 0,
    borderRadius: 10,
  },
  price: {
    paddingBottom: 7,
    paddingLeft: 12,
    paddingTop: 0,
    fontWeight: 'bold',
  },
  stock: {
    color: 'red',
    fontSize: 16,
    padding: 12,
    paddingTop: 5,
    fontWeight: 'bold',
  },
});
