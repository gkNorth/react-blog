import { connect } from 'react-redux'
import { increment } from "../actions";

const GoodBtn = props => {
  return (
    <button className="btn btn-outline-success" onClick={()=>props.increment(props.name)}>Good! {props.value}</button>
  )
}

const mapStateToProps = (state, ownProps) => ({
   value: state.count[ownProps.name]
})

const mapDispatchToProps = dispatch => ({
  increment: name => dispatch(increment(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(GoodBtn)