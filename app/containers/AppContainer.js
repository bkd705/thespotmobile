import React, { Component } from 'react'
import { Container, Header, Content, Title, Footer, FooterTab, Button, Icon } from 'native-base'
import { connect } from 'react-redux'
import { getSpots } from '../actions/spotActions'
import SpotsListView from '../components/spotslist/SpotsListView'

class AppContainer extends Component {

  _refresh() {
    this.props.getSpots().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <Container>
          <Header style={{shadowOpacity: 0, borderWidth: 0}}>
              <Title style={{fontWeight: 'bold', fontSize: 18}}>The Spot</Title>
              <Button transparent onPress={this._refresh.bind(this)}>
                  <Icon name='ios-refresh' />
              </Button>
          </Header>
          <Content>
            <SpotsListView />
          </Content>
      </Container>
    )
  }
}

export default connect(null, { getSpots })(AppContainer)
