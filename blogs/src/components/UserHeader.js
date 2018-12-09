import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
    const user = state.users.find( a => a.id === ownProps.userId)    
    return {
        user
    }
}
export default connect(mapStateToProps)(
    class UserHeader extends React.Component {
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