<template>
    <div>
        <div class="shipment-choosing">
            <div class="receiving-section">
                <h5>نحوه ارسال محصول</h5>
                <form class="shipment-options">
                    <label class="container">
                        <input @click="address =! address" type="radio" checked="checked" name="radio">
                        دریافت حضوری
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">
                        <input @click="address = !address" type="radio" name="radio">
                        پرداخت درب محل
                        <span class="checkmark"></span>
                    </label>
                </form>
                <div class="address-section"  v-if="!address">
                    <label class="container">
                        <input type="radio" name="address">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">
                        <input type="radio" name="address">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">
                        <input type="radio" name="address">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            address: true
        }
    },
    props: [ '!address' ]
}
</script>

<style lang="scss">
    .shipment-choosing{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .receiving-section{
        width: 100%;
        border: 1px solid #e0e0e2;
        border-radius: 8px;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .shipment-options{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;    
        label{
            font-size: 1.3em;
            font-weight: bolder;
            color: #474849;
            margin-right: 15px;
            margin-top: 10px;
        }
    }
    /* The container */
    .container {
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default radio button */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

    /* Create a custom radio button */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
        border-radius: 50%;
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: #2196F3;
    }

    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
    content: "";
        position: absolute;
        display: none;
    }

    /* Show the indicator (dot/circle) when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
        top: 9px;
        left: 9px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
    }
    .address-section{
        margin-top: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 1px solid #e0e0e2;
        border-radius: 8px;
        padding: 25px 15px;
        box-shadow: inset 0px 0px 4px #00000060;
    }
</style>