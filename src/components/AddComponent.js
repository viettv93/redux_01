import React from "react"
import { TouchableOpacity, Text } from 'react-native'
import {  useDispatch } from 'react-redux'
import { changeCount } from "../actions/CountAction"

const AddComponent = () => {
    const dispatch = useDispatch()

    const addAction = () => {
        dispatch(changeCount(99))
    }

    return (
        <TouchableOpacity
            onPress={() => addAction()}
            style={{
                width: 200,
                height: 200,
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text style={{ fontSize: 60, color: 'white' }}>+</Text>
        </TouchableOpacity>
    )
}

export default AddComponent