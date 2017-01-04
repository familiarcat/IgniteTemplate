import React, { Component } from 'react'
import { View, ListView, Text } from 'react-native'
import styles from "../../Styles/PageStyle"

class Timeline extends Component {

    componentWillMount() {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.setState({
            timeline: ds.cloneWithRows(Object.assign([], this.props.data).sort((a, b) => { return a.year - b.year }))
        })
    }
    render() {
        return (
            <View style={styles.timelineContainer}>
                <ListView scrollEnabled={false} dataSource={this.state.timeline} renderRow={(rowData) => <TimelineEntry year={rowData.year} event={rowData.event} />} />
            </View>
        )
    }
}

class TimelineEntry extends Component {
    render() {
        return (
            <View style={styles.timelineEntryContainer}>
                <View style={{ width: 50 }}>
                    <Text style={styles.timelineYear}>{this.props.year}:</Text>
                </View>
                <View style={{ width: 100 }}>
                    <Text style={styles.timelineEvent}>{this.props.event}</Text>
                </View>
            </View>
        )
    }
}

Timeline.propTypes = {
    data: React.PropTypes.array
}

export default Timeline