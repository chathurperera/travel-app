import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const AttractionCard = ({ imageSrc, title }) => {
    return (
        <View style={styles.card} >
            <Image style={styles.image}  source={{ uri: imageSrc }} />
            <Text style={styles.title} >{title}</Text>
        </View>
    )
}

export default AttractionCard