import Vue from "vue";
import VueRouter from "vue-router";
import QnA from "@/views/QnA.vue";
import Home from "@/views/Home.vue";

import Bookmark from "@/views/Bookmark.vue";

import DealTrend from "@/views/DealTrend.vue"

import House from "@/views/HouseDeal.vue";
import HouseList from "@/components/house/HouseList.vue";
import HouseDetail from "@/components/house/HouseDetail.vue";

import User from "@/views/User.vue";
import UserLogin from "@/components/user/UserLogin.vue";
import UserJoin from "@/components/user/UserJoin.vue";
import UserProfile from "@/components/user/UserProfile.vue";

import QuestionList from "@/components/qna/QuestionList.vue";
import QuestionRegist from "@/components/qna/QuestionRegist.vue";
import QuestionModify from "@/components/qna/QuestionModify.vue";
import QuestionDetail from "@/components/qna/QuestionDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: User,
    children: [
      {
        path: "login",
        name: "UserLogin",
        component: UserLogin,
      },
      {
        path: "join",
        name: "UserJoin",
        component: UserJoin,
      },
      {
        path: "profile",
        name: "UserProfile",
        component: UserProfile,
      },
    ],
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
    redirect: "/house/list",
    children: [
      {
        path: "list",
        name: "HouseList",
        component: HouseList,
      },
      {
        path: "detail",
        name: "HouseDetail",
        component: HouseDetail,
      },
    ],
  },
  {
    path: "/bookmark",
    name: "Bookmark",
    component: Bookmark,
    redirect: "/Bookmark/list",
    children: [
      {
        path: "list",
        name: "BookmarkList",
        component: HouseList,
      },
      {
        path: "detail",
        name: "BookmarkDetail",
        component: HouseDetail,
      },
    ],
  },
  {
    path: "dealtrend",
    name: "DealTrend",
    component: DealTrend
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
