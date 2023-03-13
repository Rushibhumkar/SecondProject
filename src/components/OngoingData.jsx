import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const OngoingData = ({ item, problem, navigation }) => {
    return (
        <View style={[styles.mainCont]}
            key={item.driverId}
        >
            <View style={styles.outCont}>
                <View style={styles.dataCont}>
                    <View style={styles.imgCont}>
                        <Image source={item.img} style={styles.img} />
                    </View>
                    <View style={styles.nameCont}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.date}>10 Nov , 2022</Text>
                        <Text style={styles.time}>2 hr 30 min</Text>
                    </View>
                    <View style={styles.lastCont}>
                        <Text style={styles.charge}>&#8377;{item.charge}</Text>
                        <Text style={styles.option}>{item.status}</Text>

                    </View>
                </View>
                <View style={styles.flexEnd}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('MoreInfo', { item: item }) }}
                    >
                        <Text style={styles.moreInfoBtn}>More Information</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { Linking.openURL('https://www.google.com/maps/search/?api=1&query=Bombay Garage Pune') }}
                    >
                        <Text style={styles.trackBtn}>Track itemanic</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

export default OngoingData

const styles = StyleSheet.create({

    dataCont: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    nameCont: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        marginRight: 20,
    },
    imgCont: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    },
    lastCont: {
        justifyContent: "space-between",
    },
    outCont: {
        backgroundColor: '#F0F0F9',
        borderWidth: 0.5,
        borderColor: 'grey',
        marginHorizontal: 10,
        borderRadius: 8,
        marginVertical: 10,
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    date: {
        color: 'black'

    },
    time: {
        color: 'black'

    },
    charge: {
        color: 'black'

    },
    option: {
        backgroundColor: 'yellow',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 8,
        color: 'black'

    },
    img: {
        height: 60,
        width: 60,
        borderRadius: 50
    },
    trackBtn: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        backgroundColor: '#5D5FEF',
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 'bold',
    },
    moreInfoBtn: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        backgroundColor: '#3CC974',
        borderRadius: 8,
        fontSize: 13,
        fontWeight: 'bold',
    },
    flexEnd: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    }

})