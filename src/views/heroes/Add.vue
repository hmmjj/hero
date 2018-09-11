<template>
    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
            <div class="form-group">
                <label for="txtName">英雄名称</label>
                <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
            </div>
            <div class="form-group">
                <label for="txtgender">英雄性别</label>
                <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="英雄性别">
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="add">添加</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            formData:{
                name: '',
                gender: ''
            }
        }
    },
    methods: {
        add() {
            axios.post('http://localhost:3000/heroes',this.formData)
                .then((response)=>{
                    // console.log(response);
                    const { data, status} = response;
                    if(status === 201){
                       this.$router.push('/heroes');
                    }else{
                        alert('添加失败');
                    }
                    
                })
                .catch((err)=>{
                    console.log(err);
                })
        }
    } 
}
</script>
<style>

</style>

