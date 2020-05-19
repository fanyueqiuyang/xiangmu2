<template>
    <div>
      <button class="btn">86</button>
      <input type="text" placeholder="输入用于登录的手机号码" class="one">
      <input type="text" placeholder="图片识别码">
      <input type="text" placeholder="输入短信验证码">
      <div class="wang">忘记密码</div>
      <button class="btn">发送验证码</button>
      <input type="button" value="登录"><br>
      <span>没有路客旅行账号?</span>
      <span>立即注册</span>
      <span class="span" @click="spandian">返回首页</span>
    </div>
</template>

<script>
export default {
    methods:{
        spandian(){
            this.$router.push("/main/shou")
        }
    }
}
</script>

<style>
.one{
    width: 210px;
    height: 20px;
    margin-left: 5px;
    margin-top: 20px;
    border: solid 1px gray;
    font-size: 13px;
    text-indent: 10px;
}
.btn{
    font-size: 12px;
}
input{
    width: 250px;
    height: 20px;
    margin-left: 5px;
    margin-top: 10px;
    border: solid 1px gray;
    font-size: 13px;
    text-indent: 10px;
}
.wang{
    font-size: 12px;
    margin-left: 200px;
    margin-top: 5px;
}
input[type="button"]{
    border-bottom: solid 1px #C30D23;
    background: #C30D23;
    color: white;
}
span{
    font-size: 12px;
}
span:nth-of-type(2){
    color: #C30D23;
}
span:nth-of-type(3){
    margin-left: 45px;
    color: #C30D23;
}
</style>