<template>
  <div class="homework-container">
    <div class="homework-content-container">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column prop="name" label="作业名" width="600">
          <template #default="{ row }">
            <span class="file-name" @click="checkHomework(row)">{{
              row.name
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="releasetime"
          label="发布时间"
          width="180"
          align="center"
        />
        <el-table-column
          prop="deadline"
          label="截止日期"
          width="180"
          align="center"
        />
        <el-table-column label="操作">
          <template #default="{ row }">
            <div class="options">
              <span
                class="check-homework download"
                v-if="row.isSubscribed"
                @click="checkSubmitHomework(row)"
                >查看</span
              >
              <span class="download" @click="subscribeHomework(row.id)"
                >提交</span
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="提交作业" width="65vw">
    <div class="homework-submit-container">
      <div class="homework-submit-title">作业内容</div>
      <el-input
        type="textarea"
        v-model="homeworkContent"
        placeholder="请输入作业内容"
        rows="10"
      ></el-input>
      <div class="upload-homework-file">
        <el-upload
          class="upload-demo"
          :http-request="uploadFile"
          accept=".pdf"
          :show-file-list="false"
          :limit="1"
          :auto-upload="false"
        >
          <el-button class="upload-file-btn" size="small" type="primary"
            >点击上传</el-button
          >
        </el-upload>
      </div>
      <div class="homework-submit-button" style="width: 100%">
        <el-button class="submit-btn" type="primary" @click="submitHomework"
          >提交</el-button
        >
      </div>
    </div>
  </el-dialog>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const tableData = [
  {
    id: 111,
    title: "1212",
    description: "12121",
    file: "/homeworks/%E5%AE%9E%E9%AA%8C%E4%B8%80_%E7%BA%BF%E6%80%A7%E6%A8%A1%E5%9E%8B_bJiRaf5.pdf",
    start_time: "2024-10-25T14:30:00Z",
    end_time: "2024-10-25T14:30:00Z",
  },
  {
    id: 333,
    title: "333",
    description: "333",
    file: "/homeworks/%E5%AE%9E%E9%AA%8C%E4%B8%80_%E7%BA%BF%E6%80%A7%E6%A8%A1%E5%9E%8B_bJiRaf5.pdf",
    start_time: "2024-10-25T14:30:00Z",
    end_time: "2024-10-25T14:30:00Z",
  },
];
axios
  .get("http://localhost:8000/homework/homework_list", {
    params: {
      course_id: parseInt(window.location.pathname.split("/")[2]),
    },
  })
  .then((res) => {
    tableData.value = res.data;
  });
let selectSubscribedHomeworkID = null;
const dialogVisible = ref(false);
function checkHomework(row) {
  router.push({ name: "file-preview", params: { target: row.file } });
}
function subscribeHomework(id) {
  selectSubscribedHomeworkID = id;
  dialogVisible.value = true;
}
function submitHomework() {
  console.log(selectSubscribedHomeworkID);
  dialogVisible.value = false;
}
function checkSubmitHomework(row) {
  axios
    .get("http://localhost:8000/homework/download_homework_file", {
      params: {
        homework_id: row.id,
      },
    })
    .then((res) => {
      router.push({ name: "file-preview", params: { target: row.file } });
    });
}
async function uploadFile(file) {}
</script>

<style scoped>
.homework-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.homework-content-container {
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.file-name {
  user-select: none;
  cursor: pointer;
  padding-left: 10px;
}
.file-name:hover {
  color: var(--main-color);
}
.options {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.download {
  user-select: none;
  cursor: pointer;
}
.download:hover {
  color: var(--main-color);
}
.homework-submit-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.upload-homework-file,
.upload-demo,
.upload-file-btn {
  height: 35px;
}
.submit-btn {
  margin-top: 20px;
}
</style>
