<template>
    <div>
        <button class="left-control-carousel">
            <svg fill="#424750" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/>
            </svg>
        </button>
    </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
    .left-control-carousel{
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      left: 1%;
      top: 45%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e0e0e2;
      outline: none;
      z-index: 2222;
    }

    @media only screen and (max-width: 992px){
        .left-control-carousel{
            display: none;
        }
    }
    @media only screen and (max-width: 768px){
        .left-control-carousel{
            display: none;
        }
    }
    @media only screen and (max-width: 576px){
        .left-control-carousel{
            display: none;
        }
    }
    @media only screen and (max-width: 360px){
        .left-control-carousel{
            display: none;
        }
    }
</style>