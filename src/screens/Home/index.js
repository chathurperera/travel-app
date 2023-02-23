import React from 'react';
import { SafeAreaView, View } from 'react-native';
import AttractionCard from '../../components/AttractionCard';
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
        <Categories selectedCategory='All' categories={['All', 'Popular', 'Historical', 'adada', 'adAd', 'dqcsa', 'acdq', 'adXa', 'adda']} />
        <AttractionCard
          title='Ha Long Bay - Vietnam'
          imageSrc="https://s1.travix.com/blog/as/asia-vietnam-halong-bay-boats-blue-water-sunny-small.jpg" />
      </View>
    </SafeAreaView>
  );
};

export default Home;
