import { memo } from "react";
import { connect } from "react-redux";

const Panel = (props) => {
    return <div>Core State Name: {props.name}</div>
}
export default connect(({ core }) => ({
    name: core?.name
}))(memo(Panel))
