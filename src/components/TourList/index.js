import React, { Component } from 'react';
import Tour                 from 'components/Tour';
import {tourData}           from 'Data/tourData';
import './TourList.scss'

class TourList extends Component {
    state={
        tours: tourData
    }
    removeTour = id => {
        const tours = this.state.tours
        const sortedTours = tours.filter(tour => tour.id !== id)
        this.setState({
            tours: sortedTours
        })
    }
    render() {
        const {tours} = this.state
        return (
            <div className="tourlist">
                {tours.map(tour => {
                    return(
                        <Tour 
                            key={tour.id}
                            tour = {tour}
                            removeTour = {this.removeTour}
                        />    
                    )
                })}
            </div>
        );
    }
}

export default TourList;