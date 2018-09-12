<template>
    <div>
        <h2 class="sub-header">修改英雄</h2>
        <form>
            <div class="form-group">
                <label for="txtName">英雄名称</label>
                <input v-model="formData.name" type="text" class="form-control" id="txtName" placeholder="英雄名称">
            </div>
            <div class="form-group">
                <label for="txtgender">英雄性别</label>
                <input v-model="formData.gender" type="text" class="form-control" id="txtgender" placeholder="英雄性别">
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="edit">修改</button>
        </form>
    </div>
</template>
<script>
export default {
    props:['id'],
    data() {
        return {
            formData: {
                name: '',
                gender: ''
            }
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            this.$http.get(`heroes/${this.id}`)
                .then((response)=>{
                    // console.log(response);
                    this.formData = response.data;
                    
                })
                .catch((err)=>{
                    console.log(err); 
                })
        },
        edit() {
            this.$http.put(`heroes/${this.id}`,this.formData)
                .then((response)=>{
                    // console.log(response);
                    if(response.status === 200){
                        this.$router.push('/heroes');
                    }else{
                        alert('修改失败');
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

