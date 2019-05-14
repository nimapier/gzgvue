<template>
    <div>
        <form action="" method="post">
            <v-input inputType='text' textName='手机号' placeholder='请输入您的手机号码' v-model="number"></v-input>
            <v-input inputType='password' textName='密码' placeholder='*******' v-model="password"></v-input>
            <v-btn msg='登录' @click.native="submitform"></v-btn>
        </form>
        <v-btn msg='获取mock数据' style="margin: 10px" @click.native="getdata"></v-btn>
    </div>
</template>
<script>
import GzgInput from '@/components/GzgInput.vue';
import Subbtn from '@/components/Subbtn.vue';
import axios from 'axios'
export default {
    data() {
        return {
            data:[],
            number:'',
            password:''
        }
    },
    components:{
        'v-input':GzgInput,
        'v-btn':Subbtn
    },
    methods: {
        getdata(){
            axios.post('/api/data').then(response=>{
                console.log(response)
            })
        },
        submitform(event){
            event.preventDefault();
            let formData=new FormData
            formData.append('number',this.number)
            formData.append('password',this.password)
            let config={
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }
            axios.post('/',formData,config).then(res=>{
                if(res.status===200){
                    console.log(res.data)
                }else if(res.status===404){
                    console.log('请求错误')
                }
            }).catch(res=>{
                console.log(res)
            })
        }
    },
}
</script>
<style lang="scss" scoped>

</style>
