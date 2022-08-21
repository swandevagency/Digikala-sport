<template>
    <div>
            <Sport />
    </div>    
</template>

<script>
    export default {       
        data() {
            return{
            }
        },
        async asyncData({store, $axios}) {
            try {
                await store.dispatch('service/getHotOffer', {
                    axios: $axios
                })
            } catch (error) {
                console.log(error);
            }

            try{
                await store.dispatch('service/getIntro', {
                    axios: $axios
                })
            } catch (error) {
                // this.msg = 'مشکلی پیش آمده لطفا بعدا تلاش فرمایید'
            }
        },
        name: 'IndexPage',
        components: {
            Sport:() => import('./sport.vue')
        }, 
    }
</script>

<style lang="scss">
    .main-container{
        margin: 0px 96px;
        padding: 0px 16px;
    }

    @media only screen and (max-width: 992px){
        .first-category-banner-items{
            flex-basis: 49%;
        }

        .main-container{
            margin: 0px 0px;
        }
    }

</style>