import React from 'react'
import { View, Text, Image } from 'react-native'
import {Icon} from 'react-native-elements'
import { styles } from "../Styles"

export const ImageCard = ( props ) => {
    const {rating, image} = props;
    return (
        <View>
            <Image style={styles.imageCard} source={{uri: image}}/>
            <View style={styles.ratingCont}>
                <Icon
                type='ionicon'
                name='star'
                color='#f2920c'
                style={styles.icon}
                size={10}/>
                <Text style={styles.rating}>{rating}</Text>
            </View>
            
        </View>
    )
}


