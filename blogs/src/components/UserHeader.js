import React from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'

const mapStateToProps = (state, ownProps) => {
    const user = state.users.find( a => a.id === ownProps.userId)    
    return {
        user
    }
}
export default connect(mapStateToProps, { fetchUser })(
    class UserHeader extends React.Component {
        componentDidMount() {
            this.props.fetchUser(this.props.userId)
        }
        render() {
            const { user } = this.props
            if(!user) {
                return null
            }
            return (
                <div className="header">
                   {user.name} 
                </div>
            )
        }
    }
)