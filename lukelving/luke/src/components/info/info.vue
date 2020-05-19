<template>
    <div class="info">
        <!-- 景点详情页 -->

        <!-- 顶部展示图 -->
        <div class="info-header">
            <img src="https://i01piccdn.sogoucdn.com/b49fd6b68daced1a" alt=""/>
            <p>[花花岛]快速出票/库存华东No.1/品质出游：华东网红、精致、小众、舒适海岛</p>
        </div>

        <!-- title标 -->
        <div class="info-tit">
            <p>[花花鸟]2019全年计划，中国的圣托里尼，鸟屿花香、离线天堂(一花一世界，一鸟一天堂)</p>
            <p>[花花岛]快速出票/库存华东No.1/品质出游：华东网红、精致、小众、舒适海岛</p>
            <div class="info-span">
                <span>产品编号：ZB1800578</span>
                <span>23781</span>
            </div>
        </div>

        <!-- 注意事项 出团通知 报名咨询 报名须知-->
        <div class="four">
            <div>
                <van-button type="primary" @click="showPopup" class="tanchu">
                    注意事项
                </van-button>
                <van-popup v-model="show" class="tannei">
                    当您在游玩前一定要备上晕车药、感
                    冒药、创可贴等，避免在旅途发生突
                    发事件，所有药物保持干燥并注明药
                    名及用法。出行前高度关注当地天气
                    预报，获取当地安全提示信息，不前
                    往气候条件不利、治安不好的国家旅
                    游。旅途中饮食应清淡，多吃蔬菜水
                    果，防止便秘。应尽量在住地餐厅就
                    餐，自备餐具和水杯，既方便又卫生
                </van-popup>
            </div>
            <div>
                <van-button type="primary" @click="showPopup" class="tanchu">
                    出团通知
                </van-button>
                <van-popup v-model="show" class="tannei">
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                </van-popup>
            </div>
            <div>
                <van-button type="primary" @click="showPopup" class="tanchu">
                    报名咨询
                </van-button>
                <van-popup v-model="show" class="tannei">
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                </van-popup>
            </div>
            <div>
                <van-button type="primary" @click="showPopup" class="tanchu">
                    报名须知
                </van-button>
                <van-popup v-model="show" class="tannei">
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                    内容内容内容内容内容内容内容内容
                </van-popup>
            </div>
        </div>
        <!-- 花花岛专属直达船 -->
        <div class="info-con">
            <p>*花花岛专属直达船船班信息*</p>
            <p>航程：2小时</p>
            <p>航班：10：40</p>
            <p>
                直达船开航时代：清明假期、五一假期，5月周五，6-9月，国庆假期，其余时段，
                一般安排从转进化花岛
            </p>
            <p>
                *集合信息*(半小时集合时间，请勿迟到)(每期的船班时间，以收到的出团信息为准)
            </p>
            <p>
                自由行·沈家湾码头取票：沈家湾码头10:40，准点开船（请至少提前1小时抵达码头，
                取票候船，码头专属咨询台快速出票，免排队）；码头停车费48元/天（以实际为准）
            </p>
            <p>
                大巴跟团·杭州出发：6：00-6：30，杭州黄龙海鲜大排档（黄龙体育中心外环，近西
                溪路玉古路交叉口）</p><p>大巴跟团·上海出发：7：30-8：00，明申中心大厦（上海市凯旋路3131号）
            </p>
            <p>
                这是华东限流特别厉害的海岛，一周只有3班船，每次只接待200人，名额十分紧张，请至少提前1个月报
                名。请您在报名审核通过后，尽快完成活动缴费，24小时之内未完成缴费，您有可能会被取消订单。活动
                报名成功以缴费为准。
            </p>
            <p>
                直达船开航时代：清明假期、五一假期，5月周五，6-9月，国庆假期，其余时段，
                一般安排从转进化花岛
            </p>
            <p>
                *集合信息*(半小时集合时间，请勿迟到)(每期的船班时间，以收到的出团信息为准)
            </p>
            <p>
                自由行·沈家湾码头取票：沈家湾码头10:40，准点开船（请至少提前1小时抵达码头，
                取票候船，码头专属咨询台快速出票，免排队）；码头停车费48元/天（以实际为准）
            </p>
            <p>
                大巴跟团·杭州出发：6：00-6：30，杭州黄龙海鲜大排档（黄龙体育中心外环，近西
                溪路玉古路交叉口）</p><p>大巴跟团·上海出发：7：30-8：00，明申中心大厦（上海市凯旋路3131号）
            </p>
            <p>
                这是华东限流特别厉害的海岛，一周只有3班船，每次只接待200人，名额十分紧张，请至少提前1个月报
                名。请您在报名审核通过后，尽快完成活动缴费，24小时之内未完成缴费，您有可能会被取消订单。活动
                报名成功以缴费为准。
            </p>
        </div>
        <!-- 线路图片 -->
        <div class="xianlu">
            <div class="xianlu" v-for="val in infotu" :key="val.id">
                <img :src="val.img" alt=""/>
            </div>
        </div>
        <div class="inzui">
            <div class="spanin">
                <span>&yen;1490</span><span>元起</span>
            </div>
            <button @click="gou">我要报名</button>
        </div>
        
    </div>
</template>

<script>
 
export default {
    data(){
        return {
            show: false,
            infotu:[]
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },
        gou(){
            this.$router.push("/main/gou")
            // console.log(localStorage.getItem("xxshop"))
            // if(localStorage.getItem("xxshop")){
            //     this.$router.push("/main/gou")
            // }else{
            //     this.$router.push("/login")
            // }
           
        }

    },
    mounted(){
        fetch("/static/infotu.json").then((res)=>{
            return res.json();
        })
        .then(res=>{
            // console.log(res)
            this.infotu=res.infotu;
            console.log(this.infotu)
        })
    }
}
</script>

<style>
.tanchu{
    color: black
}
.tannei{
    width: 300px;
    height: 200px;
    /* text-align: center; */
    line-height: 25px;
    padding-top: 20px;
}
.info{
    box-sizing: border-box;
}
.info-header{
    box-sizing: border-box;
    width: 100%;
    height: 265x;
    position: relative;
}
.info-header img{
    width: 100%;
}
.info-header p{
    font-size: 12px;
    position: absolute;
    top: 155px;
    left: 15px;
    color: white;
    width: 300px;
}
.info-tit{
    padding: 0px 3%;
    box-sizing: border-box;
}
.info-tit p:nth-of-type(1){
    font-size: 13px;
}
.info-tit p:nth-of-type(2){
    font-size: 12px;
    color: gray;
}
.info-span span:nth-of-type(1){
    font-size: 12px;
    color:  crimson;
}
.info-span span:nth-of-type(2){
    font-size: 12px;
    display: inline-block;
    margin-left: 186px;
}
.four{
    background: #F6F6F6;
    width: 100%;
    display:flex;
    justify-content: space-between;
    font-size: 13px;
}
.xianlu{
    width: 100%;
    box-sizing: border-box;
}
.xianlu img{
    width: 100%;
}
.info-con{
    width: 100%;
    box-sizing: border-box;
    padding:0px 3%;
    font-size: 13px;
    color: gray;
}
.inzui{
    width: 100%;
    justify-content: space-around;
    display: flex;
    font-size: 13px;
}
.spanin span:nth-of-type(1){
    color: crimson;
    font-weight: bold;
}
</style>