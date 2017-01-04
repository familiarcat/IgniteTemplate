import React, { Component } from 'react'
import styles from "../../Styles/PageStyle"

class Timeline extends Component {

    componentWillMount() {
        // let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        // this.setState({
        //     timeline: ds.cloneWithRows(Object.assign([], this.props.data).sort((a, b) => { return a.year - b.year }))
        // })
    }
    render() {
        return (
            <div style={styles.timelineContainer}>
                <span>Timeline</span>
                {//<ListView scrollEnabled={false} dataSource={this.state.timeline} renderRow={(rowData) => <TimelineEntry year={rowData.year} event={rowData.event} />} />
                }
            </div>
        )
    }
}

class TimelineEntry extends Component {
    render() {
        return (
            <div style={styles.timelineEntryContainer}>
                <div style={{ width: 50 }}>
                    <span style={styles.timelineYear}>{this.props.year}:</span>
                </div>
                <div style={{ width: 100 }}>
                    <span style={styles.timelineEvent}>{this.props.event}</span>
                </div>
            </div>
        )
    }
}

Timeline.propTypes = {
    data: React.PropTypes.array
}

export default Timeline