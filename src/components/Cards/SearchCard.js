/* eslint-disable react/prop-types */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HP, WP, colors } from '../../shared/exporter';

function SearchCard({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image
                    style={styles.icon}
                    source={{
                        uri: item?.pagemap?.cse_thumbnail
                            ? item?.pagemap?.cse_thumbnail[0].src
                            : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQtcv4fAKkxVdXhdSglG6Ep7wwDzbkNI1k-Uf8bjWPlJjFxjdPVffmdk55y',
                    }}
                />
                <Text style={styles.title} numberOfLines={1}>{`${item?.title.slice(0, 35)}...`}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: HP(3),
        backgroundColor: colors.white,
        marginTop: HP(1),
        padding: HP(2),
        borderRadius: HP(2)
    },
    icon: {
        width: WP(10),
        height: WP(10),
        resizeMode: 'cover',
        borderRadius: HP(5),
    },
    titleContainer: {
        flexDirection: 'row'
    },
    title: {
        margin: HP(1)
    }
});

export { SearchCard };
