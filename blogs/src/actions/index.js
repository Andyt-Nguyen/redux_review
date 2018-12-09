import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash'

export const fetchPostAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost()) // makes sure this function finishes its request
    // const userIds = _.uniq(_.map(getState().posts, "userId"))
    // userIds.forEach( a => dispatch(fetchUser(a)))
    _.chain(getState().posts)
        .map("userId")
        .uniq()
        .forEach(a => dispatch(fetchUser(a)))
        .value()

} 

export const fetchPost = () => async dispatch => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        dispatch({type:"FETCH_POSTS", payload:data.slice(0, data.length - 2)})
}

/**
 * Memoize Verson of getting the user
 */
// export const fetchUser = id => async dispatch => _fetchUser(id, dispatch)
// const _fetchUser = _.memoize(async (id,dispatch) => {
//     const response = await jsonPlaceHolder("/users/" + id)
//     const data = await response.json()
//     dispatch({type:"FETCH_USER", payload:data})
// })

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder("/users/" + id)
    const data = await response.json()
    dispatch({ type:"FETCH_USER", payload: data })
}
