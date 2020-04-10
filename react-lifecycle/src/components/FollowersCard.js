import React from 'react'

class FollowersCard extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='container'>
                <div>
                    <h2>User: {this.props.data.login}</h2>
                    <h3>Name: {this.props.data.name}</h3>
                    <p>Repositorys: {this.props.data.public_repos}</p>
                    <p>followers: {this.props.data.followers}</p>
                    <p>following: {this.props.data.following}</p>
                </div>
            </div>
        )
    }
}

export default FollowersCard