import {FlatList } from 'react-native'
import React from 'react'

const FlatlistComp = ({DATA,renderItem,style,numberOfColumns=false,numColumns}) => {
  return (
    numberOfColumns ? <FlatList
    style={style}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> : <FlatList
      numColumns={numColumns}
      style={style}
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
    
  )
}

export default FlatlistComp