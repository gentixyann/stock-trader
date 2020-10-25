import stocks from '../../data/stocks.js'

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'RND_STOCKS'() {
        
    },
};

const actions = {
    // stocks/Stock.vueのdispatchで使われてる
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    // App.vueのdispatchで使われてる
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

// store.jsのnew Vuex.Storeで使われる
export default {
    state,
    mutations,
    actions,
    getters,
};