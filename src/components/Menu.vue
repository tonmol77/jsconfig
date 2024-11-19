<template>
  <el-scrollbar class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="var(--menu-color-hover)"
        background-color="var(--main-color)"
        class="el-menu-vertical-demo"
        :default-active="defaultActive"
        text-color="#fff"
        router
      >
        <template v-for="(item, index) in menuList">
          <el-sub-menu v-if="item.children" :index="basePath() + item.url">
            <template #title>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="(subitem, subindex) in item.children"
              :index="`${basePath()}${item.url}${subitem.url}`"
              >{{ subitem.name }}</el-menu-item
            >
          </el-sub-menu>
          <el-menu-item v-else :index="basePath() + item.url">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
        <!-- <el-sub-menu index="1">
          <template #title>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
          <el-menu-item index="1-3">item three</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span>Navigator Four</span>
        </el-menu-item> -->
      </el-menu>
    </el-col>
  </el-scrollbar>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
const store = useStore();
const basePath = () => {
  const segments = route.path.split("/").filter(Boolean); // 分割路径并过滤掉空项
  return segments.length >= 2
    ? `/${segments[0]}/${segments[1]}`
    : `/${segments[0] || ""}`;
};
const menuList = !store.getters.getIsTeacher
  ? [
      { name: "课程通知", url: "/notification" },
      {
        name: "课程资源",
        url: "/resource",
        children: [
          { name: "电子课件", url: "/ppt" },
          { name: "电子教材", url: "/textbook" },
          { name: "实验", url: "/experiment" },
          { name: "试题库", url: "/question-bank" },
          { name: "课程视频", url: "/video" },
        ],
      },
      {
        name: "课程作业",
        url: "/homework",
        children: [
          { name: "作业", url: "/assignment" },
          { name: "实验", url: "/experiment" },
          { name: "测试", url: "/test" },
          { name: "考试", url: "/exam" },
        ],
      },
      { name: "答疑讨论", url: "/discussion" },
      {
        name: "课程信息",
        url: "/course-info",
        children: [
          { name: "课程介绍", url: "/intro" },
          { name: "教学大纲", url: "/syllabus" },
          { name: "配套教案", url: "/teaching-plan" },
          { name: "教师信息", url: "/teacher-info" },
          { name: "学生名单", url: "/student-list" },
        ],
      },
    ]
  : [
      { name: "课程通知", url: "/notification" },
      {
        name: "课程资源",
        url: "/resource",
        children: [
          { name: "电子课件", url: "/ppt" },
          { name: "电子教材", url: "/textbook" },
          { name: "实验", url: "/experiment" },
          { name: "试题库", url: "/question-bank" },
          { name: "课程视频", url: "/video" },
        ],
      },
      {
        name: "课程作业",
        url: "/homework",
        children: [
          { name: "作业", url: "/assignment" },
          { name: "实验", url: "/experiment" },
          { name: "测试", url: "/test" },
          { name: "考试", url: "/exam" },
        ],
      },
      { name: "答疑讨论", url: "/discussion" },
      {
        name: "课程信息",
        url: "/course-info",
        children: [
          { name: "课程介绍", url: "/intro" },
          { name: "教学大纲", url: "/syllabus" },
          { name: "配套教案", url: "/teaching-plan" },
          { name: "教师信息", url: "/teacher-info" },
          { name: "学生名单", url: "/student-list" },
        ],
      },
      {
        name: "教师功能",
        url: "/teacher-functions",
        children: [
          { name: "发送通知", url: "/send-notification" },
          { name: "布置作业", url: "/assign-homework" },
          { name: "管理资源", url: "/manage-resources" },
        ],
      },
    ];
const defaultActive = ref(basePath() + menuList[0].url);
</script>

<!-- <script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

const getChildRoutes = (routes, targetPath) => {
  for (const route of routes) {
    if (route.path === targetPath) {
      return route.children || [];
    }
    if (route.children) {
      const result = getChildRoutes(route.children, targetPath);
      if (result.length > 0) {
        return result;
      }
    }
  }
  return [];
};

const childRoutes = computed(() =>
  getChildRoutes(router.options.routes, "course/:id")
);
const activeMenu = ref(childRoutes[0]);
</script> -->

<style scoped>
.el-menu,
.el-menu-item {
  background-color: var(--menu-color);
}
.el-sub-menu__title:hover {
  background-color: var(--el-primary-color);
}
.el-menu-item:hover,
.is-active,
.el-menu-item.is-active {
  background-color: var(--menu-color-hover);
  color: white;
}
.el-menu-vertical-demo {
  width: 200px;
  font-weight: bolder;
}
</style>
