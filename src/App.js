import React from 'react';

import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import ProductCard from './components/ProductCard';
import product from './product_data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>PATİKASTORE</Text>
        <TextInput style={styles.searchbox} placeholder="  Ara..." />
        <FlatList
          style={styles.flatlist}
          numColumns={2}
          data={product}
          renderItem={({item}) => <ProductCard uruns={item} />}></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatlist: {
    margin: 5,
  },
  searchbox: {
    margin: 12,
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    color: 'purple',
    paddingLeft: 14,
    fontWeight: 'bold',
  },
  bannerImg: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  banner: {
    height: Dimensions.get('window').height / 4,
  },
});

export default App;
