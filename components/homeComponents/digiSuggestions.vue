<template>
  <div>
        <div class="suggestions-section-wrapper">
            <div class="suggestion-header">
                <h3>تخفیف‌ها</h3>
            </div>
            <div class="suggestion-blocks-wrapper">
                <div class="suggestion-blocks" v-for="product in products" :key="product.id">
                    <div class="suggestion-item-background">
                        <img :src="`http://localhost:1337${product.attributes.picture.data[0].attributes.url}`"/>
                    </div>
                    <p class="discount-line">{{ product.attributes.price }}</p>
                    <p>{{ product.attributes.discount }}</p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    props: {
        suggestionTitle: String
    },
    computed: {
        products() {
            const discount = this.$store.state.service.products;
            const newDiscount = discount.slice(0,6)
            return newDiscount
        }
    },
    methods:{
        SuggestionLeftControl(){
            document.querySelector('.right-control-suggestion').style.display = 'initial';
            document.querySelector('.left-control-suggestion').style.display = 'none';
            
            let tl = gsap.timeline({});
                tl.to(".suggestion-blocks", {x: '+101px'});
        },
        SuggestionRightControl(){
            document.querySelector('.right-control-suggestion').style.display = 'none';
            document.querySelector('.left-control-suggestion').style.display = 'initial';
            
            let tl = gsap.timeline({});
                tl.to(".suggestion-blocks", {x: '0px'});
        }
    }
}
</script>


<style lang="scss">
@import "@/assets/scss/color.scss";
    .suggestions-section-wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px 0px;
        position: relative;
    }

    .suggestion-header{
        margin-bottom: 15px;
        h3{
            font-size:1.5em;
            font-weight: 500;
            cursor: default;
        }
    }

    .suggestion-blocks-wrapper{
        width: 100%;
        border-radius: 16px;
        border:1px solid $border-color;
        display: flex;
        flex-flow: row nowrap;
        overflow-x: scroll;
    }

    .suggestion-blocks-wrapper::-webkit-scrollbar{
        display:none;
    }

    .suggestion-blocks{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 17%;
        border:1px solid $border-color;
        padding: 0px 48px;
    }


    .suggestion-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        cursor: pointer;

        p{
            font-size: 1.1em;
            font-display: 400;
        }
    }

    .suggestion-item:hover{
        box-shadow: 0px 0px 5px #00000030;
    }

    .sugg-border-bottom{
        border-bottom:1px solid $border-color;
    }

    .suggestion-item-background{
        width: 84px;
        height: 84px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;

        }
    }
    
    .discount-line{
        text-decoration: line-through;
    }


    @media only screen and (max-width: 992px){
        .suggestion-blocks-wrapper{
            border: none;
            
            & >div:last-child{
                display: none;
            }

        }
        
    }
    @media only screen and (max-width: 768px){
        .suggestion-blocks{
            width: 26%;
        }
    }

    @media only screen and (max-width: 576px){
        .suggestion-blocks{
            width: 35%;
        }
    }

    @media only screen and (max-width: 360px){
        .suggestion-blocks{
            width: 54%;
        }
    }


</style>