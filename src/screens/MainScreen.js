import React from "react"
import { View, Text, TouchableOpacity } from 'react-native'
import AddComponent from "../components/AddComponent"
import DevideComponent from "../components/DevideComponent"
import NameComponent from "../components/NameComponent"
import ResultComponent from "../components/ResultComponent"

const MainScreen = () => {





    return (
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', width: '100%' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AddComponent />
                    <DevideComponent />
                </View>

                <ResultComponent />

                <NameComponent />
            </View>
        </View>
    )
}

export default MainScreen