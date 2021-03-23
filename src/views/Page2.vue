<template>
  <div>
    <div class="pt-3 pl-3">
      <h5 class="logo-color">Middle Man</h5>
    </div>
    <div
      class="d-flex justify-content-center align-items-center my-container px-3"
    >
      <div class="card bg-white rounded shadow px-3 py-5 border-0">
        <div class="row justify-content-center">
          <div class="col-6">
            <font-awesome-icon
              icon="check-circle"
              class="my-icon py-1"
            ></font-awesome-icon>
            <button
              class="my-button-1 active px-2 py-2 rounded font-weight-bold"
            >
              VENDOR
            </button>
          </div>
          <div class="col-6">
            <button class="my-button-1 px-2 rounded py-2 font-weight-bold">
              INDIVIDUAL
            </button>
          </div>
          <div class="col-sm-12 text-center mt-5">
            <button
              class="my-button-2 border-0 rounded px-4 py-2 p-background font-weight-bold text-white"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "Page2",
  components: {
    FontAwesomeIcon
  }
};
</script>

<style scoped>
.my-container {
  height: 100vh;
}
.my-button-1 {
  background-color: #fff;
  border: 1px solid gray;
}
.my-button-1.active {
  border: 2px solid #0041C2;
}
.my-button-2 {
  width: 170px;
}
.my-icon {
  position: absolute;
  left: 85px;
  color: #0041C2;
  /* display: none; */
}
</style>
