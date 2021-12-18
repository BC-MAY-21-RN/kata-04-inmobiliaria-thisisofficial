import React from 'react'
import { View, Text } from 'react-native'
import {Icon} from 'react-native-elements'
import { styles } from '../Styles';

export const InfoCard = (props) => {
    const {name, size, rooms, baths, direction, price} = props;
    return (
        <View style={styles.infoCont}>
            <Text style={styles.Title}>{name}</Text>
            <View style={styles.textIcon}>
                <Icon
                type='ionicon'
                name='location'
                color='#1f1f1f'
                size={20}/>
                <Text style={styles.grayText}>{direction}</Text>
            </View>
            <View style={styles.IconCont}>
                <View style={styles.textIcon}>
                    <Icon
                    type='ionicon'
                    name='bed'
                    color='#a3a3a3'
                    size={20}/>
                    <Text style={styles.blackText}>{rooms}</Text>
                </View>
                <View style={styles.textIcon}>
                    <Icon
                    type='material'
                    name='bathtub'
                    color='#a3a3a3'
                    size={20}/>
                    <Text style={styles.blackText}>{baths}</Text>
                </View>
                <View style={styles.textIcon}>
                    <Icon
                    type='ionicon'
                    name='expand'
                    color='#a3a3a3'
                    size={20}/>
                    <Text style={styles.blackText}>{size}</Text>
                </View>
            </View>
            <Text style={styles.Price}>{price}/m</Text>
        </View>
    )
}

