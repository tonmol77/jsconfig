<template>
  <div class="assignment-review">
    <h1>作业互评系统</h1>

    <!-- 文件预览 -->
    <div class="file-preview">
      <h3>作业文件预览</h3>
      <iframe v-if="currentAssignment.fileUrl" :src="currentAssignment.fileUrl" class="preview-frame"></iframe>
      <p v-else>文件无法预览，请下载查看。</p>
    </div>

    <!-- 文件下载 -->
    <div class="file-download">
      <h3>文件操作</h3>
      <a :href="currentAssignment.fileUrl" download class="download-link">下载文件</a>
    </div>

    <!-- 打分功能 -->
    <div class="score-section">
      <h3>打分</h3>
      <div class="score-input">
        <label for="score">评分（1-100 分）：</label>
        <input id="score" type="number" v-model="score" min="1" max="100" />
      </div>
      <textarea v-model="comment" placeholder="写下您的评语..." class="comment-box"></textarea>
      <div class="action-buttons">
        <button @click="submitScore" :disabled="!scoreValid" class="submit-button">提交评分</button>
        <button @click="nextAssignment" class="next-button">批改下一份</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AssignmentReview",
  data() {
    return {
      assignments: [
        { id: 1, fileUrl: "http://example.com/file1.pdf" },
        { id: 2, fileUrl: "http://example.com/file2.pdf" },
      ], // 作业列表
      currentIndex: 0, // 当前作业索引
      score: null, // 当前评分
      comment: "", // 当前评语
    };
  },
  computed: {
    currentAssignment() {
      return this.assignments[this.currentIndex];
    },
    scoreValid() {
      return this.score >= 1 && this.score <= 100;
    },
  },
  methods: {
    submitScore() {
      if (this.scoreValid) {
        const result = {
          assignmentId: this.currentAssignment.id,
          score: this.score,
          comment: this.comment,
        };
        console.log("评分提交：", result);
        alert(`评分已提交：${result.score} 分，评语：${result.comment}`);
      } else {
        alert("请填写有效的评分！");
      }
    },
    nextAssignment() {
      if (this.currentIndex < this.assignments.length - 1) {
        this.currentIndex++;
        this.score = null; // 清空评分
        this.comment = ""; // 清空评语
        alert("加载下一份作业成功！");
      } else {
        alert("已经是最后一份作业！");
      }
    },
  },
};
</script>

<style scoped>
.assignment-review {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.file-preview {
  margin-bottom: 20px;
}

.preview-frame {
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
}

.file-download {
  margin-bottom: 20px;
}

.download-link {
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  color: #42b983;
}

.score-section {
  margin-top: 20px;
}

.score-input {
  margin-bottom: 10px;
}

.comment-box {
  width: 100%;
  min-height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.submit-button {
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.next-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:disabled {
  background-color: gray;
  cursor: not-allowed;
}
</style>
