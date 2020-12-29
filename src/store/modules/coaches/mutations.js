export default {
    // ここのpayloadはactionsでcommitされたcoachData
    registerCoach(state, payload) {
        state.coaches.push(payload);
    }
};