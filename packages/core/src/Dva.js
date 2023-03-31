import React from 'react';
import * as core from 'dva-core';
import { Provider, connect } from 'react-redux';
import createLoading from 'dva-loading/dist';
// import models from '@/models';

// https://github.com/dvajs/dva/tree/master/packages/dva-core/src
function getPureProvider(store) {
    // eslint-disable-next-line react/display-name
    return (props) => <Provider store={store}>{props.children}</Provider>;
}

function createRmsDva(opts = {}) {
    const app = core.create(opts);
    app.use(createLoading());
    // models.forEach((model) => app.model(model));
    app.start();

    window.$$state = app._store.getState;
    window.RMS.$$dva = app;
    window.RMS.$$dispatch = app._store.dispatch;

    return getPureProvider(app._store);
}

export { connect };
export default createRmsDva;
