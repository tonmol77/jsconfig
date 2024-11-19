import { createRouter, createWebHistory } from "vue-router";
import mainLayout from "@/views/layout/mainLayout/index.vue";
import courseLayout from "@/views/layout/courseLayout/index.vue";
import HomeView from "@/views/homePage.vue";
import PersonalView from "@/views/personal.vue";
import PasswordChange from "@/views/passwordChange.vue";
import login from "@/views/login.vue";

const routes = [
  {
    path: "/",
    name: "base",
    component: mainLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "/course/:id",
        name: "course",
        component: courseLayout,
        redirect: (to) => {
          const { id } = to.params;
          return `/course/${id}/notification`;
        },
        children: [
          {
            path: "assignmentReview",
            name: "assignmentReview",
            component: () =>
              import("@/components/courseComponents/assignmentReview.vue"),
          },
          {
            path: "notification",
            name: "notification",
            component: () =>
              import("@/components/courseComponents/notification.vue"),
          },
          {
            path: "resource",
            name: "resource",
            children: [
              {
                path: "ppt",
                name: "ppt",
                component: () =>
                  import("@/components/courseComponents/resource.vue"),
              },
              {
                path: "textbook",
                name: "textbook",
                component: () =>
                  import("@/components/courseComponents/resource.vue"),
              },
              {
                path: "experiment",
                name: "experimentResource",
                component: () =>
                  import("@/components/courseComponents/resource.vue"),
              },
              {
                path: "question-bank",
                name: "questionBank",
                component: () =>
                  import("@/components/courseComponents/resource.vue"),
              },
              {
                path: "video",
                name: "video",
                component: () =>
                  import("@/components/courseComponents/resource.vue"),
              },
            ],
          },
          {
            path: "homework",
            name: "homework",
            children: [
              {
                path: "assignment",
                name: "assignment",
                component: () =>
                  import("@/components/courseComponents/homework.vue"),
              },
              {
                path: "experiment",
                name: "experimentHomework",
                component: () =>
                  import("@/components/courseComponents/homework.vue"),
              },
              {
                path: "test",
                name: "test",
                component: () =>
                  import("@/components/courseComponents/homework.vue"),
              },
              {
                path: "exam",
                name: "exam",
                component: () =>
                  import("@/components/courseComponents/homework.vue"),
              },
            ],
          },
          {
            path: "discussion",
            name: "discussion",
            component: () =>
              import(
                "@/components/courseComponents/CourseDisscussion/CourseDiscussion.vue"
              ),
          },
          {
            path: "discussion/:id",
            name: "discussion-detail",
            component: () =>
              import(
                "@/components/courseComponents/CourseDisscussion/CourseDiscussionDetail.vue"
              ),
          },
          {
            path: "course-info",
            name: "courseInfo",
            children: [
              {
                path: "intro",
                name: "intro",
                component: () =>
                  import(
                    "@/components/courseComponents/course-info/courseIntroduce.vue"
                  ),
              },
              {
                path: "syllabus",
                name: "syllabus",
                component: () =>
                  import("@/components/courseComponents/filePreview.vue"),
              },
              {
                path: "teaching-plan",
                name: "teachingPlan",
                component: () =>
                  import("@/components/courseComponents/filePreview.vue"),
              },
              {
                path: "teacher-info",
                name: "teacherInfo",
                component: () =>
                  import(
                    "@/components/courseComponents/course-info/teacher-info.vue"
                  ),
              },
              {
                path: "student-list",
                name: "studentList",
                component: () =>
                  import(
                    "@/components/courseComponents/course-info/student-list.vue"
                  ),
              },
            ],
          },
          {
            name: "teacher-functions",
            path: "teacher-functions",
            children: [
              {
                name: "send-notification",
                path: "send-notification",
                component: () =>
                  import("@/components/courseComponents/sendNotification.vue"),
              },
              {
                name: "pushlish-homowork",
                path: "pushlish-homeowork",
                component: () =>
                  import("@/components/courseComponents/pushlishHomework.vue"),
              },
              {
                name: "post-resource",
                path: "post-resource",
                component: () =>
                  import("@/components/courseComponents/postResource.vue"),
              },
            ],
          },
          {
            name: "file-preview",
            path: "file-preview/:target",
            component: () =>
              import("@/components/courseComponents/filePreview.vue"),
          },
        ],
      },
      {
        path: "personal",
        name: "personal",
        component: PersonalView,
      },
      {
        name: "passwordchange",
        path: "passwordchange",
        component: PasswordChange,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
