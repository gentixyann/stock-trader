export default {
    // ここのpayloadはContactCoach.vueで送信されるDataのこと
    contactCoach(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            coahId: payload.coahId,
            userEmail: payload.email,
            message: payload.message
        };

        context.commit('addRequest', newRequest);
    }
};