<template>
  <!-- 主体内容 -->
  <!-- 首页界面 -->
  <div class="content">
      <!-- 搜索框 -->
      <!-- <div class="search">
        <input type="text" placeholder="您想去哪儿" />
        <div class="btn">搜索</div>
      </div> -->

      <!-- banner-轮播图 -->
      <!-- <div class="banner">
        <van-swipe  :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="val in banner" :key="val.id"><img :src="val.img" alt=""/></van-swipe-item>
        </van-swipe>
      </div> -->
      <div class="banner">
        <van-swipe  :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="val in banner" :key="val.id"><img :src="val.img" alt=""/></van-swipe-item>
        </van-swipe>
      </div>
    
      <!-- 九宫格 -->
      <div class="nav">
        <van-grid :gutter="4">
          <van-grid-item v-for="value in nav" :key="value.id" @click="tiaonav(value)">
           <van-image :src="value.img" />
           <div class="title">{{value.title}}</div>
          </van-grid-item>
        </van-grid>
      </div>

      <!--今提推荐 -->
      <div class="jinri">
        <div class="jin-tit">今日推荐</div>
        <div v-for="val in jin" :key="val.id" @click="syxqtiao">
          <div class="jin-img">
              <img :src="val.img" alt="">
              <div class="tuijian">
                推荐
              </div>
              <div class="price">
                <div>&yen;3980元起</div>
                <div>丽江 集合 | 6天</div>
              </div>
          </div>
          <div class="jin-footer">
              <p>{{val.jin_foot}}</p>
              <p>{{val.jinfooter}}</p>
          </div>
        </div>
      </div>

       <!--国内游 -->
      <div class="jinri">
        <div class="jin-tit">国内游</div>
         <div v-for="val in guonei" :key="val.id" @click="syxqtiao">
          <div class="jin-img">
              <img :src="val.img" alt="">
              <div class="tuijian">
                推荐
              </div>
              <div class="price">
                <div>&yen;3980元起</div>
                <div>丽江 集合 | 6天</div>
              </div>
          </div>
          <div class="jin-footer">
              <p>{{val.jin_foot}}</p>
              <p>{{val.jinfooter}}</p>
          </div>
        </div>
        <div class="lian" @click="tiao()">
            更多国内旅游线路>>
        </div>
      </div>

      <!-- 周边游 -->
      <div class="jinri">
        <div class="jin-tit">周边游</div>
        <div v-for="val in zhoubian" :key="val.id" @click="syxqtiao">
          <div class="jin-img">
            <img :src="val.img" alt="">
            <div class="tuijian">
                推荐
              </div>
              <div class="price">
                <div>&yen;3980元起</div>
                <div>丽江 集合 | 6天</div>
              </div>
          </div>
          <div class="jin-footer">
             <p>{{val.jin_foot}}</p>
             <p>{{val.jinfooter}}</p>
          </div>
        </div>
        
        <div class="lian" @click="tiaochu()">
            更多出境游线路>>
        </div>
      </div>

      <!-- 出境游 -->
      <div class="jinri">
        <div class="jin-tit">出境游</div>
        <div v-for="val in chujin" :key="val.id" @click="syxqtiao">
          <div class="jin-img">
            <img :src="val.img" alt="">
            <div class="tuijian">
                推荐
              </div>
              <div class="price">
                <div>&yen;3980元起</div>
                <div>丽江 集合 | 6天</div>
              </div>
          </div>
          <div class="jin-footer">
              <p>{{val.jin_foot}}</p>
              <p>{{val.jinfooter}}</p>
          </div>
        </div>
        <div class="lian" @click="tiaozhou()">
            更多周边游线路>>
        </div>
      </div>

  </div>
</template>

<script>
export default {
    data(){
      return{
        banner:[],
        nav:[],
        jin:[],
        guonei:[],
        chujin:[],
        zhoubian:[]
      }
    },
    mounted(){
        fetch("/static/banner.json").then((res)=>{
            return res.json();
        })
        .then(res=>{
            // console.log(res)
            this.banner=res.banner
        });
        fetch("/static/nav.json").then((res)=>{
            return res.json();
        })
        .then(res=>{
            // console.log(res)
            this.nav=res.nav
        });
        fetch("/static/jin.json").then((res)=>{
            return res.json();
        })
        .then(res=>{
            // console.log(res)
            this.jin=res.jin
        });
        fetch("/static/jin.json").then((res)=>{
            return res.json();
        })
        .then(res=>{
            // console.log(res.guonei)
            this.guonei=res.guonei;
        });
        fetch("/static/jin.json").then((res)=>{
            return res.json();
        })
        .then(res=>{
            // console.log(res.guonei)
            this.chujin=res.chujin;
        });
        fetch("/static/jin.json").then((res)=>{
            return res.json();
        })
        .then(res=>{
            // console.log(res.guonei)
            this.zhoubian=res.zhoubian;
        })
    },
    methods:{
      tiao(){
        this.$router.push("/main/nei")
      },
      tiaonav(value){
        // console.log(value)
        if(value.title=="国内游"){
          this.$router.push("/main/nei")
        }else if(value.title=="周边游"){
          this.$router.push("/main/zhou")
        }else if(value.title=="出境游"){
          this.$router.push("/main/chu")
        }else{
          this.$router.push("/main/ding")
        }
      },
      tiaochu(){
        this.$router.push("/main/chu")
      },
      tiaozhou(){
         this.$router.push("/main/zhou")
      },
      syxqtiao(){
          this.$router.push("/main/info")
      }
    }
    
}
</script>

<style>
/* 搜索样式 */
.search{
  width: 100%;
  box-sizing: border-box;
  padding: 8px 0;
}
.search input[type="text"]{
  width: 260px;
  border: solid 1px #C30D23;
  margin-left: 25px;
  padding: 3px 0;
  text-indent: 25px;
}
.btn{
  display: inline-block;
  width: 60px;
  height:27px;
  border: solid 1px #C30D23;
  text-align: center;
  line-height: 27px;
  position: relative;
  right: 5px;
  margin-left: -1px;
}
.banner{
  width: 100%;
  box-sizing: border-box;
  height: 250px;
}
.van-swipe-item img{
  width: 100%;
}

.title{
  margin-top: 8px;
  font-size: 13px;
}
.jinri{
  width: 100%;
  box-sizing: border-box;
}
.jin-tit{
  text-align: center;
  padding: 15px 0;
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
  border-left: solid 10px #C30D23;
}
.jin-footer p:nth-of-type(1){
  font-size: 13px;
  margin-left: 8px;
}
.jin-footer p:nth-of-type(2){
  font-size: 13px;
  color: #C30D23;
  margin-left: 8px;
}
.van-image{
  width: 70%;
}
.lian{
  text-align: center;
  font-size: 13px;
}
.tuijian{
  width: 40px;
  height: 30px;
  background: #C30D23;
  position: absolute;
  top: 21px;
  left: 20px;
  text-align: center;
  font-size: 13px;
  color: white;
  padding-top: 5px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}
.price{
  width:90px;
  height:50px;
  /* background: #C30D23; */
  position: absolute;
  font-size: 13px;
  text-align: center;
  line-height: 25px;
  top: 168px;
  left: 262px;
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