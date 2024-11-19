<template>
  <div class="course-discussion-container">
    <div class="discussion-container">
      <div
        v-for="(postItem, index) in postList"
        class="post-container"
        :id="`post-item-${index}`"
      >
        <div class="post-title">{{ postItem.title }}</div>
        <div class="post-author" style="font-size: 0.8rem">
          {{ postItem.author }}
        </div>
        <div class="post-content">{{ postItem.content }}</div>
        <span class="read-more" @click="goToDiscussionDetail(postItem.postId)"
          >阅读更多</span
        >
        <div v-if="index != postList.length - 1" class="devide-line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const route = useRoute();
const router = useRouter();
const store = useStore();
const courseID = route.params.id;
const postList = ref([
  {
    title: "讨论标题1",
    author: "作者1",
    content: "讨论内容1",
    postId: 1,
  },
  {
    title: "讨论标题2",
    author: "作者1",
    content:
      "讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2讨论内容2",
    postId: 1,
  },
  {
    title: "讨论标题2",
    author: "作者1",
    content: "讨论内容1",
    postId: 1,
  },
  {
    title: "讨论标题2",
    author: "作者1",
    content: "讨论内容1",
    postId: 1,
  },
  {
    title: "讨论标题2",
    author: "作者1",
    content: "讨论内容1",
    postId: 1,
  },
]);
function goToDiscussionDetail(id) {
  console.log("go to discussion detail");
  router.push(`/course/${courseID}/discussion/${id}`);
}
// const fetchDiscussion = async () => {
//   try {
//     const response = await getCourseDiscussion(courseID);
//     postList.value = response.posts;
//   } catch (error) {
//     console.error("获取讨论失败", error);
//   }
// };
// onMounted(() => {
//   fetchDiscussion();
// });
</script>

<style scoped>
.course-discussion-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.discussion-container {
  overflow-y: auto;
  overflow-x: hidden;
  height: 88%;
  width: 90%;
  border: var(--main-border);
  box-shadow: var(--main-box-shadow);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.post-container {
  padding: 20px;
  border-radius: var(--main-border-radius);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  background-color: #fff;
}
.post-container:hover .post-title {
  color: var(--main-color);
}
.post-title {
  font-size: 1.35rem;
  font-weight: bolder;
  transition: all 0.3s;
}
.post-content {
  display: -webkit-box;
  /* 使用 WebKit 盒模型 */
  -webkit-line-clamp: 2;
  line-clamp: 2;
  /* 限制最多显示两行 */
  -webkit-box-orient: vertical;
  /* 垂直方向排列 */
  overflow: hidden;
  /* 隐藏超出的内容 */
  text-overflow: ellipsis;
  /* 使用省略号显示溢出内容 */
  white-space: pre-wrap;
  /* 保留换行符，文本过长时会自动换行 */
  word-break: break-word;
}
.read-more {
  color: #2a61f7;
  cursor: pointer;
  margin-left: auto;
}
.devide-line {
  background-color: #e7e7e7;
  height: 1px;
}
</style>
