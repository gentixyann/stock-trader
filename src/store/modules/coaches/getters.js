export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(state, getters, rootState, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;
        // someは配列が条件を一つでも満たしていればtrueを返す
        return coaches.some(coach => coach.id === userId);
    }
};