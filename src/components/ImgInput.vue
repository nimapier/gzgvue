<template>
    <div class="img_input">
        <label  class="bttn btn-primary bttn">
            {{msg}}
            <input type="file" accept="image/*" name="file" class="inputfile" @change="getulr">
        </label>
        <img src="../assets/logo.png" alt="" >
    </div>
</template>
<script>
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap'
export default {
    props:['msg'],
    data() {
        return {
            imgsrc:''
        }
    },
    methods: {
        getulr:function(event){
            let file=event.target.files[0]
            if(window.createObjectURL!=undefined){
                    this.imgsrc=window.createObjectURL(file)
                }else if(window.URL!=undefined){
                    this.imgsrc=window.URL.createObjectURL(file)
                }else if(window.webkitURL!=undefined){
                    this.imgsrc=window.webkitURL.createObjectURL(file)
                }
            // console.log(event)
            event.srcElement.parentElement.parentElement.children[1].src=this.imgsrc
        },
    },
    computed: {
        
    },

}
</script>
<style lang="scss" scoped>
.inputfile{
    z-index: -11111;  width: 0px;  height: 1px;
}
.bttn{
    border-style: solid;
    display: inline;
    cursor: pointer;
}
</style>