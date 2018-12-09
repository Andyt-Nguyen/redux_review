import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'
import UserHeader from './UserHeader';


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPost })(
    class PostList extends Component {

        renderList() {
            return this.props.posts.map( a  => (
                <div className="item" key={a.id}>
                    <i className={"large middle aligned icon user"} />
                    <article className={"content"}>
                        <section className={"description"}>
                            <h2>{a.title}</h2>
                            <p>{a.body}</p>
                        </section>
                        <UserHeader userId={a.userId} />
                    </article>
                </div>
            ))
        }
        componentDidMount() {
            this.props.fetchPost()
        }
        render() {
            console.log(this.props)
            
            return (
                <div className={"ui relaxed divided list"}>
                    {this.renderList()}
                </div>
            )
        }
    }
)