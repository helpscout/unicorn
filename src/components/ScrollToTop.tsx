import * as React from 'react'
import connectWithRouter from '../connect/connectWithRouter'

export const scrollToTop = () => {
  window.scrollTo(0, 0)
}

interface Props {
  location: any
}

class ScrollToTop extends React.Component<Props> {
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      scrollToTop()
    }
  }

  render() {
    return null
  }
}

export default connectWithRouter()(ScrollToTop)
