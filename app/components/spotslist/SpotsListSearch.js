import React from 'react'
import { Header, Text, InputGroup, Icon, Input, Button } from 'native-base'

const tags = ['Wifi', 'Alcohol', 'Hot Drinks']
class SpotsListSearch extends React.Component {
  state = {
    query: ''
  }

  doSearch(query) {
    this.props.doSearch(query);
  }

  render(){
    const taglist = tags.map((tag, key) => {
      return <li key={key} onClick={() => this.addTagFilter(tag)}>+{tag}</li>
    })
    return(
      <Header searchBar>
        <InputGroup>
            <Icon name="ios-search" />
            <Input onChangeText={(query) => this.doSearch(query)} placeholder="Search" />
            <Icon name="ios-map" />
        </InputGroup>
        <Button transparent>
            Search
        </Button>
      </Header>
    )
  }
}

export default SpotsListSearch;
