<template>
  <div class="home-page-container">
    <div class="welcome-title">
      <span class="welcome-text">欢迎访问智慧课程平台</span>
      <div class="user-check">
        <el-dropdown trigger="hover">
          <img src="@/assets/avatar.png" class="user-avatar" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script setup></script>

<style scoped>
.home-page-container {
  display: flex;
  flex-direction: column;
}
.welcome-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  padding: 0 20px;
  background-color: var(--el-color-primary);
}

.welcome-text {
  color: white;
  font-weight: bolder;
}

.user-avatar {
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
</style>
