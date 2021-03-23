<template>
  <div>
    <transition
      enter-active-class="animate__animated animate__slideInLeft animate__faster"
      leave-active-class="animate__animated animate__slideOutLeft animate__faster"
    >
      <div class="my-container text-center" v-if="sidebarState">
        <div class="item active"><a href="#" class="item-link">Home</a></div>
        <div class="item"><a href="#" class="item-link">Support</a></div>
        <div class="item"><a href="#" class="item-link">How it works</a></div>
        <div class="item">
          <a href="#" class="item-link">Know more about us</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SidebarHome",
  computed: mapState({ sidebarState: state => state.showSidebarState })
};
</script>
<style scoped>
.my-container {
  background-color: #fff;
  padding-top: 50%;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.item {
  background-color: #CBEDFD;
  margin-bottom: 10px;
  padding: 10px;
}
.item .item-link {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
}
.item.active {
  background-color: #0041C2;
  color: #fff;
}
.item.active .item-link {
  color: #fff;
}
.item:last-of-type {
  margin-bottom: 0;
}
</style>
