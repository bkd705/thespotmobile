import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Text, Button, Icon, List, ListItem } from 'native-base'
import config from '../../config'

const host = `http://${config.ip}`

const SpotsListItem = ({ spot }) => {
  const features = spot.features.split(',')
  const featureList = features.map((ft, key) => {
    return <Text style={{textAlign: 'center'}}key={key}>{ft}</Text>
  })
  const imgSrc = (`${host}/assets/img/${spot.name.toLowerCase().split(' ').join('').replace(/[^\w\s]/gi, '')}.jpg`)
  const handlePress = () => {
    console.log('Pressed')
  }
  return(
    <Card>
      <CardItem onPress={handlePress}>
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
