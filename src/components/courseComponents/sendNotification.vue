<template>
  <div class="send-container">
    <div class="send-content-container">
      <span class="notification-title">发送通知</span>
      <span class="content-title">通知标题</span>
      <el-input
        class="title-input"
        type="textarea"
        v-model="sendForm.title"
        :rows="2"
      ></el-input>
      <span class="content-title">通知内容</span>
      <el-input
        class="content-input"
        type="textarea"
        v-model="sendForm.content"
        :rows="10"
      ></el-input>
      <div class="option-container">
        <el-button type="primary" @click="sendNotification">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
const sendForm = ref({
  title: "",
  content: "",
});
onMounted(() => {
  const formData = new FormData();
  formData.append("title", sendForm.value.title);
  formData.append("content", sendForm.value.content);
  formData.append("course_id", window.location.pathname.split("/")[2]);
  axios
    .post("http://localhost:8000/sendNotification", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
    });
});
</script>

<style lang="scss" scoped>
.send-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-input {
  margin: 5px 0;
}
.send-content-container {
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 90%;
}
.notification-title {
  font-size: 1.5rem;
  font-weight: bolder;
  color: var(--menu-color-hover);
  margin: 15px 0;
}
.content-title {
  margin: 15px 0;
  color: var(--main-color);
}
.option-container {
  margin: 15px 0;
  margin-left: auto;
  height: 8%;
  width: 15%;
}
.option-container .el-button {
  width: 100%;
  height: 90%;
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>

<style></style>
