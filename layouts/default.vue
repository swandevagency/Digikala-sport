<template>
    <div>
        <TheHeader />
    
        <Nuxt />

        
        <Support />
        <TheFooter />
    </div>
</template>
<script>
    export default{
        components:{
            TheHeader: () => import("@/components/reusable/theHeader.vue"),
            TheFooter: () => import("@/components/reusable/theFooter.vue"),
            Support: () => import("@/components/reusable/support.vue"),
        }       
    }
</script>
<style lang="scss">

</style>