import React from 'react'
import { FlatList, StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import ListItems from '../components/ListItems';

export const Favorites = ({ favoritePeople }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ListItems favoritePeople={favoritePeople} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    color: {
        color: 'red'
    },
    list: {
        alignSelf: 'stretch',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3a86ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        alignSelf: 'stretch',
        marginBottom: 0,
        borderRadius: 10
    },
    picture: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
        marginLeft: 20
    },
});