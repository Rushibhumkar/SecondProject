import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-vector-icons/AntDesign'
import users from './UsersData'
// import { FlatList } from 'react-native-gesture-handler'

const UserReviews = (users) => {
    return (
        <View>
            <FlatList
                data={users}
                renderItem={({ users }) => {
                    return (
                        <View>
                            <View style={styles.mainCont}>
                                <View style={styles.col}>
                                    <View style={styles.row}>
                                        {/* <Image source={users.img} /> */}
                                        <View style={styles.col}>
                                            <Text style={styles.userName}>{users.name}</Text>
                                            <View style={styles.starRow}>
                                                <Icon name='staro' size={20} color='black' />
                                                <Icon name='staro' size={20} color='black' />
                                                <Icon name='staro' size={20} color='black' />
                                                <Icon name='staro' size={20} color='black' />
                                                <Icon name='staro' size={20} color='black' />
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.desc}>{users.desc}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }}
                horizontal
                keyExtractor={users => users.userId}
            />
        </View>
    )
}

export default UserReviews

const styles = StyleSheet.create({
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
        color: 'black'
    }
})