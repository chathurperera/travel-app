import React from 'react';
import { FlatList, Text, View } from 'react-native';

const Categories = ({ categories }) => {
    return (
        <>
            <FlatList
                data={categories}
                renderItem={({ item }) => {
                    <Text>{item}</Text>
                }} />
        </>
    );
};

export default React.memo(Categories);
