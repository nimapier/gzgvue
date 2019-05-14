<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <form action="" method="post">
      <v-gzginput textName='姓名' placeholder="输入您的姓名" inputType='text'></v-gzginput>
      <v-gzginput textName='电话' placeholder="请输入有效的手机 号码" inputType='tel'></v-gzginput>
      <v-gzginput textName='密码' placeholder="请输入您的密码" inputType='password'></v-gzginput>
      <v-imginput  msg='上传身份证正面'></v-imginput>
      <v-imginput  msg='上传身份证反面'></v-imginput>
      <v-imginput msg='上传营业执照正面'></v-imginput>
      <v-imginput msg='上传营业执照反面'></v-imginput>
      <v-subbtn msg='提交'></v-subbtn>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GzgInput from '@/components/GzgInput.vue'
import ImgInput from '@/components/ImgInput.vue'
import Subbtn from '@/components/Subbtn.vue'
export default {
  name: 'home',
  components: {
    'v-hello': HelloWorld,
    'v-gzginput': GzgInput,
    'v-imginput': ImgInput,
    'v-subbtn': Subbtn
  }
}
</script>
