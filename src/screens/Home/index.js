import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from '../../screens/Home/styles';

const Home = () => {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Title text='Where do' style={{ fontWeight: 'normal' }} />
        <Title text='you want to go' />
        <Title text='Explore Attractions' style={styles.subTitle} />
        <Categories categories={['All', 'Popular', 'Historical']} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
