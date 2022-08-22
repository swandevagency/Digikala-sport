<template>  
    <div>
        
        <GoodsPart />

    </div>
</template>

<script>
import { log } from 'console';

    export default {
        async asyncData({store, $axios, params}) {
            try {
                await store.dispatch('service/getCategoryProducts', {
                    axios: $axios,
                });
            } catch (error) {
                console.log(error);
            }
            try {
                await store.dispatch('service/getCategories', {
                    axios: $axios
                })
            } catch (error) {
                console.log(error)
            }
        },
        components: {
            GoodsPart: () => import("@/components/Product-component/ProductsTemplate.vue"),
        },
    }
</script>

<style lang="scss">

</style>