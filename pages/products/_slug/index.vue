<template>  
    <div>
        
        <GoodsPart />

    </div>
</template>

<script>
import { log } from 'console';

    export default {
        async asyncData({store, $axios, params}) {
            // try {
            //     await store.dispatch('service/getCategoryProducts', {
            //         axios: $axios,
            //         id: 2,
            //     })
            // } catch (error) {
            //     console.log(error);
            // }
            try {
                await store.dispatch('service/getCategories', {
                    axios: $axios
                })
                const categories = store.state.service.categories;
                console.log(categories);
                console.log(params.slug);
                const category = categories.filter(item => {
                    return item.attributes.slug == params.slug
                })
                await store.dispatch('service/getCategoryProducts', {
                    axios: $axios,
                    id: category[0].id
                })
            } catch (error) {
                console.log(error)
            }
        },
        components: {
            GoodsPart: () => import("@/components/Product-component/ProductsTemplate.vue"),
        }
    }
</script>

<style lang="scss">

</style>