import React, { Component } from 'react'
import styles from "../../Styles/PageStyle"

class Testimonials extends Component {

    componentWillMount() {
        
        // let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        // this.setState({
        //     testimonials: ds.cloneWithRows(this.props.data)
        // })
    }

    renderTestimonial(rowData, rowId) {
        return <Testimonial quote={rowData.quote} source={rowData.source} rowId={rowId} />
    }

    render() {
        return (
            <div style={styles.timelineContainer}>
                <span>Testimonails</span>
                {//<div scrollEnabled={true} dataSource={this.state.testimonials} renderRow={(rowData, sectionId, rowId) => this.renderTestimonial(rowData, rowId)} />
                }
            </div>
        )
    }
}

class Testimonial extends Component {
    render() {
        return (
            <div style={styles.testimonialEntryContainer}>
                <div style={this.props.rowId % 2 == 0 ? styles.testimonialEntryAlt : null}>
                    <div>
                        <span style={styles.quote}>{this.props.quote}:</span>
                    </div>
                    <div >
                        <span style={styles.source}>{this.props.source}</span>
                    </div>
                </div>
            </div>
        )
    }
}

Testimonials.propTypes = {
    data: React.PropTypes.array
}

export default Testimonials