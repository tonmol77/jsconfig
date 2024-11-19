<template>
  <div class="resource-container">
    <div class="resource-content-container">
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        :header-cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column prop="name" label="文件名" width="800">
          <template #default="{ row }">
            <span class="file-name" @click="previewFile(row.id)">{{
              row.name
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="time"
          label="发布时间"
          width="180"
          align="center"
        />
        <el-table-column label="操作">
          <template #default="{ row }">
            <div class="options">
              <span class="download" @click="downloadFile(row.id)">下载</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
function previewFile(id) {
  router.push({ name: "file-preview", params: { id } });
}
const tableData = [
  {
    name: "File 1",
    time: "2023-03-01",
    id: 1,
  },
  {
    name: "File 2",
    time: "2023-03-02",
    id: 2,
  },
  {
    name: "File 3",
    time: "2023-03-03",
    id: 3,
  },
];
function downloadFile(id) {
  console.log(id);
}
</script>

<style scoped>
.resource-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.resource-content-container {
  width: 88%;
  height: 92%;
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
  flex-direction: column;
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
</style>
