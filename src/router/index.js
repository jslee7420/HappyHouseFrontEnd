import Vue from "vue";
import VueRouter from "vue-router";
import QnA from "@/views/QnA.vue";
import Home from "@/views/Home.vue";
import House from "@/views/House.vue";
import QuestionList from "@/components/QnA/QuestionList.vue";
import QuestionRegist from "@/components/QnA/QuestionRegist.vue";
import QuestionModify from "@/components/QnA/QuestionModify.vue";
import QuestionDetail from "@/components/QnA/QuestionDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/qna",
    name: "Q&A",
    component: QnA,
    redirect: "/qna/list",
    children: [
      {
        path: "list",
        name: "QuestionList",
        component: QuestionList,
      },
      {
        path: "register",
        name: "QuestionRegist",
        component: QuestionRegist,
      },
      {
        path: "modify/:qnaId",
        name: "QuestionModify",
        component: QuestionModify,
      },
      {
        path: "detail/:qnaId",
        name: "QuestionDetail",
        component: QuestionDetail,
      },
    ],
  },
  {
    path: "/house",
    name: "House",
    component: House,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
