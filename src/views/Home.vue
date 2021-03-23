<template>
  <div class="home pr-0">
    <div class="row w-100 pr-0">
      <div :class="['col']" id="sidebar-active">
        <SidebarHome />
      </div>
      <div class="col-sm-12 navigation-logo-section-container">
        <div
          class="navigation-logo-section-class"
          id="navigation-logo-section-id"
        >
          <div class="flex-item pl-3" id="flex-item-1">
            <div
              class="float-right hambuger-bar-container"
              v-on:click="handleShowSidebar()"
            >
              <div class="bar"></div>
              <div id="bar" class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
          <div class="flex-item" id="flex-item-2">
            <h5 class="logo-color">Middle Man</h5>
          </div>
          <div class="flex-item pr-0" id="flex-item-3">
            <span class="rounded-circle p-1 p-border">
              <font-awesome-icon
                icon="search"
                class="p-color-t"
              ></font-awesome-icon>
            </span>
          </div>
        </div>
        <div class="w-100 mb-5 px-3">
          <h5>What does Middle man do?</h5>
          <p>
            Middle man allows Buyers and Sellers to make transactions online
            easily without risk; safe, secure and simple via secure payment
          </p>
        </div>
        <div class="mb-4">
          <img src="../assets/placeholder.png" alt="placeholder" />
        </div>
        <div class="mb-4 ml-5">
          <h6 class="font-weight-bold text-center">
            RISK-FREE TRANSACTION FOR ALL
          </h6>
        </div>
        <div class="mb-5 px-3">
          <form action="">
            <div class="form-row">
              <div class="form-group col-4">
                <select class="form-control">
                  <option value="" selected>I'm selling</option>
                  <option value="option 1">Option 1</option>
                </select>
              </div>
              <div class="form-group col-7">
                <select class="form-control">
                  <option value="" selected>Gadgets, Electronics, etc</option>
                  <option value="option 1">Option 1</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  placeholder="for #1000"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="text-center mb-5">
          <button class="text-white p-background my-button">
            GET STARTED NOW
          </button>
        </div>
        <div class="text-center mb-5">
          <h5 class="font-weight-bold">
            All funds paid into escrow are insured by Consolidated Hallmark
            Insurance PLC
          </h5>
        </div>
        <footer class="py-3">
          <div class="row pl-2 justify-content-between pr-0 row-cols-2">
            <div class="col-sm-5">
              <p class="text-white s-text-1 mb-1">Escrow Services</p>
              <p class="text-white s-text-1 my-1">eCommerce Website Escrow</p>
              <p class="text-white s-text-1">Person to Person (P2P) Escrow</p>
            </div>
            <div class="col-sm-5">
              <p class="text-white s-text-1 mb-1">Support</p>
              <p class="text-white s-text-1 my-1">
                Frequently asked questions (FAQ)
              </p>
              <p class="text-white s-text-1">Report a bug</p>
            </div>
          </div>
          <div class="footer-divider mt-n2"><hr /></div>
        </footer>
      </div>
      <div :class="['overlay', overlayState]" @click="handleHideSidebar" >
        <div class="float-right">
          <font-awesome-icon
            icon="times"
            id="cancel-button"
          ></font-awesome-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarHome from "@/components/SidebarHome.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { mapState } from "vuex";
export default {
  name: "Home",
  data: function() {
    return {
      //
    };
  },
  methods: {
    handleShowSidebar() {
      this.$store.commit("showSidebar");
    },
    handleHideSidebar() {
      this.$store.commit("hideSidebar");
    }
  },
  components: {
    FontAwesomeIcon,
    SidebarHome
  },
  computed: mapState({ overlayState: state => state.overlayActive })
};
</script>
<style>
input[type="text"],
input[type="text"]:focus {
  border: 1.5px solid black;
}
select {
  border: 0;
}
</style>
