import List from "./components/SheinList";
import { mapParser } from "./util";
import locales from './locales'
import model from './model'

export default {
    namespace: 'shein',
    rootWithStates: true,

    List,
    locales,
    model,
    mapParser,
}
