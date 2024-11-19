<template>
  <div class="info-container">
    <div class="info-title">教师信息</div>
    <div class="info-content-container">
      <div class="info-content">
        <div class="info-item" v-for="(value, key) in teacherInfo" :key="key">
          <div class="info-item-key">{{ key }}：</div>
          <el-input
            readonly
            disable
            type="text-area"
            class="info-item-value"
            v-model="teacherInfo[key]"
          ></el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const teacherInfo = ref({
  姓名: "张三",
  工号: "123456",
  邮箱: "22301166@bjtu.edu.cn",
  电话: "12345678901",
  介绍: "教授",
  学院: "计算机学院",
});
onMounted(() => {
  axios
    .get(
      `http://localhost:8080/courseinformation/introduce/${
        window.location.pathname.split("/")[2]
      }`
    )
    .then((res) => {
      //         {
      //   "teacher_name": "李令昆",
      //   "teacher_id": 3998,
      //   "academy": "软件学院",
      //   "phone": 15769553727,
      //   "email": "ssxtbf54@qq.com",
      //   "introduce": "毕业于清华大学，喜欢打篮球"
      // }
      teacherInfo["姓名"] = res.data.name;
      teacherInfo["工号"] = res.data.teacher_id;
      teacherInfo["邮箱"] = res.data.email;
      teacherInfo["电话"] = res.data.phone;
      teacherInfo["介绍"] = res.data.introduce;
      teacherInfo["学院"] = res.data.academy;
    });
});
</script>

<style scoped>
.el-input {
  width: 400px;
}
.info-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.info-title {
  font-weight: bolder;
  font-size: 1.2rem;
  margin-bottom: 50px;
}
.info-content-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.info-content {
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  width: 88%;
  height: 50%;
}
.info-item {
  display: flex;
  gap: 10px;
  height: 40px;
}
</style>
