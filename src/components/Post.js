import React , {Component} from 'react';
import axios from 'axios';

class Post extends Component {
    state = {
        data:null   
    }

    componentDidMount() {
        console.log('props', this.props.match);
        let id = this.props.match.params.post_id

        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then( res => {
                console.log('res', res);
                this.setState({
                    data:res.data
                })
                
            })
    }

    render() {
        
        const {data} = this.state;

        const post = data ? (
            <div className='post'>
                <h4 className='center'>{data.title}</h4>
                <span>{data.body}</span>
            </div>
        ) : (
            <h4>Post loading</h4>
        )
        console.log('this.state', this.state)
        return(
            <div className='container'>
                {post}
            </div>
        )
    }
}

export default Post;