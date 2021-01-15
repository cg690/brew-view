import React from 'react';
import { connect } from 'react-redux';
import { fetchBeers } from '../../actions';


class BeerList extends React.Component {
  

  renderList = () => {
    
    if(this.props.beers.length > 0){
      return this.props.beers.map( beer => {
        return (
          <div key={beer.bid}>
            <h1>{beer.name}</h1>
            <p>{beer.brewery}</p>
          </div>
        )
      })
    }
  }

  render(){
    return (
      <div>
        {this.renderList()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    beers: Object.values(state.beers)
  }
}


export default connect(mapStateToProps, { fetchBeers })(BeerList);