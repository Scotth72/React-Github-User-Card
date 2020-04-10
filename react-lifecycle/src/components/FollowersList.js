import React from 'react'
import axios from 'axios'
import FollowersCard from './FollowersCard'

class FollowersList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/Scotth72/followers`)
            .then(response => {
                console.log(response)
                this.setState({
                    data: response.data
                })
            })
    }

    render() {
        return (
            <div className='followers'>
                {this.state.data.map(item => (
                    <FollowersCard key={item.id} data={item} />
                ))}
            </div>
        )
    }
}

export default FollowersList
