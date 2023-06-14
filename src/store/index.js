import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state() {
        return {
            userId: null,
            token: null,
            tokenExpiration: null,
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        },
        token(state) {
            return state.token;
        },
        isAuthenticated(state) {
            return !!state.token;
        },
    },
    mutations: {
        setUser(state, payload) {
            state.token = payload.token;
            state.userId = payload.userId;
        },
    },
    actions: {
        async login(context, payload) {
            const response = await axios.post(
                "http://127.0.0.1:8000/api/login",
                {
                    email: payload.email,
                    password: payload.password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            // console.log(response.data);
            const responseMeta = response.data.meta;
            const responseData = response.data.data;

            if (!responseMeta.code == 200) {
                console.log(responseData);
                const error = new Error(
                    responseMeta.message ||
                        "Failed to authenticate. Check your login data."
                );
                throw error;
            }

            console.log(responseData);
            localStorage.setItem("token", responseData.token);
            localStorage.setItem("userId", responseData.user.id);
            context.commit("setUser", {
                token: responseData.token,
                userId: responseData.user.id,
            });
        },
        autoLogin(context) {
            const token = localStorage.getItem("token");
            const userId = localStorage.getItem("userId");
            if (token && userId) {
                context.commit("setUser", {
                    token: token,
                    userId: userId,
                });
            }
        },
        logout(context) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            context.commit("setUser", {
                token: null,
                userId: null,
                tokenExpiration: null,
            });
        },
    },
    modules: {},
});
