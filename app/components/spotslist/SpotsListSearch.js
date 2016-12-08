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
      <Header searchBar style={{backgroundColor: 'white' }}>
        <InputGroup style={{borderWidth: 0, shadowOpacity: 0}}>
            <Icon name="ios-search" />
            <Input style={{borderWidth: 0, shadowOpacity: 0}} onChangeText={(query) => this.doSearch(query)} placeholder="Search by Feature or Name" />
        </InputGroup>
        <Button transparent>
            Search
        </Button>
      </Header>
    )
  }
}

export default SpotsListSearch;
