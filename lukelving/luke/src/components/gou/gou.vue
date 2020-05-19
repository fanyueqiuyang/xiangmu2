<template>
  <div class="gou">
      <!-- 购物车 -->
      <!-- 套餐 -->
      <p>批次套餐</p>
      <p @click="a(az)">3日游一价全含(直达船)花之语民宿(自由行)</p>
      <p @click="a(bz)">3日游一价全含(直达船)海景酒店(自由行)</p>
      <p @click="a(cz)">3日游一价全含(直达船)杭州出发4人成行跟团游</p>
      <p @click="a(dz)">3日：船票+舒适民宿自由行(直达船)</p>
      <p @click="a(ez)">3日：船票+轻奢民宿自由行(直达船)</p>

      <!-- <div class="jiudian">
          <span @click="flag='jiu'">2019-09</span>
          <span @click="flag='shi'">2019-10</span>
      </div>
      <div>
          <component :is="flag"></component>
      </div> -->
      <div>
          <p>出游人数</p>
          <span>儿童人数</span>
          <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" class="ertong"/>
          </van-dropdown-menu>
          <span>成人人数</span>
          <van-dropdown-menu>
                <van-dropdown-item v-model="value2" :options="option2" class="ertong"/>
          </van-dropdown-menu>
      </div>
      
      <div class="zhiclass">
          {{zhi}}
      </div>

      <div class="jiesuan" @click="jiesuan()">
          结算
      </div>
  </div>
</template>

<script>
import jiu from '@/components/gou/jiu.vue'
import shi from '@/components/gou/shi.vue'
export default {
    data(){
        return{
            flag:"jiu",
            value1:"",
            value2:"",
            option1: [
                { text: '儿童---1个人', value: 1 },
                { text: '儿童---2个人', value: 2 },
                { text: '儿童---3个人', value: 3},
            ],
            option2: [
                { text: '成人---1个人', value: 1 },
                { text: '成人---2个人', value: 2 },
                { text: '成人---3个人', value: 3 },
            ],
            az:1700,
            bz:1880,
            cz:1280,
            dz:1580,
            ez:2380,
            // zhi:"",
            value1n:0,
            value2n:0,
            dianchuana:1
        }
    },
    components:{
        jiu,
        shi
    },
    methods:{
        a(a){
            this.dianchuana=a;
            console.log(this.dianchuana)
        },
        jiesuan(){
            this.$router.push("/main/suan")
        }
    },
    watch:{
        value1:function(n){
            this.value1n=n
            console.log(this.value1n)
        },
        value2:function(n){
            this.value2n=n
            console.log(this.value2n)
        }
    },
    computed:{
         zhi:function(){
            if(this.dianchuana==1700){
                return this.value1n*this.dianchuana*0.8+this.value2n*this.dianchuana;
                console.log(this.zhi)
            }else if(this.dianchuana==1880){
                return this.value1n*this.dianchuana*0.8+this.value2n*this.dianchuana;
                // console.log(this.zhi)
            }else if(this.dianchuana==1280){
                return this.value1n*this.dianchuana*0.8+this.value2n*this.dianchuana;
                // console.log(this.zhi)
            }else if(this.dianchuana==1580){
                return this.value1n*this.dianchuana*0.8+this.value2n*this.dianchuana;
                // console.log(this.zhi)
            }else{
                return this.value1n*this.dianchuana*0.8+this.value2n*this.dianchuana;
                // console.log(this.zhi)
            }
         }
    }
}
</script>

<style>
.gou{
    width: 100%;
    box-sizing: border-box;
    padding: 0px 3%;
}
.gou p:nth-of-type(1){
    font-weight: bold;
}
.gou p:nth-of-type(1)~p{
    font-size: 13px;
    background: #ecebeb;
    width: 300px;
    padding: 5px 0px;
    text-indent: 10px;
    box-sizing: border-box;
}
.gou p:nth-of-type(1)~p:hover{
    border: solid 1px crimson;
}
.jiudian span{
    margin-left: 15px;
}
.jiudian span:hover{
    border-bottom: solid 2px crimson;
}
.van-dropdown-menu__item{
    border: solid 1px black;
}
.van-dropdown-menu{
    height: 30px;
    width: 200px;
    margin-top: 50px;
}
.ertong{
    width: 200px;
    margin-left: 12px;
}
.zhiclass{
    width: 150px;
    height: 35px;
    margin-top: 30px;
    border: solid 1px black;
}
.ertong{
    height: 130px;
}
.jiesuan{
    width: 150px;
    height: 35px;
    border: solid 1px black;
    text-align: center;
    line-height: 35px;
}
</style>