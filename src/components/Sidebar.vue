<template>
  <div>
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div
        class="sidebar-main-coontainer"
        id="sidebar-main"
        v-if="sidebarStatus"
      >
        <div
          class="float-right hambuger-bar-container mt-1 mr-3"
          @click="handleHideSidebar"
        >
          <div class="hide-bar"></div>
          <div id="hide-mid-bar" class="hide-bar"></div>
          <div class="hide-bar"></div>
        </div>
        <div class="row mt-4" id="div-outer">
          <div class="col-sm-12" id="inner-div">
            <div class="text-center">
              <div>
                <div>
                  <img
                    src="../assets/profile-pic.png"
                    alt="profile"
                    id="my-img"
                  />
                </div>
              </div>
              <div>
                <h5>Okoye Daniel</h5>
                <a href="#">View Profile</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="'current'"
              >
                <font-awesome-icon icon="home" class="mr-3"></font-awesome-icon>
                <span>Home</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="'not-current'"
              >
                <font-awesome-icon
                  icon="wallet"
                  class="mr-3"
                ></font-awesome-icon>
                <span>Wallet</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="'not-current'"
              >
                <font-awesome-icon
                  icon="wallet"
                  class="mr-3"
                ></font-awesome-icon>
                <span>Wallet</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="'not-current'"
              >
                <font-awesome-icon
                  icon="wallet"
                  class="mr-3"
                ></font-awesome-icon>
                <span>Wallet</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="'not-current'"
              >
                <font-awesome-icon
                  icon="wallet"
                  class="mr-3"
                ></font-awesome-icon>
                <span>Wallet</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="'not-current'"
              >
                <font-awesome-icon
                  icon="wallet"
                  class="mr-3"
                ></font-awesome-icon>
                <span>Wallet</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                :class="'not-current'"
              >
                <font-awesome-icon
                  icon="wallet"
                  class="mr-3"
                ></font-awesome-icon>
                <span>Wallet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Sidebar",
  methods: {
    handleHideSidebar() {
      this.$emit("handleHideSidebar");
    }
  },
  props: ["sidebarStatus"],
  components: {
    FontAwesomeIcon
  }
};
</script>
<style scoped>
.custom-enter {
  opacity: 0;
}
.custom-enter-active {
  transition: all 1s ease-in-out;
}
#div-outer {
  height: 100vh;
}
#inner-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* hamburger bar */
.hambuger-bar-container {
  display: flex;
}
.hide-bar {
  width: 3px;
  height: 30px;
  background-color: #0041C2;
  margin: 0 4px;
}
#hide-mid-bar {
  height: 15px;
} /*end of hamburger styling*/
#my-img {
  width: 100px;
}
.current {
  color: #fff;
  background-color: #0041C2;
}
.not-current {
  background-color: #CBEDFD;
}
.list-group-item {
  margin-bottom: 2px;
  border: none;
}
</style>