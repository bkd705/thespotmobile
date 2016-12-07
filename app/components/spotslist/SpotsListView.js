import React from 'react'
import { Content, Text, Card } from 'native-base'
import { connect } from 'react-redux'
import { getSpots } from '../../actions/spotActions'
import SpotsListItem from './SpotsListItem'
import SpotsListSearch from './SpotsListSearch'

class SpotsListView extends React.Component {

  state = {
    spots: [],
    query: '',
    filteredSpots: []
  }

  componentWillMount() {
    if(this.props.spots.length === 0) {
      this.props.getSpots().then(res => {
        console.log('Success')
      }).catch(err => {
        console.log('Error', err)
      })
    }
    if(this.state.spots.length === 0) {
      this.setState({
        isLoading: false,
        spots: this.props.spots,
        filteredSpots: this.props.spots
      })
    }
  }

  componentDidUpdate() {
    if(this.state.spots.length != this.props.spots.length){
      this.setState({
        isLoading: false,
        spots: this.props.spots,
        filteredSpots: this.props.spots
      })
    }
  }

  doSearch(queryText) {
    console.log(queryText)
    let queryResult = []
    queryText = queryText.toLowerCase()
    this.state.spots.forEach(spot => {
      if(spot.name.toLowerCase().indexOf(queryText) != -1) {
        let found = queryResult.some(a => { return a.name === spot.name })
        if(!found) { queryResult.push(spot) }
      }
    })

    this.state.spots.forEach(spot => {
      spot.features.split(',').forEach(ft => {
        if(ft.toLowerCase().indexOf(queryText) != -1){
          let found = queryResult.some(a => { return a.name === spot.name })
          if(!found) { queryResult.push(spot) }
        }
      })
    })

    if(queryText == '') {
      queryResult = this.state.spots
    }

    this.setState({
      query: queryText,
      filteredSpots: queryResult
    })
  }

  render(){
    const spotlist = this.state.filteredSpots.map((spot, key) => {
      return <SpotsListItem key={key} spot={spot} />
    })
    return(
      <Content>
          <SpotsListSearch query={this.state.query} doSearch={this.doSearch.bind(this)} />
          {spotlist}
      </Content>
    )
  }
}

function mapStateToProps(state) {
  return {
    spots: state.spots
  }
}

export default connect(mapStateToProps, { getSpots })(SpotsListView)
