import Vue from "vue";
import VueRouter from "vue-router";
import QnA from "@/views/QnA.vue";
import QuestionList from "@/components/QnA/QuestionList.vue";
import QuestionRegist from "@/components/QnA/QuestionRegist.vue";
import QuestionModify from "@/components/QnA/QuestionModify.vue";
import QuestionDetail from "@/components/QnA/QuestionDetail.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/qna",
    name: "Q&A",
    component: QnA,
    redirect: "/qna/list",
    children: [
      {
        path: "/list",
        name: "QuestionList",
        component: QuestionList,
      },
      {
        path: "/register",
        name: "QuestionRegist",
        component: QuestionRegist,
      },
      {
        path: "/modify",
        name: "QuestionModify",
        component: QuestionModify,
      },
      {
        path: "/detail",
        name: "QuestionDetail",
        component: QuestionDetail,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
