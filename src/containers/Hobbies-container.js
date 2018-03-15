import { connect } from 'react-redux'
import Hobbies from '../components/Hobbies'

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Hobbies)