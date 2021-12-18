import React from 'react'
import { View, Text } from 'react-native'
import { ImageCard } from "../subcomponents/ImageRating/ImageCard"
import {InfoCard} from "../subcomponents/InfoDump/InfoCard"
import {styles} from "./Styles"



export const HomeCard = (props) => {
    const {home} = props
    const {name , image , rating , size, rooms, baths, direction, price, favorite} = home
    return (
        <View style={styles.Card}>
            <View style={styles.ImageCont}>
                <ImageCard rating={rating} image={image}/>
            </View>
            <View style={styles.InfoCont}>
                <InfoCard name={name} size={size} rooms={rooms} baths={baths} direction={direction} price={price}/>
            </View>
        </View>
    )
}



/*<View style={styles.ImageCont}>
<ImageCard rating={rating} image={image}/>
</View>
<View style={styles.InfoCont}>
    <InfoCard name={name} size={size} rooms={rooms} baths={baths} direction={direction} price={price}/>
</View>*/