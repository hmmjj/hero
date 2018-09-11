<template>
    <div>
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">Add</a> -->
        <router-link to="/heroes/add" class="btn btn-success">
            Add
        </router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>姓名</th>
                        <th>性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in list" :key="item.id">
                        <td>{{index+1}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.gender}}</td>
                        <td>
                        <a href="edit.html">编辑</a>
                        &nbsp;&nbsp;
                        <a href="javascript:;" @click.prevent="del(item.id)">删除</a>
                        </td>
                    </tr>
                    <tr v-if="list.length===0">
                        <td colspan="4">暂无数据</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.loadData();
    },
    methods:{
        loadData() {
            axios.get('http://localhost:3000/heroes')
                .then((response)=>{
                    // console.log(response);
                    const { data, status } = response;
                    if(status === 200){
                        this.list = data;
                    }
                })
                .catch((err)=>{
                    console.log(err);
                });
        },
        del(id) {
            if(!confirm('您确定要删除吗？')){
                return;
            }
            axios.delete(`http://localhost:3000/heroes/${id}`)
                .then((response)=>{
                    if(response.status === 200){
                        alert('删除成功');
                        this.loadData();
                    }else{
                        alert('删除失败');
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

