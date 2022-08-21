<template>
  <div>
    <div v-if="error.statusCode === 404" class="error-container">
      <h1>
        صفحه‌ای که دنبال آن بودید پیدا نشد!
      </h1>    
      <NuxtLink to="/" class="homePage-button">
        صفحه اصلی
        <svg fill="#424750" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
        </svg>
      </NuxtLink>
      <img src="../static/page-not-found.png" />
    </div>
    <div v-else class="other-errors"><p>این چه کدیه زدی . جمع کن خودتو</p></div>  
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error',
  }
</script>
<style lang="scss">
  .error-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    h1{
      font-size: 1.1em;
      margin-bottom: 10px;
    }
    img{
      margin-top: 40px;
    }
  }

  .homePage-button{
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    color: #19bfd3;
    svg{
      fill: #19bfd3;
      margin-bottom: -3px;
      margin-right: 3px;
    }
  }

  .other-errors{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    p{
      font-size: 1.5em;
    }
  }
</style>