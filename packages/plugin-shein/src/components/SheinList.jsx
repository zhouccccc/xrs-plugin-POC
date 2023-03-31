import { Input } from "antd";
import Panel from "./Panel";

const List = (props) => {
    const { tl, name, dispatch, ...rest } = props;

    function changeName(name) {
        dispatch({ type: 'shein/updateName', payload: name })
    }

    return (
        <div style={{ padding: '0 20px 20px 20px' }}>
            <div>{tl('shein.inner', { name })}</div>
            <div>{tl('core.content')}</div>
            <Panel />
            <br />
            <Input value={name} onChange={evt => changeName(evt.target.value)} style={{ width: 200 }} />
        </div>
    )
}
export default List
