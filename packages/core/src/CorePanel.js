import { memo } from "react";
import { Input } from "antd";
import { connect } from "react-redux";

const Panel = (props) => {
    const { dispatch } = props;

    function changeName(name) {
        dispatch({ type: 'core/updateName', payload: name })
    }

    return (
        <div>
            <div>Shein State Name: {props.name}</div>
            <br />
            <Input value={props.corName} onChange={evt => changeName(evt.target.value)} style={{ width: 200 }} />
        </div>
    )
}
export default connect(({ core, shein }) => ({
    name: shein?.name,
    corName: core?.name
}))(memo(Panel))
