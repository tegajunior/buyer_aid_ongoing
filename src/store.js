import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    showSidebarState: false,
    overlayActive: ""
  },
  mutations: {
    showSidebar(state) {
      state.showSidebarState = true;
      state.overlayActive = "active";
    },
    hideSidebar(state) {
      state.showSidebarState = false;
      state.overlayActive = "";
    }
  }
});
