import React, { Component, PropTypes } from 'react'
import Section from "./Section"

/** The app entry point */
class Content extends Component {

  renderSections() {
    return this.props.data.sections.map((section, index) => {
      return <Section key={index} data={section} />
    })
  }
  render () {
    return (
      <div>
        {this.props.data ? this.renderSections() : null}
      </div>
    )
  }
}

Content.propTypes = {
    data: React.PropTypes.object
}

// Wrap the component to inject dispatch and state into it
export default Content
