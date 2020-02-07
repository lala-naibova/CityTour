import React,{Component} from 'react';
import './tour.scss';

export default class Tour extends Component{
    constructor(props){
        super(props);
        this.state={showinfo: false};
    }
    showInfo = () =>{
        
        let check = this.state.showinfo;
        this.setState({showinfo: !check});
    }
    render(){
        const {id,city, img,name, info} = this.props.tour;
        const {removeTour} = this.props
        return(
            <article className='tour'>
                <div className='img-container'>
                    <img src={img} alt='city'></img>
                    <span className='close-btn' onClick={()=>removeTour(id)}>
                        <i className='fas fa-window-close'></i>
                    </span>
                </div>
                <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info<span onClick={this.showInfo}><i className='fas fa-caret-square-down'></i></span></h5>
                    {this.state.showinfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}