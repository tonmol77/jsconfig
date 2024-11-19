<template>
  <!-- <div class="welcome-title">
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
        </div> -->
  <div class="main-content">
    <div class="left-content">
      <div class="info-box">
        <el-card class="top-info">
          <i class="bber-logo solitude fa-solid fa-volume-low"></i>
          <span class="top-info-title">{{ "通知" }}</span>
        </el-card>
        <!-- 数据表格 -->
        <el-table
          :data="paginatedData"
          :show-header="false"
          :border="false"
          style="width: 100%"
        >
          <el-table-column prop="info" label="通知" width="800" />
          <el-table-column prop="date" label="日期" width="300" />
        </el-table>

        <!-- 分页组件 -->
        <el-pagination
          background
          layout="prev, pager, next"
          :total="tableData.length"
          :page-size="pageSize"
          :current-page="currentPage"
          @current-change="handleCurrentChange"
          style="margin-top: 20px"
        />
      </div>
      <div class="course-box">
        <div v-for="(item, index) in courseList" class="course-item">
          <div class="course-item-img">
            <img src="@/assets/courseCover.png" />
          </div>
          <div class="course-item-title">
            <span>{{ item.course_name }}</span><br>
            <span>{{ "教师：" }}</span>
            <span>{{ item.teacher_name }}</span>
          </div>
          <div class="course-operations">
            <el-button
              class="course-operations-btn"
              type="primary"
              @click="goToCourseDetail(item.course_id)"
              >详情</el-button
            >
            <el-button
              class="course-operations-btn"
              @click="toDiscussion(item.course_id)"
              type="primary"
              >讨论区</el-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="right-content">
      <el-card class="card-box">
        <div class="info-card-content">
          <span class="bbs-title">我的论坛</span>
          <el-button class="bbs-operations-btn" type="primary"
            >我的帖子</el-button
          >
          <el-button class="bbs-operations-btn" type="primary"
            >我的关注</el-button
          >
          <el-button class="bbs-operations-btn" type="primary"
            >我的收藏</el-button
          >
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import axios from "axios";
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
// 原始数据
const tableData = ref([
  { info: "关于举办2025年第二十二届北京交通大学“电气杯”科技创新大赛的通知", date: "2024-11-19" },
  { info: "四、六级口语模拟考试报名通知", date: "2024-11-15" },
  { info: "北京交通大学实验室安全有奖知识竞赛通知", date: "2023-11-15" },
  { info: "关于软件学院2023-2024学年“知行奖学金（本科生）”评选工作的通知", date: "2024-11-12" },
  { info: "北京交通大学“热血递温情，点滴聚爱心”校园大型无偿献血活动通知", date: "2024-11-12" },
  { info: "保家卫国终不悔 绿色军营献青春——致我校适龄应征青年的一封信", date: "2024-11-11" },
  { info: "关于举办北京交通大学第十期“竞赛说”挑战杯竞赛经验分享会的通知", date: "2024-11-09" },
  { info: "关于举办第十八届全国大学生软件创新大赛参赛通知", date: "2024-11-04" },
]);

// 分页相关数据
const currentPage = ref(1);
const pageSize = ref(5);
  
// 计算当前页的数据
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return tableData.value.slice(start, end);
});
function goToCourseDetail(id) {
  router.push(`/course/${id}`);
}
function toDiscussion(id) {
  router.push(`/course/${id}/discussion`);
}
// 处理页码变化
const handleCurrentChange = (page) => {
  currentPage.value = page;
};
const courseList = ref([
  { course_name: "课程1", course_id: 10001, teacher_name: "教师1" },
  { course_name: "课程2", course_id: 10002, teacher_name: "教师2" },
  { course_name: "课程3", course_id: 10003, teacher_name: "教师3" },
  { course_name: "课程4", course_id: 10004, teacher_name: "教师4" },
  { course_name: "课程5", course_id: 10005, teacher_name: "教师5" },
  { course_name: "课程3", course_id: 10003, teacher_name: "111" },
  { course_name: "课程4", course_id: 10004, teacher_name: "111" },
  { course_name: "课程5", course_id: 10005, teacher_name: "111" },
]);

axios.get(`http://localhost:8000/homepage/${store.state.userinfo.userid}`).then((res) => {
  console.log(res.data);
  store.commit("setUserName", res.data.student_name);
  courseList.value = res.data.courses;
});
</script>

<style scoped>
/* .home-page-container {
    display: flex;
    flex-direction: column;
} */

/* .welcome-title {
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
} */

.main-content {
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  text-align: center;
}

.left-content {
  width: 75vw;
  padding: 0px 15px 0 30px;
}

.info-box {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.top-info {
  width: 100%;
  height: 50px;
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.top-info-title {
  font-weight: bolder;
  padding-left: 10px;
}

.course-box {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  position: relative;
  column-gap: 1%;
  row-gap: 10px;
  flex-wrap: wrap;
}

.course-item {
  width: 24%;
  height: 35vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  border: #999 1px solid;
}

.course-item-img {
  width: 100%;
  height: 50%;
}

.course-item-img img {
  max-width: 100%;
  width: 100%;
  /* 保持图片响应式 */
  height: 100%;
  /* 保持图片宽高比 */
  margin: 0 auto;
  padding: 0;
  object-fit: cover;
  /* 图片将被裁剪以填满容器，保持宽高比 */
  object-position: center;
  /* 图片居中 */
}

.course-item-title {
  font-size: 25px;
  margin: 10px 0;
}

.course-operations {
  width: 100%;
  margin-bottom: 10px;
  height: 15%;
}

.course-operations-btn {
  width: 35%;
  height: 80%;
}

.right-content {
  width: 25vw;
  padding: 0px 30px 0 15px;
}

.info-card-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 40vh;
}

.bbs-title {
  color: var(--el-color-primary);
  font-weight: bolder;
  font-size: 30px;
}

.bbs-operations-btn {
  width: 80%;
  font-weight: bolder;
  height: 20%;
  margin: 0 !important;
}
</style>
