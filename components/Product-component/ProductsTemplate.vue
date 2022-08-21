<template>
    <div>
        <div class="whole-page-goods-wrapper">
            <div class="goods-page">
                <div class="goods-page-sidebar">
                    <div class="sidebar-header">
                        <p>فیلترها</p>
                    </div>
                    <div class="color-filter sidebar-shared-style">
                        <div @click="color = !color">    
                            <button v-if="color">
                            <p>رنگ</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                                </svg>
                            </button>
                            <button v-else>
                            <p>رنگ</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                                </svg>
                            </button>
                        </div>
                        <div  v-if="!color" class="drop-down-on">
                            <div class="sidebar-color-filter-items">
                                <div class="sidebar-color-filter">
                                    <input type="checkbox" />
                                    <p>مشکی</p>
                                </div>
                                <span class="color-filter-sample CFblack"></span>
                            </div>
                            <div class="sidebar-color-filter-items">
                                <div class="sidebar-color-filter">
                                    <input type="checkbox" />
                                    <p>قرمز</p>
                                </div>
                                <span class="color-filter-sample CFred"></span>
                            </div>
                            <div class="sidebar-color-filter-items">
                                <div class="sidebar-color-filter">
                                    <input type="checkbox" />
                                    <p>سبز</p>
                                </div>
                                <span class="color-filter-sample CFgreen"></span>
                            </div>
                        </div>


                    </div>
                    <div class="plus-services sidebar-shared-style">
                        <div @click="add = !add">    
                            <button v-if="add">
                                <p>برند</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                                </svg>
                            </button>
                            <button v-else>
                                <p>برند</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                    <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                                </svg>
                            </button>
                        </div>
                        <div  v-if="!add" class="drop-down-on">
                            <div class="sidebar-brand-filter">
                                <input type="checkbox" />
                                <h1>زد ایکس</h1>
                            </div>
                            <div class="sidebar-brand-filter">
                                <input type="checkbox" />
                                <h1>بادی اسکالپچر</h1>
                            </div>
                            <div class="sidebar-brand-filter">
                                <input type="checkbox" />
                                <h1>لیوآپ</h1>
                            </div>
                            <div class="sidebar-brand-filter">
                                <input type="checkbox" />
                                <h1>تامکس</h1>
                            </div>
                            <div class="sidebar-brand-filter">
                                <input type="checkbox" />
                                <h1>تن زیب</h1>
                            </div>
                        </div>
                    </div>
                    <div class="salesman-post existed-goods sidebar-shared-style">
                        <div>    
                            <p>فقط کالاهای موجود</p>
                            <div class="checkbox-button">
                                <span></span>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div class="goods-section-wrapper">  
                    <div class="goods-section">
                        <div class="goods-section-items" v-for="categoryProduct in categoryProducts" :key="categoryProduct.id">
                            <div class="goods-picture">
                                <img :src="`http://localhost:1337${categoryProduct.attributes.picture.data[0].attributes.url}`">
                            </div>
                            <div class="goods-description">
                                <p> {{ categoryProduct.attributes.name }} </p>
                            </div>
                            <div class="flex-row goods-existence">
                                <div class="flex-row" v-if="categoryProduct.attributes.available">
                                    <svg fill="#87d3e1" width="16" height="16" id="productAvailable" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M7 19H6a1 1 0 01-1-1V6a1 1 0 011-1h2v7h8V5h2a1 1 0 011 1v12a1 1 0 01-1 1h-1v2h1a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h1v-2zm3-9V5h4v5h-4zm-.293 7.793l1.755 1.755 3.795-4.217 1.486 1.338-4.5 5a1 1 0 01-1.45.038l-2.5-2.5 1.414-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p>موجود در انبار</p>
                                </div>
                                <div class="flex-row" v-else>
                                    <svg fill="#f00" width="16" height="16" id="productAvailable" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" d="M7 19H6a1 1 0 01-1-1V6a1 1 0 011-1h2v7h8V5h2a1 1 0 011 1v12a1 1 0 01-1 1h-1v2h1a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3h1v-2zm3-9V5h4v5h-4zm-.293 7.793l1.755 1.755 3.795-4.217 1.486 1.338-4.5 5a1 1 0 01-1.45.038l-2.5-2.5 1.414-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                    <p>ناموجود</p>
                                </div>
                                <div class="flex-row">
                                    <p>۴.۳</p>
                                    <svg fill="#f9bc00" width="16" height="16" id="starFill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M11.98 2.1a.455.455 0 00-.414.315L9.426 9.05l-6.97-.014a.455.455 0 00-.268.823l5.648 4.087-2.169 6.628a.455.455 0 00.7.509L12 16.973l5.634 4.11a.455.455 0 00.7-.509l-2.169-6.628 5.648-4.087a.455.455 0 00-.267-.823l-6.97.014-2.144-6.635a.455.455 0 00-.451-.315z"></path>
                                    </svg>
                                </div>
                            </div>    
                            <div class="goods-price">
                                <p> {{ categoryProduct.attributes.price }} </p>
                                <svg style="width: 16px; height: 16px; fill: var(--color-icon-high-emphasis);">
                                    <path fill-rule="evenodd" d="M3.057 1.742L3.821 1l.78.75-.776.741-.768-.749zm3.23 2.48c0 .622-.16 1.111-.478 1.467-.201.221-.462.39-.783.505a3.251 3.251 0 01-1.083.163h-.555c-.421 0-.801-.074-1.139-.223a2.045 2.045 0 01-.9-.738A2.238 2.238 0 011 4.148c0-.059.001-.117.004-.176.03-.55.204-1.158.525-1.827l1.095.484c-.257.532-.397 1-.419 1.403-.002.04-.004.08-.004.12 0 .252.055.458.166.618a.887.887 0 00.5.354c.085.028.178.048.278.06.079.01.16.014.243.014h.555c.458 0 .769-.081.933-.244.14-.139.21-.383.21-.731V2.02h1.2v2.202zm5.433 3.184l-.72-.7.709-.706.735.707-.724.7zm-2.856.308c.542 0 .973.19 1.293.569.297.346.445.777.445 1.293v.364h.18v-.004h.41c.221 0 .377-.028.467-.084.093-.055.14-.14.14-.258v-.069c.004-.243.017-1.044 0-1.115L13 8.05v1.574a1.4 1.4 0 01-.287.863c-.306.405-.804.607-1.495.607h-.627c-.061.733-.434 1.257-1.117 1.573-.267.122-.58.21-.937.265a5.845 5.845 0 01-.914.067v-1.159c.612 0 1.072-.082 1.38-.247.25-.132.376-.298.376-.499h-.515c-.436 0-.807-.113-1.113-.339-.367-.273-.55-.667-.55-1.18 0-.488.122-.901.367-1.24.296-.415.728-.622 1.296-.622zm.533 2.226v-.364c0-.217-.048-.389-.143-.516a.464.464 0 00-.39-.187.478.478 0 00-.396.187.705.705 0 00-.136.449.65.65 0 00.003.067c.008.125.066.22.177.283.093.054.21.08.352.08h.533zM9.5 6.707l.72.7.724-.7L10.209 6l-.709.707zm-6.694 4.888h.03c.433-.01.745-.106.937-.29.024.012.065.035.12.068l.074.039.081.042c.135.073.261.133.379.18.345.146.67.22.977.22a1.216 1.216 0 00.87-.34c.3-.285.449-.714.449-1.286a2.19 2.19 0 00-.335-1.145c-.299-.457-.732-.685-1.3-.685-.502 0-.916.192-1.242.575-.113.132-.21.284-.294.456-.032.062-.06.125-.084.191a.504.504 0 00-.03.078 1.67 1.67 0 00-.022.06c-.103.309-.171.485-.205.53-.072.09-.214.14-.427.147-.123-.005-.209-.03-.256-.076-.057-.054-.085-.153-.085-.297V7l-1.201-.5v3.562c0 .261.048.496.143.703.071.158.168.296.29.413.123.118.266.211.43.28.198.084.42.13.665.136v.001h.036zm2.752-1.014a.778.778 0 00.044-.353.868.868 0 00-.165-.47c-.1-.134-.217-.201-.35-.201-.18 0-.33.103-.447.31-.042.071-.08.158-.114.262a2.434 2.434 0 00-.04.12l-.015.053-.015.046c.142.118.323.216.544.293.18.062.325.092.433.092.044 0 .086-.05.125-.152z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { stringify } from 'querystring'

    export default {
        data(){
            return{
                add: true,
                color: true
                
            } 
        },
        computed: {
            categoryProducts() {
                return this.$store.state.service.categoryProducts;
            }
        },

        methods: {
            
        },
    }
</script>

<style lang="scss"> 
@import "@/assets/scss/color.scss";

    .drop-down-on{
        display: flex;
        flex-direction: column;
        
    }
    .whole-page-goods-wrapper{
        padding: 24px;
        width: 100%;
    }

    .goods-page{
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .goods-page-sidebar{
        border-radius: 8px;
        border: 1px solid #e0e0e2;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-basis: 20%;
        padding: 0px 20px;
        box-shadow: -1px -1px 2px 0px #00000030, 1px 1px 2px 0px #00000030;
        svg{
            fill: #a1a3a8;
            cursor: pointer;
        }
        div{
            width: 100%;
        }
        >div:last-child{
            border: none;
        }

        svg:hover{
            fill: #ef4056;    
        }
        button{
            background: none;
            outline: none;
            border: none;
        }
    }

    .sidebar-header{
        padding: 16px 0px;
        p{
            font-size: 1.2em;
        }
    }

    .sidebar-color-filter-items{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        padding: 0px 15px 10px;
        padding-right: 0px;
        border-bottom: 1px solid $border-color;
    }.sidebar-color-filter-items:last-child{
        border: none;
    }

    .sidebar-color-filter{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        p{
            margin-right: 5px;
        }
        input{
            width: 20px;
            height: 18px;
            border: 1px solid #00000030;
        }
    }

    .color-filter-sample{
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    .CFblack{
        background-color: #000;
    }
    .CFred{
        background-color: #f00;
    }
    .CFgreen{
        background-color: rgb(51, 255, 0);
    }

    
    .sidebar-brand-filter{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        h1{
            margin-right: 8px;
        }
        input{
            width: 20px;
            height: 18px;
            border: 1px solid #00000030;
        }
    }

    .sidebar-shared-style{
        border-bottom: 1px solid $border-color;
        padding: 12px 10px;
        border-radius: 6px;
        margin-top: 35px;
        p{
            font-size: 1em;
            letter-spacing: 0.1px;
        }

        &:hover{
            box-shadow: 0px 0px 3px #00000040;
        }

        button{
            width: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
    }

    .plus-services{
        p:first-child{
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            svg{
                margin-right: 5px;
            }
        }
    }

    .existed-goods{
        div{
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
        }

        &:hover{
            box-shadow: none;
        }
    }

    .salesman-post{
        &>span{
            font-size: 0.9em;
            color: #81858b;
        }
        .checkbox-button{
            width: 40px;
            height: 20px;
            border-radius: 15px;
            border: 2px solid #a1a3a8;
            display: flex;
            flex-flow: row;
            align-items: center;
            position: relative;
            
            span{
                position: absolute;
                left: 3px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #a1a3a8;
            }
        }
        .checkbox-button:active{
            border-color: #19bfd3;
            background-color: #19bfd3 ;
            
            span{
                right: 3px;
                background-color: #fff;
            }
        }
    }

    .price-filter{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .price-number-input{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        input{
            width: 90%;
            outline: none;
            border: none;
            border-bottom: 1px solid #e0e0e2;
            margin-top: 10px;
            font-size: 1.7em;
            display: flex;
            justify-content: flex-start;
            color: #424750;
            font-weight: 900;
            direction: ltr;
        }
        & input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }

    .price-range-input{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        input::-moz-range-thumb{
            background: #19bfd3;
        }
        &>div{
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            p{
                font-size: 0.9em;
            }
        }
    }

    .existed-goods-in-warehouse{
        p{
            padding-left: 50px;
        }
    }



    .goods-section-wrapper{
        flex-basis: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-right: 20px;
    }

    .goods-sorting-wrapper{
        border-bottom: 1px solid $border-color;
        padding: 10px 0px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        >p{
            color: #81858b;
        }
    }

    .goods-sorting-section{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        p{
            font-size: 0.8em;
            color: #424750;
            margin-right: 10px;
            cursor: default;
        }
        a{
            font-size: 0.8em;
            color: #81858b;
            margin-right: 10px;
        }

        a:hover{
            color: #ef4056;
            cursor: pointer;
        }
        
    }

    .goods-section{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        background-color: $border-color;
        column-gap: 1px;
        row-gap: 1px;
    }

    .goods-section-items{
        flex-basis: calc(25% - 0.75px);
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        padding: 12px 8px;

        & >div{
            width: 100%;
        }

        &:hover{
            filter: drop-shadow(0 1px 5px rgba(0,0,0,.2));
        }
    }

    .flex-row{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }

    .goods-description{
        p{
            letter-spacing: 0.4px;
            font-weight: 700;
        }
        margin-top: 40px;
    }

    .goods-picture{
        padding: 30px 15px 5px;
        img{
            width: 100%;
        }
    }

    .goods-existence{
        svg{
            margin-left: 5px;
        }
        & div:first-child{
            p{
                color: #62666d;
            }
        }    
    }

    .goods-price{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: flex-end;
        margin-top: 10px;
        p{
            font-size: 1.1em;
            font-weight: 700;
        }
    }




    @media only screen and (max-width: 1200px){
        .goods-section-items{
            flex-basis: 24.9%;
        }
    }

    @media only screen and (max-width: 992px){
        .goods-section-items{
            flex-basis: 33.2%;
        }
    }

    @media only screen and (max-width: 768px){
        .goods-section-items{
            flex-basis: 49.8%;
        }
    }

    @media only screen and (max-width: 576px){
        .goods-section-items{
            flex-basis: 99.9%;
        }
    }

</style>