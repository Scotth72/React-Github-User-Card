import React from 'react'


class UserCard extends React.Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className='container main'>
                <img src={this.props.data.avatar_url} />
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

export default UserCard