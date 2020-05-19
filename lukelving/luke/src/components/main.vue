<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <!-- <div>
                <img src="./img/shou/tou1.jpg" alt=""/>
            </div> -->
            <div>
                <!-- 三 -->
                <van-button type="primary" @click="showPopup"><img src="./img/shou/tou1.jpg" alt=""/></van-button>
                <van-popup v-model="show1" position="left" :style="{ height: '100%',width:'160px'}">
                    <ul class="ul">
                        <li>
                            <img src="./img/shou/1.png" alt="">
                        </li>
                        <li @click="tiao('shou')">路客首页</li>
                        <li @click="tiao('nei')">国内游</li>
                        <li @click="tiao('zhou')">周边游</li>
                        <li @click="tiao('chu')" >出境游</li>
                        <li @click="tiao('ding')">定制游</li>
                    </ul>
                </van-popup>
            </div>
            <div class="two"><img src="./img/shou/tou2.jpg" alt=""/></div>
            <div><img src="./img/shou/tou3.jpg" alt=""/></div>
            <div @click="imgdian"><img src="./img/shou/tou4.jpg" alt=""/></div>
        </div>
        <!-- 主体内容 -->
        <router-view></router-view>
        <!-- 脚部 -->
        <div class="footer">
            <span>2015-2019&copy;旅客旅行&copy;浙ICP备150261189号-1 国家 旅游局经营</span><br>
            <span>地址：浙江省杭州市下城区 绍兴路 焦家庄一弄文源电商产业园6幢-233宝 联系电话：0571-86777380(9:30-17:30) 许可证:L-ZJ-30448</span><br>
            <span>路客为旅行者提供原创实用的旅行指南旅游攻略，旅行社区和问答交流平台，并提供签证，机票，酒店预订，租车等服务。</span>
        </div>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
        show1: false
        }
    },
    methods: {
        showPopup() {
        this.show1 = true;
    },
    tiao(a){
        if(a=="shou"){
            this.$router.push("/main/shou")
        }else if(a=="nei"){
            this.$router.push("/main/nei")
        }else if(a=="zhou"){
            this.$router.push("/main/zhou")
        }else if(a=="chu"){
            this.$router.push("/main/chu")
        }else{
            this.$router.push("/main/ding")
        }
    },
    imgdian(){
        this.$router.push("/login")
    }
  }
}
</script>

<style>
.header{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 5px 12px;
    background:#C30D23;
    align-items: center;
}
.van-button__text img{
    width: 29%;
}
.two{
    width:30%;
    margin-left: 60px;
}
.two img{
    width:100%;
    height: 45px;
}
.header div:nth-of-type(3){
    width:7%;
    margin-left: 58px;
}
.header div:nth-of-type(3) img{
    width:100%;
}
.header div:nth-of-type(4){
    width:6.5%;
    margin-left: 12px;
}
.header div:nth-of-type(4) img{
    width:100%;
}
.footer{
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    background:#C30D23;
    margin-top: 15px;
    font-size: 13px;
    color: white;
}
.footer p:nth-last-of-type(2){
    display: block;
}
.footer p:nth-last-of-type(3){
    display: block;
}
.van-button--primary{
    background: transparent;
    border: none;
}
.van-popup{
    background: rgb(240, 240, 240);
}
.ul{
    list-style: none;
    margin: 60px 0px 0px 5px;
    text-align: center;
}
ul li{
    padding: 8px 0px;
    font-size: 13px;
    line-height: 25px;
}
ul li:hover{
    background: white;
    
}
</style>