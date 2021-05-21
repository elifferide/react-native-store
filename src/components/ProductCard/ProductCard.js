import React from 'react';
import {View, Text, TouchableOpacity, Alert, Image} from 'react-native';
import styles from './ProductCard.style';
const ProductCard = ({uruns}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: uruns.imgURL}} />
      <View>
        <Text style={styles.title}>{uruns.title}</Text>
        <Text style={styles.price}>{uruns.price}</Text>
        {!uruns.inStock && <Text style={styles.stock}>STOKTA YOK</Text>}
      </View>
    </View>
  );
};

export default ProductCard;
