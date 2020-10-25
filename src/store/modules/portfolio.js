const state = {
    funds: 1000,
    stocks: [],
};

const mutations = {
    'BUY_STOCK'(state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity,
            });
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, { stockId, stockPrice, quantity }) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.sqlice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
};

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    // portfolio/Portfolio.vueので使用
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,
            }
        });
    },
    funds(state) {
        return state.funds;
    }
};

// store.jsのnew Vuex.Storeで使われる
export default {
    state,
    mutations,
    actions,
    getters,
}