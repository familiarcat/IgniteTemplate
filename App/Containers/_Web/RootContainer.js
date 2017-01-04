import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import StartupActions from '../../Redux/StartupRedux'
import ContentActions from '../../Redux/ContentRedux'
import Content from '../../Components/_Web/Content'




/** The app entry point */
class RootContainer extends Component {
  componentDidMount() {
    this.props.startup()
    this.props.getContent()
    // if redux persist is not active fire startup action
    // if (!ReduxPersist.active) {
    //   this.props.startup()
    // }
  }

  render() {
    return (
      <div>
        <Content data={this.props.content} />
      </div>
    )
  }
}

RootContainer.propTypes = {
}

//const select = state => state

const mapStateToProps = (state) => {
  return {
    content: state.content.payload
  }
}

const mapStateToDispatch = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
  getContent: () => dispatch(ContentActions.contentRequest("web"))
})
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapStateToDispatch)(RootContainer)
