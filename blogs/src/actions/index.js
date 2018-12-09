import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash'

export const fetchPost = () => async dispatch => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        dispatch({type:"FETCH_POSTS", payload:data.slice(0, data.length - 2)})
}


export const fetchUser = id => async dispatch => _fetchUser(id, dispatch)

const _fetchUser = _.memoize(async (id,dispatch) => {
    const response = await jsonPlaceHolder("/users/" + id)
    const data = await response.json()
    dispatch({type:"FETCH_USER", payload:data})
})

