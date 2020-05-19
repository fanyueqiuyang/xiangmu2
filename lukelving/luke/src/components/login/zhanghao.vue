<template>
  <div class="zhanghao">
      <input type="text" placeholder="手机号/邮箱/用户名" v-model="admin"/><br>
      <input type="password" placeholder="密码" v-model="password"/><br>
      <div class="wang">忘记密码</div>
      <input type="button" value="登录" @click="login"><br>
      <span class="span">没有路客旅行账号?</span>
      <span class="span" @click="zhucetiao">立即注册</span>
      <span class="span" @click="spandian">返回首页</span>
  </div>
</template>

<script>
export default {
    data(){
        return {
            admin:"",
            password:""
        }
    },
    methods:{
        spandian(){
            this.$router.push("/main/shou")
        },
        login(){
            // this.$http.post("/admin/login",{
            //     admin:this.admin,
            //     password:this.password
            // }).then(res=>{
            //     // console.log(res.data)
            //     if(res.data.error_code==400){
            //         alert("账户跟密码有误，请重新登录");
            //         this.admin="";
            //         this.password="";
            //     }else if(res.data.error_code==200){
            //          alert(res.data.msg)
            //          localStorage.setItem("xxshop",res.data.token)
            //          this.$router.push("/main/gou")
            //     }else{
            //         alert("服务器错了")
            //     }
            // })
            this.$router.push("/main/shou")
        },
        zhucetiao(){
            this.$router.push("/zhuce")
        }
    }
}
</script>

<style>
.zhanghao input[type="text"],input[type="password"]{
    width: 250px;
    height: 25px;
    margin-left: 5px;
    margin-top: 20px;
    border: solid 1px gray;
    font-size: 13px;
    text-indent: 20px;
}
.zpass{
    width: 250px;
    height: 25px;
    margin-left: 5px;
    margin-top: 20px;
    border: solid 1px gray;
    font-size: 13px;
    text-indent: 20px;
}
.wang{
    font-size: 12px;
    margin-left: 200px;
    margin-top: 10px;
}
.zhanghao input[type="button"]{
    border-bottom: solid 1px #C30D23;
    background: #C30D23;
    color: white;
    width: 250px;
    height: 25px;
    margin-left: 5px;
    margin-top: 20px;
    font-size: 13px;
}
.span{
    font-size: 12px;
}
.span:nth-of-type(2){
    color: #C30D23;
}
.span:nth-of-type(3){
    margin-left: 45px;
    color: #C30D23;
}
</style>