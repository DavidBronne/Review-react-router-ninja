import React, {Component} from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom';

class Home extends Component {
    
   state = {
       data:[]
   }
   
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( res => {
                // console.log('res', res.data);
                this.setState({
                    data : res.data.splice(0,10)
                })
            })
    }

    render () {
        const { data } = this.state;
        console.log('data', data)
        const dataList = data.length ? (
            data.map( el => {
                return (
                    <div className='post card' key={el.id}>
                        <div className='card-content' >
                            <NavLink to={'/post/' + el.id}>
                                <span className='card-title' >{el.title}</span>
                                <p>{el.body}</p>
                            </NavLink>
                        </div>
                    </div>
                )
            })
        ) : (
            <div>No Data yet</div>
        )


        return (
            <div className='container'>
                <h4 className='center'>Home</h4>
                {dataList}
            </div>
        )
    }
}

export default Home;