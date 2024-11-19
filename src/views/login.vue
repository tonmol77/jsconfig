<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="input-container">
        <el-input class="info-input" placeholder="用户名" v-model="username" />
        <el-input class="info-input" placeholder="密码" v-model="password" />
      </div>
      <el-radio-group class="user-group" v-model="user">
        <!-- works when >=2.6.0, recommended ✔️ not work when <2.6.0 ❌ -->
        <el-radio value="student">学生</el-radio>
        <el-radio value="teacher">老师</el-radio>
      </el-radio-group>
      <div class="vartify">
        <el-input placeholder="请输入验证码" class="vartify-input"></el-input>
        <img src="@/assets/LoginAjax.png" />
      </div>
      <el-button class="login-btn" type="primary" @click="login">
        <i class="fa-solid fa-check"></i>
      </el-button>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter(); // 获取路由实例
const store = useStore();
const username = ref(""),
  password = ref("");
const user = ref("student");
function login() {
  console.log(username.value, password.value, user.value);
  const formData = new FormData();
  formData.append("user_id", username.value);
  formData.append("password", password.value);
  axios
    .post(`http://localhost:8000/api/login/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      if (res.data.success) {
        // 提交用户信息到 Vuex
        store.commit("setUserInfo", {
          name: "xxx", // 可以从 res.data 获取真实用户信息
          role: user.value === "student" ? "学生" : "老师",
          userid: username.value,
        });

        // 登录成功，跳转到指定页面
        router.push("/"); // 替换为你想跳转的路由路径
        
      } else {
        console.error("Login failed");
        alert("登录失败，请检查用户名和密码！");
      }
    })
    .catch((error) => {
      if (error.response) {
        // 服务器返回了一个状态码，范围在 2xx 之外
        console.error("HTTP 状态码:", error.response.status);
        console.error("响应数据:", error.response.data);
        console.error("响应头:", error.response.headers);

        // 显示具体错误信息
        alert(`登录失败：\n状态码: ${error.response.status}\n错误信息: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        // 请求已发送，但未收到响应
        console.error("请求未收到响应:", error.request);
        alert("网络错误：请求未收到响应，请检查网络连接或后端服务状态！");
      } else {
        // 请求过程中出现其他错误
        console.error("请求错误信息:", error.message);
        alert(`请求错误：${error.message}`);
      }

      console.error("请求配置:", error.config); // 打印请求配置，方便调试
    });
}
</script>

<style scoped>
.login-container {
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
