<template>
    <div>
       <input type="text" v-model="text"/>
       <button @click="sousuo()">搜索</button>

    </div>
</template>

<script>
export default {
    data(){
        return{
            text:"",
            list:[]
        }
    },
    methods:{
        sousuo(){
            // console.log(this.text)
            fetch("/static/nei.json").then((res)=>{
                return res.json();
            })
            .then(res=>{
                this.list=res.nei;
                console.log(this.list)
            })
        }
    }
   
}
</script>

<style>

</style>