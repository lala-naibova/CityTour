import React, {Component} from 'react';
import Tour from '../Tour'
import './tourlist.scss'
import {tourData} from '../../tourData';

export default class TourList extends Component{
    constructor(props){
        super(props);
        this.state= {tour : tourData};
    }
    removeTour = (id) => {
        this.setState({tour: this.state.tour.filter(elem=> elem.id !== id)}) 
    }
    render(){
        return(
            <section className='tourlist'>
                {
                    this.state.tour.map(item=>(
                        <Tour key={item.id} tour={item} removeTour={this.removeTour}/>
                    ))
                }
            </section>
        )
    }
}