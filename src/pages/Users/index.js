
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getUsers } from "../../store/actions"
import "./styles.css"

const Users = () => {
    const dispatch = useDispatch()
    const usersList = useSelector(state => state.tasks)
    const {loading, error, users} = usersList
    useEffect(() => {
        dispatch(getUsers()) 
      }, [dispatch])
    return (
      <table class="styled-table">
       <thead>
          <tr>
              <th>Name</th>
          </tr>
       </thead>
       <tbody>
            {loading ? "Loading..." : error ? error.message : users.map(u => <tr><td>{u.name}</td></tr>)}
       </tbody>
      </table>
    )
  }

export default Users