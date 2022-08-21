<template>  
    <div>
        
        <GoodsPart />

    </div>
</template>

<script>
    export default {
        async asyncData({store, $axios}) {
            try {
                await store.dispatch('service/getCategoryProducts', {
                    axios: $axios,
                    id: 2,
                })
            } catch (error) {
                console.log(error);
            }
        },
        components: {
            GoodsPart: () => import("@/components/Product-component/ProductsTemplate.vue"),
        }
    }
</script>

<style lang="scss">

</style>