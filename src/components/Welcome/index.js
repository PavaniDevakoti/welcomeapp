// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSub: false}

  onSubscribe = () => {
    this.setState({isSub: true})
  }

  onSubscribed = () => {
    this.setState({isSub: false})
  }

  render() {
    const {isSub} = this.state

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {isSub ? (
          <button type="button" className="button" onClick={this.onSubscribed}>
            Subscribed
          </button>
        ) : (
          <button type="button" className="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
