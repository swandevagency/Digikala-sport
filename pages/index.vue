<template>
        <div>
        <div class="electronic-devices-wrapper">
            <div class="landing-image">
                <img src="../static/Sport/landing.jpg"/>
            </div>

            <HotOffers />

            <div class="product-category-section-wrapper">
                <h2>خرید براساس دسته بندی</h2>
                <div class="product-category">
                    <div class="product-category-item" @click="redirectToBarfix">
                        <div>
                            <img src="../static/product-category/barfix.jpg" />
                        </div>
                        <h4>بارفیکس</h4>
                    </div>
                    <div class="product-category-item" @click="redirectToTanab">
                        <div>
                            <img src="../static/product-category/rope.jpg" />
                        </div>
                        <h4>طناب</h4>
                    </div>
                    <div class="product-category-item" @click="redirectToToop">
                        <div>
                            <img src="../static/product-category/ball.jpg" />
                        </div>
                        <h4>توپ</h4>
                    </div>
                </div>
            </div>

            <div class="electronic-devices-banners-section">
                <a class="electronic-devices-banner">
                    <img src="../static/sport-banners/1.jpg" />
                </a>
                <a class="electronic-devices-banner">
                    <img src="../static/sport-banners/2.jpg" />
                </a>
                <a class="electronic-devices-banner">
                    <img src="../static/sport-banners/3.jpg" />
                </a>
                <a class="electronic-devices-banner">
                    <img src="../static/sport-banners/4.jpg" />
                </a>
            </div>
            


            <SpecialOffer />
            <div id="best-in-month"></div>

            <DigiSuggestions suggestion-title="دسته‌بندی‌های پیشنهادی"/>            
            <div id="discount"></div>

            <blog />
            <div id="blog"></div>

        </div>
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
        HotOffers:() => import ("@/components/homeComponents/hotOffers.vue"),
        DigiSuggestions: () => import ("@/components/homeComponents/digiSuggestions.vue"),
        blog: () => import ("@/components/homeComponents/blog.vue"),
        SpecialOffer: () => import ("@/components/homeComponents/specialServices.vue"),
    },  
    methods: {
        redirectToBarfix() {
            this.$router.push('/products/barfix')
        },
        redirectToTanab() {
            this.$router.push('/products/rope')
        },
        redirectToToop() {
            this.$router.push('/products/ball')
        }
    }
    }
</script>

<style lang="scss">
    
    // .main-container{
    //     margin: 0px 96px;
    //     padding: 0px 16px;
    // }

    // @media only screen and (max-width: 992px){
    //     .first-category-banner-items{
    //         flex-basis: 49%;
    //     }

    //     .main-container{
    //         margin: 0px 0px;
    //     }
    // }
@import "@/assets/scss/color.scss";
    .landing-image{
        width: 100%;
        margin-bottom: 30px;
        img{
            width: 100%;
            border-radius: 8px;
        }
    }

    .hot-offers-section{
        background: linear-gradient(to top,#70b950,#5c9b40);
    }

    .hot-offer-goods{
        background-color: #5c9b40 !important;
    }

    .electronic-devices-wrapper{
        margin-top: 50px;
        padding: 0px 120px;
    }

    .hero-section{
        border-radius: 16px;
    }

    .hot-offers-section{
        margin: 20px 0px 25px;
    }

    .product-category-section-wrapper{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px 0px;

        h2{
            font-size: 1.7em;
            margin-bottom: 20px;
        }
    }

    .product-category{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .product-category-item{
        flex-basis: 30%;
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;

        img{
            width: 100%;
        }

        h4{
            font-size: 1em;
        }
    }

    .electronic-devices-banners-section{
        display: grid;
        grid-template-columns: repeat(2,minmax(0,1fr));
        gap: 16px;
        margin: 60px 0px 20px;
    }

    .electronic-devices-banner{
        flex-basis: 49%;

        img{
            border-radius: 16px;
            width: 100%;
            height: 100%;
        }
    }

    .best-in-month{
        margin-bottom: 150px;
    }

    .digital-description-section{
        width: 100%;
        margin-top: 30px;

        h1{
            color: #62666d;
            font-size: 1.5em;
            font-weight: 300;
            cursor: default;
        }
        
        h2{
            color: #62666d;
            font-size: 1.8em;
            font-weight: 300;
            cursor: default;
        }

        p{
            color:#a1a3a8;
            font-size: 0.9em;
            cursor: default;
        }
    }

    .digital-description-button{
        outline: none;
        border: none;
        background: none;
        cursor: pointer;

        margin-top: 30px;
        div{
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
        }
        a{
            color: $more-content-color;
            font-size: 1.2em;
        }
        svg{
            fill: $more-content-color;
            margin-top: 5px;
            margin-right: 5px;
        }

    }

    .digital-description-moreContent{
        div{
            margin-top: 15px;
        }

        h3{
            color: #62666d;
            font-size: 1.4em;
            font-weight: 300;
        }

        p{
            color:#a1a3a8;
            font-size: 0.8em; 
        }
    }

    // .main-container{
    //     margin: 0px 0px;
    //     padding: 0px 0px;
    // }

    @media only screen and (max-width: 992px){
        .electronic-devices-wrapper {
            margin-top: 0px;
            padding: 0px 0px;
        }

        .electronic-devices-banners-section{
            grid-template-columns:none;      
        }

        .main-container{
            padding: 0px 20px;
        }

        .digital-description-section{
            h1{
                color: #62666d;
                font-size: 1.2em;
                font-weight: 300;
            }
            
            h2{
                color: #62666d;
                font-size: 1.5em;
                font-weight: 300;
            }

            p{
                color:#a1a3a8;
                font-size: 0.8em;
            }
        }
        
        .digital-description-moreContent{

            h3{
                color: #62666d;
                font-size: 1.2em;
                font-weight: 300;
            }

            p{
                color:#a1a3a8;
                font-size: 0.8em; 
            }
        }
        
    }

    @media only screen and (max-width: 992px){
        .product-category{
            flex-direction: column;

            .product-category-item{
                margin-bottom: 20px;
            }
        }
    }
</style>