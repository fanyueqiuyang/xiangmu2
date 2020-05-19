<template>
  <div>
      <div class="banner">
        <van-swipe  :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="val in neibanner" :key="val.id"><img :src="val.img" alt=""/></van-swipe-item>
        </van-swipe>
      </div>
      <!-- 下拉选项 -->
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
      </van-dropdown-menu>
      
      <!-- 景点 -->
      <div class="jinri">
        <!-- <div class="jin-tit">周边游</div> -->
        <div v-for="val in nei" :key="val.id">
          <div class="jin-img">
            <img :src="val.img" alt="">
              <!-- <div class="tuijian">
                推荐
              </div> -->
              <div class="price">
                <div>&yen;3980元起</div>
                <div>丽江 集合 | 6天</div>
            </div>
          </div>
          <div class="jin-footer">
             <p>{{val.jin_foot}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            neibanner:[],
            value1: 0,
            option1: [
                { text: '全部商品', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
            ],
            nei:[]
        }
    },
    mounted(){
        fetch("/static/neibanner.json").then((res)=>{
            return res.json();
        })
        .then(res=>{
            // console.log(res)
            this.neibanner=res.neibanner
        });
        fetch("/static/nei.json").then((res)=>{
            return res.json();
        })
        .then(res=>{
            // console.log(res.guonei)
            this.nei=res.nei;
        })
    }
}
</script>

<style>
.banner{
  width: 100%;
  box-sizing: border-box;
}
.van-swipe-item img{
  width: 100%;
}
.jinri{
  width: 100%;
  box-sizing: border-box;
}
.jin-img{
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
.jin-img img{
  width: 100%;
}
.jin-footer{
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
.jin-footer p:nth-of-type(1){
  font-size: 13px;
  margin-left: 8px;
  position: absolute;
  bottom: 60px;
  left: 35px;
  font-size: 15px;
  color: #fff;
}
.price{
  width:90px;
  height:50px;
  /* background: #C30D23; */
  position: absolute;
  font-size: 13px;
  text-align: center;
  line-height: 25px;
  top: 108px;
  left: 280px;
}
.price div:nth-of-type(1){
   background: #C30D23;
   color: white;
}
.price div:nth-of-type(2){
   background:white;
   color: black;
}
</style>