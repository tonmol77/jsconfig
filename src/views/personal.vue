<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="card-container">
        <img src="@/assets/avatar.png" />
        <div class="info-title">姓名: <span>xxx</span></div>
        <div class="info-title">学号: <span>xxx</span></div>
        <div class="info-title">班级: <span>xxx</span></div>
        <div class="info-title">
          联系方式: <span>xxx</span
          ><i class="fa-solid fa-pen-to-square fastyle"></i>
        </div>
        <div class="info-title">
          邮箱: <span>xxx</span
          ><i class="fa-solid fa-pen-to-square fastyle"></i>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const username = ref(""),
  password = ref("");
const user = ref("student");
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
}

.login-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 40vw;
  height: 50vh;
}
.login-card img {
  width: 80px;
  aspect-ratio: 1 / 1;
  border-radius: 50px;
}
.card-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.info-title {
  font-weight: bold;
  font-size: 1.5rem;
  margin: 5px 0;
}
.info-title span {
  font-weight: normal;
}
.fastyle {
  margin-left: 10px;
}
</style>
