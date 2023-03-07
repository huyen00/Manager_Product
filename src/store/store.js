
import auth from './auth/store'
import manager from './auth/store'

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default {
    namespaced: true,
    modules:{
        auth,
        manager,
    },
    state,
    mutations,
    actions,
    getters,
};