<template>
    <div>
        <div id="onScroll"></div>
        <div class="white-space"></div>
        <div class="header-section">
            <div class="upper-header-section">
                <div class="upper-header-section-right">
                    <div>
                        
                    </div>
                    <nuxtLink class="header-logo-link" to="/">
                        <img class="header-logo" src="../../static/logo.svg"/>
                    </nuxtLink>
                    <div class="searchBar">
                        <searchIcon />
                        <input class="header-searchbar-input" placeholder="جستجو"/>
                    </div>
                </div>
                <div class="upper-header-section-left">
                    <div class="header-user-section">
                        <NuxtLink to="/" class="header-signup-section">
                            <p>مشاهده صفحه اصلی</p>
                        </NuxtLink>
                        <div class="header-cart">
                            <NuxtLink to="/cart">
                                <CartIcon />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div @scroll="handleScroll" class="bottom-header-section">
                <nav class="navbar">
                    <div class="sub-header-navbar">
                        <div class="sub-header-main-nav" @mouseenter="dropDownOn()" @mouseleave="dropDownOff()">
                            <HumberMenu />
                            <button>دسته‌بندی کالاها</button>
                            <span class="sub-header-border-bottom"></span>
                            <div @mousemove="dropDownOn()">
                                <Classification />
                            </div>
                        </div>

                        <div class="sub-header-minor-nav">
                            <div class="sub-minor-nav" @click="scrollToMonth">
                                <HotSales />
                                <a id="monthBest">برترین کالاهای این ماه</a>
                                <span class="sub-header-border-bottom"></span>
                            </div>
                            <div class="sub-minor-nav" @click="scrollToDiscount">
                                <Discount />
                                <a>تخفیف‌ها و پیشنهادها</a>
                                <span class="sub-header-border-bottom"></span>
                            </div>
                            <div class="sub-minor-nav" @click="scrollToBlog">
                                <HotSales />
                                <a>خواندنی‌ها</a>
                                <span class="sub-header-border-bottom"></span>
                            </div>
                        </div> 
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'headerPage',
        props: ['title'],
        components: {
            SearchIcon: () => import ('../icons/searchIcon'),
            SignInIcon: () => import ('../icons/signin'),
            CartIcon: () => import ('../icons/cartIcon'),
            HumberMenu: () => import ('../icons/hambermenu'),
            FruitBasket: () => import ('../icons/fruitbasket'),
            HotSales: () => import ('../icons/hot'),
            Discount: () => import ('../icons/discount'),
            Awesome: () => import ('../icons/awesome'),
            Location: () => import ('../icons/location.vue'),
            Classification: () => import ('../../components/containers/classification.vue'),
        },

        methods: {
            scrollToMonth(){
                document.querySelector('#best-in-month').scrollIntoView(false,{
                    behavior: 'smooth',
                });
            },
            scrollToDiscount(){
                document.querySelector('#discount').scrollIntoView(false,{
                    behavior: 'smooth',
                });
            },
            scrollToBlog(){
                document.querySelector('#blog').scrollIntoView(false,{
                    behavior: 'smooth',
                });
            },
            handleScroll() {
                if(gsap.to('.bottom-header-section', {scrollTrigger:'.bottom-header-section' , y : 1000})){
                    console.log('scrolled')
                    gsap.to('.bottom-header-section', {y: -1000, ease: 'none'})
                }
            },

            dropDownOn() {
                const classification = document.querySelector('.classification-section-wrapper')
                classification.style.display = 'initial';
            },

            dropDownOff() {
                const classification = document.querySelector('.classification-section-wrapper')
                classification.style.display = 'none';
            },     
            scrollFunction() {
                if (document.body.scrollTop > 500) {
                    document.querySelector(".bottom-header-section").style.display = "none";
                }
            },
        },
        mounted(){
            this.scrollFunction();
        }
        
    }
</script>

<style lang="scss">
@import "@/assets/scss/color.scss";

    .white-space{
        height: 70px;
        position: relative;
    }

    .header-section {
        width: 100%;
        display: flex;
        flex-flow: column;
        background-color: #fff;
        position: fixed;
        top: 0px;
        z-index: 10000000000000000;
        display: block;
        box-shadow: 1px 1px 2px 0px #0000003d;
    }

    .header-banner{
        width: 100%;
        img{
            height: 60px;
            width: 100%;
            object-fit: cover;
        }
    }

    .upper-header-section {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        padding: 12px 16px;
        margin-top: -4px;

    }

    .upper-header-section-right {
        width: 86%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

    }

    .header-user-section {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
    }

    .header-logo-link{
        display: flex;
        align-items: center;
    }

    .header-logo{
        width: 115px;
        height: 30px;
    }

    .searchBar{
        width: 600px;
        border-radius: 8px;
        background-color: #f0f0f1;
        display: flex;
        flex-flow: row nowrap;
        padding: 5px;
        height: 44px;
        margin-right: 20px;
    }

    .header-searchbar-input::placeholder{
        color: #81858b;
        font-family: "Iran Yekan";
        font-weight: 400;
        font-size: 1em;
    }


    .search-icon-input{
        width: 8%;
        padding: 5px 0px;
        svg{
            width: 20px;
            height: 20px;
            margin-right: 13px;
            margin-top: 2px;
        }
    }

    .header-searchbar-input{
        width: 92%;
        background-color: #f0f0f1;
        border: none;
        outline: none;
    }

    .header-signup-section{
        padding: 8px 16px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        border: 1px solid #e0e0e2;
        border-radius:8px;
        a,p{
            margin-right: 10px;
            color: #000;
            font-size: 1em;
        }
    }.header-signup-section:hover{
        box-shadow: inset 1px 1px 2px #00000030;
    }

    .header-cart{
        margin-right: 15px;
        padding-right: 20px;
        border-right: 1px solid #e0e0e2
    }


    .bottom-header-section {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 8px 16px 0px;
        position: relative;
    }

    .navbar{
        width: auto;
    }

    .sub-header-navbar{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        
        svg{
            fill: #424750;
        }
    }

    .sub-header-icon{
        align-items: center;
    }

    .sub-header-icon:hover{
        svg{
            fill: #5c9b40;
        }
    }

    .sub-header-main-nav{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        padding: 0px 0px 7px;
        button{
            font-size:0.9em;
            margin-right: 5px;        
            background: none;
            border: none;
        }


    }

    .sub-header-minor-nav{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        border-right: 1px solid #cecece;
        padding: 0px 20px;
        margin: 0px 20px;
        color:#62666d;
        fill: #62666d;
        user-select: none;
        a{
            margin-left: 25px;    
            margin-right: 5px;    
        }

        & a:active{
            transform: scale(0.9);
        }
    }

    .sub-minor-nav{
        display: flex;
        flex-flow: row nowrap;
        padding: 0px 0px 7px;
        position: relative;
        cursor: pointer;
        
    }
    
    .sub-header-border-bottom{
        height: 3px;
        width: 0%;
        background-color: $first-color;
        position: absolute;
        bottom: -1px;
        z-index: 10000000000;
    }

    .sub-minor-nav:hover{
        span{
            width: 100%;
            animation-name: example;
            animation-duration: 0.5s;
        }
    }
    @keyframes example {
        0% {opacity: 0%;}
        100% {opacity: 100%;}
    }

    .header-location-section{
        display: flex;
        flex-flow: row nowrap;
    }

    .header-location-section:hover{
        svg{
            fill: #ef4056;
        }
    }

    .sub-header-icon{
        margin-left: 5px;
    }




    @media only screen and (max-width: 1200px){
        .navbar {
            width: 76%;
        }

        .bottom-header-section{
            flex-flow: column;
        }

        .navbar {
            width: 90%;
            margin-bottom: 10px;
        }
        .header-signup-section {
            padding: 2px 17px;
        }
    }


    @media only screen and (max-width: 992px){
        .white-space{
            display: none;
        }
        
        .header-section{
            display: flex;
            position: relative;
        }

        .header-banner img {
            height: 35px;
        }

        .header-signup-section {
            padding: 0px 15px;
        }

        .searchBar {
            width: auto;
        }

        .search-icon-input {
            width: 27%;
        }

        .navbar{
            display: none;
        }

        .banner-container{
            display: none;
        }

    }

    @media only screen and (max-width: 768px){
        .searchBar {
            width: auto;
        }

        .search-icon-input {
            width: 20%;
        }
    }

    @media only screen and (max-width: 576px){
        .searchBar{
            width: initial;
        }

        .search-icon-input{
            display: none;
        }
    }

    @media only screen and (max-width: 360px){
    .searchBar{
        display: none !important;
    }

    .header-signup-section{
        a{
            font-size: 0.8em;
        }
    }

    .header-banner{
        display: none;
    }

    }
    

</style>