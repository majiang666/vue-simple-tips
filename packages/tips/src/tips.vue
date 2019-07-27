<template>
    <div class="tips fadeInUp" v-if="showFlag" :style="getLocation">
        <span class="tips-box">{{ this.tipsMsg ? this.tipsMsg : '提示' }}</span>
    </div>
</template>

<script>
export default {
    name:"Tips",
    props:['showFlag','location','distance','tipsMsg'],
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
        left:0;
        right:0;
    }
    .tips-box{
        background: rgba(0, 0, 0, 0.5);
        font-size: 13px;
        color:#fff;
        padding:6px 10px;
        border-radius:30px;
        line-height: 22px;
        display: inline-block;
        margin: 0 15px;
    } 
    @keyframes fadeInUp {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
        }
        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }
    .fadeInUp {
        -webkit-animation-name: fadeInUp;
        animation-name: fadeInUp;
        -webkit-animation-duration: 0.5s;
        animation-duration: 0.5s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }
</style>