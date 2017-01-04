import React, { Component } from 'react'
import { View, ListView, Text } from 'react-native'
import styles from "../../Styles/PageStyle"

class Testimonials extends Component {

    componentWillMount() {
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.setState({
            testimonials: ds.cloneWithRows(this.props.data)
        })
    }

    renderTestimonial(rowData, rowId) {
        return <Testimonial quote={rowData.quote} source={rowData.source} rowId={rowId} />
    }

    render() {
        return (
            <View style={styles.timelineContainer}>
                <ListView scrollEnabled={true} dataSource={this.state.testimonials} renderRow={(rowData, sectionId, rowId) => this.renderTestimonial(rowData, rowId)} />
            </View>
        )
    }
}

class Testimonial extends Component {
    render() {
        return (
            <View style={styles.testimonialEntryContainer}>
                <View style={this.props.rowId % 2 == 0 ? styles.testimonialEntryAlt : null}>
                    <View>
                        <Text style={styles.quote}>{this.props.quote}:</Text>
                    </View>
                    <View >
                        <Text style={styles.source}>{this.props.source}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

Testimonials.propTypes = {
    data: React.PropTypes.array
}

export default Testimonials