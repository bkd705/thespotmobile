import React, { Component } from 'react'
import { Container, Header, Content, Title, Footer, FooterTab, Button, Icon } from 'native-base'
import SpotsListView from '../components/spotslist/SpotsListView'

class AppContainer extends Component {
  render() {
    return (
      <Container>
          <Header>
              <Title style={{fontWeight: 'bold', fontSize: 18}}>The Spot</Title>
          </Header>
          <Content>
            <SpotsListView />
          </Content>
      </Container>
    )
  }
}

export default AppContainer
