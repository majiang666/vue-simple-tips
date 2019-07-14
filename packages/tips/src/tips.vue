<template>
    <div class="tips" v-if="showFlag" :style="getLocation">
        <span class="tips-box">{{ this.tipsMsg ? this.tipsMsg : '提示' }}</span>
    </div>
</template>

<script>
export default {
    name:"Tips",
    props:['showFlag','location','distance','tipsMsg','times'],
    mounted() {
        if(this.showFlag){
            setTimeout(() => {
                document.querySelector('.tips').remove();
            }, this.times && (typeof this.times === 'number')  ? this.times : 2000);
        }
    },
    computed: {
        getLocation:function(){
            let locations = {};
            if(this.location){
                if(this.location === 'center'){
                    locations['top']='50%';
                    locations['transform']='translateY(-50%)';
                }else{
                    locations[this.location]=this.distance ? this.distance : '50px';
                }
            }else{
                locations['bottom']='50px';
            }
            return locations;
        }
    }
}
</script>

<style>
   .tips{
        display: flex;
        align-content: center;
        justify-content: center;
        word-break: break-all;
        text-align: center;
        position: fixed;
        z-index: 9999;
        width:100%;
    }
    .tips-box{
        background: rgba(0, 0, 0, 0.7);
        font-size: 14px;
        color:#fff;
        padding:10px;
        border-radius:30px;
        line-height: 22px;
        display: inline-block;
        margin: 0 15px;
    } 
</style>