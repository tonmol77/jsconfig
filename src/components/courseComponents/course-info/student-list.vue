<template>
  <div class="list-container">
    <h1>学生列表</h1>
    <div class="table-container">
      <el-table :data="studentList" style="width: 100%">
        <el-table-column prop="name" label="姓名" width="280"></el-table-column>
        <el-table-column
          prop="studentId"
          label="学号"
          width="280"
        ></el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="280"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const studentList = ref([
  {
    name: "张三",
    studentId: "20180001",
    email: "20180001@bjtu.edu.cn",
  },
  {
    name: "李四",
    studentId: "20180002",
    email: "20180002@bjtu.edu.cn",
  },
  {
    name: "王五",
    studentId: "20180003",
    email: "20180003@...CN",
  },
]);
</script>

<style scoped>
.list-container {
  width: 100%;
  height: 100%;
  padding: 20px 220px;
  box-sizing: border-box;
}
.table-container {
  max-height: 75%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
