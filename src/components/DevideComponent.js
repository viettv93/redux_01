
import React from "react"
import { TouchableOpacity, Text } from 'react-native'
import {  useDispatch } from 'react-redux'
import { devideCount } from "../actions/CountAction"

const DevideComponent = () => {
    const dispatch = useDispatch()

    const devideAction = () => {
        dispatch(devideCount(10))
    }


    return (
        <TouchableOpacity
        onPress={() => devideAction()}
            style={{
                width: 200,
                height: 200,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text style={{ fontSize: 60, color: 'white' }}>-</Text>
        </TouchableOpacity>
    )
}

export default DevideComponent