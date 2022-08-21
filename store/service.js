export const state = () => ({
    products: [],
    categories: [],
    categoryProducts: [],
    barfixes: [],
});

export const mutations = {
    
    setHotOffer: (state, products) => (state.products = products),

    setIntro: (state, categories) => (state.categories = categories),

    setBarfix: (state, Barfixes) => (state.barfixes = Barfixes),

    setCategoryProducts: (state, categoryProducts) => (state.categoryProducts = categoryProducts)
}

export const actions = {
    async getHotOffer({commit}, {axios}) {
        try {
            const url = 'http://localhost:1337/api/products?populate=*';
            const res = await axios.get(url);
            console.log(res.data.data);
            commit('setHotOffer', res.data.data)
        } catch (error) {
            throw error;
        }
    },
    async getCategoryProducts({commit}, {axios, id}) {
        try {
            const url = `http://localhost:1337/api/products?category=${id}&&populate=*`;
            const res = await axios.get(url);
            console.log(res.data.data);
            commit('setCategoryProducts', res.data.data);
        } catch (errors) {
            throw errors
        }
    },
    async getIntro({commit}, {axios}) {
        try{
            const url = 'http://localhost:1337/api/digicategories?populate=*';
            const res = await axios.get(url);
            commit('setIntro', res.data.data)
        } catch(error){
            throw error;
        }
    },

    async getBarfix({commit}, {axios}) {
        try {
            const url = 'http://localhost:1337/api/products/?populate=*';
            const res = await axios.get(url);
            console.log(res.data.data);
            commit('setBarfix', res.data.data)
        } catch (error) {
            throw error;
        }
    },
}