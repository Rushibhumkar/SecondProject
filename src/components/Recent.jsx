import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import drivers from '../data/MechanicData'

const Recent = () => {
  return (
    <View>
      {drivers.map((item)=>  
      <View style={[styles.mainCont]}>
      <View style={styles.dataCont}>
          <View style={styles.imgCont}>
              <Image source={item.img} style={styles.img}/>
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

  </View>
      )}
        
    </View>
  )
}

export default Recent

const styles = StyleSheet.create({
    dataCont:{
        backgroundColor:'#F0F0F9',
        display:'flex',
        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:10,
        borderWidth:0.5,
        borderColor:'grey',
        paddingHorizontal:15,
        paddingVertical:10,
        justifyContent:'space-between',
        borderRadius:8,
    },
    nameCont:{
        display:'flex',
        flexDirection: "column",
        justifyContent:'space-between',
        marginRight:20,
    },
    imgCont:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
    },
    lastCont:{
        justifyContent:"space-between",
    },
    name:{
        color:'black',
        fontSize:18,
        fontWeight:'bold'
    },
    date:{
        color:'black'
        
    },
    time:{
        color:'black'

    },
    charge:{
        color:'black'

    },
    option:{
        color:'black'

    },
    img:{
        height:60,
        width:60,
        borderRadius:50
    }
})