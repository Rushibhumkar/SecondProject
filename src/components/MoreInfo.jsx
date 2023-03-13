import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
import oneMech from '../data/oneMech'
import users from './UsersData'
// import UserReviews from './UserReviews'

const MoreInfo = ({ navigation, route }) => {

    // const mechanic = route.params.mechanic

    return (
        <ScrollView>
            <View style={styles.mainCont}
                key={oneMech.UID}>
                <View style={[styles.titleCont]}>
                    <Image
                        style={styles.imgStyle}
                        source={oneMech.img}
                    />
                    <View style={styles.title}>
                        <Text style={styles.titleText} >{oneMech.name}</Text>
                        <Text style={styles.titleText} >{oneMech.compname}</Text>
                        <Text style={styles.titleText} >{oneMech.location}</Text>
                        <Text style={styles.titleText} >Id :{oneMech.UID}</Text>
                        <TouchableOpacity style={[styles.locationBtn]}
                            onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=Bombay Garage Pune`)}
                        >
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center', padding: 5 }}>Show Location</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.expCont]}>
                    <Text style={[styles.tb, { fontSize: 20 }]}>Experience: 5years</Text>
                    <Text style={[styles.tb, { paddingHorizontal: 10 }]}>{oneMech.desc}</Text>
                </View>
                <View style={[styles.contactDetailsCont]}>
                    <Text style={[styles.tb, { fontWeight: 'bold', fontSize: 22 }]}>Contact Details</Text>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Text style={[styles.tb]}>Address :{oneMech.address}</Text>
                        <Text style={[styles.tb]}>Mob No. :{oneMech.phoneNum}</Text>
                        <Text style={[styles.tb]}>Email ID :{oneMech.email}</Text>
                    </View>
                </View>
                <View style={styles.servicesCont}>
                    <Text style={[styles.tb, { fontWeight: 'bold', fontSize: 22, marginBottom: 10 }]}>Services</Text>
                    <View style={styles.servicesInnCont}>
                        <Text style={[styles.tb, styles.border]}>Engine Repair</Text>
                        <Text style={[styles.tb, styles.border]}>Cleanign</Text>
                        <Text style={[styles.tb, styles.border]}>Fuel & Oil</Text>
                        <Text style={[styles.tb, styles.border]}>AC Service & Repair</Text>
                        <Text style={[styles.tb, styles.border]}>Cleaning</Text>
                    </View>
                </View>
                <View style={styles.minChargeCont}>
                    <Text style={[styles.tb, { fontWeight: 'bold', fontSize: 22, marginBottom: 7 }]}>Minimum Charge</Text>
                    <Text style={[styles.tb, { paddingHorizontal: 10 }]}>Starting {oneMech.mincharge}.Rs Onwards</Text>
                </View>
                <View style={styles.reviewCont}>
                    <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>User Reviews</Text>
                    <FlatList
                        data={users}
                        keyExtractor={(key) => key.userId}
                        horizontal
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.reviewInnCont}>
                                    <View style={styles.col}>
                                        <View style={[styles.row, styles.flexEnd]}>
                                            <Image style={styles.userImg} source={item.img} />
                                            <View style={styles.col}>
                                                <Text style={styles.userName}>{item.name}</Text>
                                                <View style={styles.starRow}>
                                                    <Icon name='staro' size={20} color={'black'} />
                                                    <Icon name='staro' size={20} color={'black'} />
                                                    <Icon name='staro' size={20} color={'black'} />
                                                    <Icon name='staro' size={20} color={'black'} />
                                                    <Icon name='staro' size={20} color={'black'} />
                                                </View>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={styles.desc}>{item.desc}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </ScrollView>

    )
}

export default MoreInfo

const styles = StyleSheet.create({
    tb: {
        color: 'black'
    },
    mainCont: {
        paddingHorizontal: 15,
        paddingVertical: 10,

    },
    titleText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    locationBtn: {
        backgroundColor: 'green',
        marginVertical: 5,
        borderRadius: 8,
    },
    flexEnd: {
        justifyContent: 'space-between'
    },
    reviewInnCont: {
        backgroundColor: '#DECAFF',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 12,
        width: 200,
        marginRight: 5
    },
    reviewCont: {
        marginHorizontal: 8,
        marginVertical: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        marginBottom: 20
    },
    titleCont: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        marginHorizontal: 8
    },
    userImg: {
        backgroundColor: 'grey',
        width: '20%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'black',
    },
    imgStyle: {
        width: '30%',
        height: undefined,
        aspectRatio: 1,
        borderRadius: 50,
        borderWidth: 0.2,
        borderColor: 'black',
        marginRight: 10,
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flexDirection: 'column'
    },
    minChargeCont: {
        marginVertical: 5,
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginHorizontal: 8,
    },
    expCont: {
        marginTop: 5,
        marginVertical: 5,
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginHorizontal: 8
    },
    contactDetailsCont: {
        marginVertical: 5,
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginHorizontal: 8

    },
    starRow: {
        flexDirection: 'row',
    },
    servicesInnCont: {
        paddingHorizontal: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        paddingBottom: 5,
    },
    servicesCont: {
        paddingHorizontal: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 5,
    },
    border: {
        borderColor: 'grey',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderWidth: 0.6,
        marginHorizontal: 4,
        marginBottom: 4,
        borderRadius: 8,
    },
    tb: {
        color: 'black'
    },
    reviewTxt: {
        paddingHorizontal: 10
    },
    mainCont: {
        borderWidth: 0.5,
        borderColor: 'grey'
    },
    userName: {
        color: 'black',

    },
    desc: {
        color: 'black',
    }
})