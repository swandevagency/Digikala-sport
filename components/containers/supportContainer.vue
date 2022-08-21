<template>
    <div>
        <div class="support-container-wrapper">
            <div class="support-container">
                <div class="support-container-header">
                    <h3>پشتیبانی آنلاین</h3>
                    <svg fill="#FFF" width="25" height="25" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/>
                    </svg>
                </div>
                <div class="support-container-body">
                    <p>
                        <span style="font-size: 1.3em; display: block;">سلام👋👋</span>
                        جواب سوال‌هاتون رو می‌تونید در زیر پیدا کنید.
                        در غیر اینصورت از ما بپرسید، ما همیشه به سوالاتتون جواب می‌دیم.😊
                    </p>
                    <div class="support-container-dropdown-items">
                        <p>چگونه میتوانم یک پروفایل ایجاد کنم؟</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                        </svg>
                    </div>
                    <div class="support-container-dropdown-items">
                        <p>چگونه میتوانم یک پروفایل ایجاد کنم؟</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                        </svg>
                    </div>
                    <div class="support-container-dropdown-items">
                        <p>چگونه میتوانم یک پروفایل ایجاد کنم؟</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
                        </svg>
                    </div>
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
    .support-container-wrapper{
        border-radius: 16px;
        border: 1px solid #ef4056;
        position: absolute;
        bottom: 30px;
        width: 360px;
        height: 400px;
        position: absolute;
        bottom: 55px;
        left: 10px;
        padding: 0px;
        background: #fff;
        
    }
    .support-container{
        display: flex;
        flex-direction: column;
    }

    .support-container-header{
        width: 100%;
        background-color: #ef4056;
        flex-basis: 20%;
        color: #fff;
        font-size: 1.3em;
        font-weight: 400;
        border-radius: 16px 16px 0px 0px ;
        padding: 10px 10px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
    }

    .support-container-body{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 10px;
        overflow-y: hidden;
        >p{
            font-size: 1em;
        }
    }

    .support-container-dropdown-items{
        padding: 12px;
        border: 1px solid #e0e0e2;
        border-radius: 8px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 5px;
        p{
            font-size: 1.1em;
        }
    }
</style>