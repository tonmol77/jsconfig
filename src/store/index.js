import { createStore } from "vuex";

export default createStore({
  state: {
    pagename: "智慧课程平台",
    userinfo: {
      name: "xxx",
      role: "学生",
      userid: "",
    },
  },
  getters: {
    // Getter to retrieve the user info
    getUserInfo(state) {
      return state.userinfo;
    },
    // Getter to retrieve the page name
    getPagename(state) {
      return state.pagename;
    },
    getIsTeacher(state) {
      console.log(state.role);
      return state.userinfo.role == "老师";
    },
  },
  mutations: {
    setPagename(state, pagename) {
      state.pagename = pagename;
    },
    setUserInfo(state, userinfo) {
      // Merge user info into the existing state
      Object.assign(state.userinfo, userinfo);
    },
    setUserID(state, userid) {
      state.userinfo.userid = userid; // Set userNum individually
    },
    setUserName(state, username) {
      state.userinfo.name = username; // Set userNum individually
    },
  },
  actions: {
    updateUserid({ commit }, userid) {
      commit("setUserid", userid); // Call mutation to set userNum
    },
    updateUserInfo({ commit }, userinfo) {
      commit("setUserInfo", userinfo); // Call mutation to set userinfo
    },
  },
  modules: {},
});
