import React from 'react'
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getUserDetail } from '../redux/actions'
import { cleanDetail } from '../redux/actions'

const Detail = () => {
    const {id} = useParams()
    const userDetail = useSelector(state => state.userDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserDetail(id));

        // Desmontaje
        return () => {
            dispatch(cleanDetail())
        }

    }, [])

    return (
        <div>
            <h1>Detail user número {userDetail.id}</h1>
            <hr />
            <h2>{userDetail.name}</h2>
            <p>{userDetail.email}</p>
            <p>{userDetail.phone}</p>
        </div>
    )
}

export default Detail