import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'
import drivers from '../data/MechanicData'
import OngoingData from './OngoingData'

const Ongoing = ({ navigation, route }) => {

    // const { problem } = route.params;


    const [bookings, setBookings] = useState([])

    useEffect(() => {
        setBookings(drivers.filter((item) => {
            return item.status === 'Pending'
        }))

    }, [])


    return (
        <View>
            {bookings.map((item) => {

                return (
                    <OngoingData item={item} key={item.driverId} navigation={navigation} />
                )
            }

            )
            }
        </View>
    )
}

export default Ongoing;

const styles = StyleSheet.create({})