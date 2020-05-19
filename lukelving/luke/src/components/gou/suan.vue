<template>
  <div class="suan">
      <span>请进行扫码支付</span>
      <!-- <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589171285303&di=9b0a04697c45a1c76401ffe3e5a85899&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2018-09-18%2F5ba064a9e2e74.jpg" alt=""> -->
      <div class="img" @click="img()">
          <img src="http://pic22.nipic.com/20120725/2034846_105110056392_2.jpg" alt="">
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        img(){
            this.$router.push("/main/shou")
        }
    }
    
}
</script>

<style>
.suan{
    width: 100%;
    height: 600px;
    box-sizing: border-box;
    background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589171285303&di=9b0a04697c45a1c76401ffe3e5a85899&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2018-09-18%2F5ba064a9e2e74.jpg);
}
.suan span{
    display: inline-block;
    margin-left: 35%;
    padding-top: 30%;
    padding-bottom: 2%;
}
.img{
    width: 150px;
    height: 150px;
    margin-left: 30%;
    margin-top: 20%;
}
.img img{
    width: 100%;
}
</style>