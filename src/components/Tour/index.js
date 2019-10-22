import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
    state={
        showinfo: false
    }
    handleInfo=() =>{
        this.setState({
            showinfo: !this.state.showinfo   
        })
    }
    render() {
        const {id, city, img, name, info} = this.props.tour
        const {removeTour} = this.props 
        return (
            <article className="tour">
                <div className="img-container">
                    <img 
                        src={img}
                        alt={city} 
                    />
                    <span 
                        className="close-btn" 
                        onClick={()=>
                            removeTour(id)
                        }
                    >
                        <i className="fas fa-window-close" />
                    </span>
                    <div className="tour-info">
                        <h3>{city}</h3>
                        <h4>{name}</h4>
                        <h5>
                            info
                            <span onClick={this.handleInfo}>
                                <i class="fas fa-caret-square-down"></i>     
                            </span>
                        </h5>
                        {this.state.showinfo && <p>{info}</p>}
                    </div>
                </div>
            </article>
        );
    }
}

export default Tour;