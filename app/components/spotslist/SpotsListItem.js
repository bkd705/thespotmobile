import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Text, Button, Icon, List, ListItem } from 'native-base'

const SpotsListItem = ({ spot }) => {
  const features = spot.features.split(',')
  const featureList = features.map((ft, key) => {
    return <Text style={{textAlign: 'center'}}key={key}>{ft}</Text>
  })
  const imgSrc = (`http://localhost:3000/assets/img/${spot.name.toLowerCase().split(' ').join('').replace(/[^\w\s]/gi, '')}.jpg`)
  return(
    <Card>
      <CardItem>
        <Text>{spot.name}</Text>
        <Text note>{spot.address}</Text>
      </CardItem>
      <CardItem>
        <Image style={{ resizeMode: 'cover', width: null }} source={{uri: imgSrc}} />
      </CardItem>
      <CardItem style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {featureList}
      </CardItem>
    </Card>
  )
}

export default SpotsListItem
