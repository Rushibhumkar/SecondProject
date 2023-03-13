// import { StyleSheet, Text, View, Dimentions } from 'react-native'
// import React from 'react'
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

// const { width, height } = Dimentions.get('window')
// const ASPECT_RATIO = width / height;
// const LATITUDE_DELTA = 0.02;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const INITIAL_POSITION = {
//     latitude: 37.4219,
//     longitude: -122.084,
//     latitudeDelta: LATITUDE_DELTA,
//     longitudeDelta: LONGITUDE_DELTA
// }

// const Maps = () => {
//     return (
//         <View style={styles.cont}>
//             <MapView style={styles.map} provide={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION} />
//             <GooglePlacesAutocomplete
//                 placeholder='Search'
//                 onPress={(data, details = null) => {
//                     // 'details' is provided when fetchDetails = true
//                     console.log(data, details);
//                 }}
//                 query={{
//                     key: 'AIzaSyCtyFH3gjeKZten1hMQ3OQ8LNDlPTtwUuY',
//                     language: 'en',
//                 }}
//             />
//         </View>
//     )
// }

// export default Maps

// const styles = StyleSheet.create({
//     cont: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#fff',
//         justifyContent: 'center'
//     },
//     map: {

//     }
// })