<template>
  <div class="login-container">
    <el-card class="login-card">
      <span class="password-title">修改密码</span>
      <div class="input-container">
        <el-input class="info-input" placeholder="旧密码" v-model="username" />
        <el-input class="info-input" placeholder="新密码" v-model="password" />
        <el-input
          class="info-input"
          placeholder="确认新密码"
          v-model="password"
        />
      </div>
      <el-button class="login-btn" type="primary" @click="() => {}">
        <i class="fa-solid fa-check"></i>
      </el-button>
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
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
}
.password-title {
  font-weight: bolder;
  font-size: 1.5rem;
  color: var(--el-color-primary);
}
.login-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 40vw;
  height: 50vh;
}

.el-card__body {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.info-input {
  margin: 10px 0;
  height: 40px;
}

.user-group {
  margin: 10px 0;
}

.vartify {
  display: flex;
  justify-content: space-between;
}

.vartify-input {
  height: 40px;
  margin-right: 50px;
}

.vartify img {
  height: 40px;
}

.login-btn {
  width: 50%;
  margin: 20px 0;
  height: 45px;
  font-size: 30px;
}
</style>
