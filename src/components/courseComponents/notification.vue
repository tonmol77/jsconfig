<template>
  <div class="notification-container">
    <div class="notification-content-container">
      <div
        v-for="(item, index) in notificationList"
        class="notification-item-container"
      >
        <div class="notification-item-title">{{ item.title }}</div>
        <div class="notification-item-content">{{ item.content }}</div>
        <div class="notification-item-footer">
          <div class="notification-item-time">{{ item.time }}</div>
          <!-- <div class="notification-item-releaser">
            发布人：{{ item.releaser }}
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const notificationList = ref([
  {
    title: "Notification 1",
    content: "This is the content of notification 1",
    time: "2023-03-01",
    releaser: "Releaser 3",
  },
  {
    title: "Notification 2",
    content:
      "This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. This is the content of notification 2. ",
    time: "2023-03-02",
    releaser: "Releaser 3",
  },
  {
    title: "Notification 3",
    content: "This is the content of notification 3",
    releaser: "Releaser 3",
    time: "2023-03-03",
  },
  {
    title: "Notification 3",
    content: "This is the content of notification 3",
    time: "2023-03-03",
    releaser: "Releaser 3",
  },
  {
    title: "Notification 3",
    content: "This is the content of notification 3",
    time: "2023-03-03",
    releaser: "Releaser 3",
  },
  {
    title: "Notification 3",
    content: "This is the content of notification 3",
    time: "2023-03-03",
    releaser: "Releaser 3",
  },
]);

onMounted(() => {
  axios
    .get(
      `http://localhost:8000/courseinformation/notice/${
        window.location.pathname.split("/")[2]
      }`
    )
    .then((res) => {
      notificationList.value = res.data.notices;
    });
});
</script>

<style scoped>
.notification-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.notification-content-container {
  display: flex;
  flex-direction: column;
  width: 92%;
  height: 90%;
  background-color: #fff;
  gap: 15px;
  overflow-y: auto;
  overflow-x: hidden;
}
.notification-item-container {
  border: #e7e7e7 2px solid;
  border-radius: 10px;
}
.notification-item-title {
  font-size: 1.5rem;
  font-weight: bolder;
  color: #333;
  padding: 10px 10px 0 10px;
}
.notification-item-time {
  font-size: 0.8rem;
  color: #666;
  padding: 10px;
}
.notification-item-content {
  font-size: 1rem;
  padding: 30px 10px;
}
.notification-item-footer {
  border-top: #e0e0e0 1px solid;
  display: flex;
  justify-content: flex-start;
  padding: 0 20px;
}
.notification-item-releaser {
  font-size: 0.9rem;
  color: #666;
  padding: 10px;
}
</style>
