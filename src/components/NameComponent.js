
import React from "react"
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const NameComponent = () => {
    const {count} = useSelector(state => state)
    
    return (
        <View style={{ padding: 40, backgroundColor: 'green' }}>
            <Text style={{ color: 'yellow', fontSize: 50 }}>{`Tên: ${count.name}`}</Text>
        </View>
    )
}

export default NameComponent






