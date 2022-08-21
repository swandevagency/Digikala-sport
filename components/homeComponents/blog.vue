<template>
    <div>
        <div class="blog-section">
                <div class="blog-header">
                    <h6>خواندنی ها</h6>
                    <a>مطالب بیشتر در دیجی‌کالا مگ</a>
                </div>
                <div class="blog-items">
                <div class="blog-items-content">
                    <img src="../../static/blog/1.jpg"/>
                    <p>تصاویر احتمالی گلکسی بادز ۲ پرو به بیرون درز کرد</p> 
                </div>

                <div class="blog-items-content">
                    <img src="../../static/blog/2.jpg"/>
                    <p>قابلیت Expert RAW سامسونگ دو ویژگی جدید و جذاب دریافت می‌کند</p> 
                </div>

                <div class="blog-items-content">
                    <img src="../../static/blog/3.jpg"/>
                    <p>۱۰ لپ تاپ محبوب در دیجی‌ کالا (۱۹ تیر ۱۴۰۱)</p> 
                </div>

                <div class="blog-items-content">
                    <img src="../../static/blog/4.jpg"/>
                    <p>نقد و بررسی کلاسیک گوشی ردمی نوت ۱۱ پرو پلاس</p> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/scss/color.scss";
    .blog-section{
        display: flex;
        flex-direction: column;
        padding: 16px 0px;
        margin-top: 30px;
    }

    .blog-header{
        flex-basis: 10%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 15px;

        h6{
            font-size: 1.2em;
            cursor: default;
        }

        a{
            font-size: 1.1em;
            color: $more-content-color;
            cursor: pointer;
        }
    }

    .blog-items{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }

    .blog-items-content{
        display: flex;
        flex-direction: column;
        flex-basis: 24%;
        border-radius: 16px;
        border: 1px solid #e0e0e2;
        cursor: pointer;
        img{
            width: 100%;
            border-radius: 16px 16px 0px 0px;
            margin-top: -1px;
            object-fit:cover;
        }

        p{
            padding: 15px;
            font-size: 0.8em;
            color: #0c0c0c;
            font-weight: 100;
        }

    }

    .blog-items-content:hover{
        box-shadow: 3px 4px 5px 0px #00000050;
    }

    @media only screen and (max-width: 992px){
        
        .blog-header{
            h6{
                font-size: 0.9em;
                font-weight: 300;
            }

            a{
                font-size: 0.9em;
            }
        }

        .blog-items{
            flex-flow: column;
        }

        .blog-items-content{
            margin-bottom: 15px;

            p{
                font-size: 0.7em;
            }
        }

    }
</style>