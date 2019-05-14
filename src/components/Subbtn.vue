<template>
    <button class="btn btn-primary">
        {{msg}}
    </button>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
export default {
    data() {
        return {
        }
    },
    props:['msg']
}
</script>
<style lang="scss" scoped>

</style>
