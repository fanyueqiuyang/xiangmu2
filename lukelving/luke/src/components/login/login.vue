<template>
 <div class="div">
    <div class="all">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589171285303&di=9b0a04697c45a1c76401ffe3e5a85899&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2018-09-18%2F5ba064a9e2e74.jpg" alt=""/>
            <div class="user">用户登录</div>
            <keep-alive>
            <div class="zong">
                <ul class="ul">
                    <li @click="flag='zhanghao'">账号登录</li>
                    <li @click="flag='duanxin'">短信快捷登录</li>
                </ul>

                <div class="cha">
                    <component :is="flag"></component>
                </div>
            </div>
            </keep-alive>
    </div>
    <div class="footer1">
            <span>欢迎来到路客旅行网站&copy;旅客旅行&copy;为您提供最优的选择 国家 旅游局经营</span><br>
            <span>欢迎来到路客旅行网站&copy;旅客旅行&copy;希望您能登录查看最优的选择 </span><br>
            <span>欢迎来到路客旅行网站&copy;旅客旅行&copy;为你解决出游问题 国家</span><br>
            <span>欢迎来到路客旅行网站&copy;旅客旅行&copy;为您提供最热门的景点服务 </span><br>
            <span>希望您能够抽出时间给我们来电进行查询，询问 联系电话：0571-86777380(9:30-17:30) 许可证:L-ZJ-30448</span><br>
            <!-- <span>路客为旅行者提供原创实用的旅行指南旅游攻略</span> -->
    </div>
    <div class="footer">
            <span>2015-2019&copy;旅客旅行&copy;浙ICP备150261189号-1 国家 旅游局经营</span><br>
            <span>地址：浙江省杭州市下城区 绍兴路 焦家庄一弄文源电商产业园6幢-233宝 联系电话：0571-86777380(9:30-17:30) 许可证:L-ZJ-30448</span><br>
            <span>路客为旅行者提供原创实用的旅行指南旅游攻略，旅行社区和问答交流平台，并提供签证，机票，酒店预订，租车等服务。</span>
    </div>   
 </div>
</template>

<script>

import zhanghao from '@/components/login/zhanghao.vue'
import duanxin from '@/components/login/duanxin.vue'

export default {
    data(){
        return{
            flag:"zhanghao"

        }
    },
    components:{
        zhanghao,
        duanxin
    }
}
</script>

<style>
.div{
    width: 100%;
    box-sizing: border-box;
}
.all{
    width: 100%;
    height: 490px;
    box-sizing: border-box;
    
    position: relative;
    /* border: solid 1px black; */
}
.all img{
    display: block;
    width: 100%;
    height: 490px;
}
.cha{
    margin-top: 35px;
    margin-left: 35px;
    
}
.ul{
    width:320px;
    position: absolute;
    top: 0px;
    display: flex;
    text-align: center;
    /* border: solid 1px red; */
    margin-top: 8px;
}
.ul li{
   width:50%;
   text-align: center;
   border-bottom: solid 1px gray;
   margin-left: 5px;
}
.ul li:nth-of-type(1){
    margin-left: 8px !important;
}
.ul li:hover{
    border-bottom: solid 1px #C30D23;
    color: #C30D23
}
.zong{
    box-sizing: border-box;
    position:absolute;
    top:0px;
    background: white;
    width: 90%;
    height: 300px;
    top: 129px;
    /* padding: 0 8%; */
    margin-left: 20px;
    /* border: solid 1px red; */
}
.footer{
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    background:#C30D23;
    font-size: 13px;
    color: white;
}
.footer p:nth-last-of-type(2){
    display: block;
    color: white!important;
}
.footer p:nth-last-of-type(3){
    display: block;
    color: white!important;
}
.user{
    position: absolute;
    top:68px;
    left: 140px;
    font-size: 25px;
    color: #C30D23;
    font-weight: bold;
}
.footer1{
    width: 100%;
    box-sizing: border-box;
    background: #BDC0DB;
    padding: 0px 12px;
    color: white;
}
</style>