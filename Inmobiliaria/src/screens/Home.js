import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import  HomeList   from '../data/HomeList.json';
import { HomeCard } from '../components/HomeCard';
import { styles } from '../subcomponents/Styles';





export const Home = () => {

    const HomesList = HomeList?.map((Home) =>{
        return(
            <HomeCard key={`HomeList-${Home.id}`}home={Home}/>
        ) 
    })
    
    return (
        <ScrollView style={styles.Scroll}>
            {HomesList}
        </ScrollView>
    )
}
