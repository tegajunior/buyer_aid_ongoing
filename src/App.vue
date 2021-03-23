<template>
  <div id="app" class="pr-0">
    <router-view />
  </div>
</template>

<style lang="scss">
/* Header and Navigation */
* {
  margin: 0;
  padding: 0;
}
#cancel-button {
  width: 30px;
  color: #fff;
  font-weight: 500;
}
.navigation-logo-section-container {
  margin: 8% 0 1%;
}
.navigation-logo-section-class {
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8%;
}
.flex-item-1 {
  flex-basis: 50px;
  margin-right: 20px;
}
.flex-item-2 {
  flex-basis: 33%;
}
.flex-item-3 {
  flex-basis: 15%;
}
/* hamburger bar */
.bar {
  width: 30px;
  height: 3px;
  background-color: #0041C2;
  margin: 5px 0;
}
.bar:hover {
  cursor: pointer;
}
#mid-bar {
  width: 15px;
} /*end of hamburger styling*/

/* Sidebar slide stylings */
#sidebar-active {
  max-width: 80%;
  position: fixed;
  z-index: 9999;
}
.overlay {
  display: none;
  position: fixed;
  /* full screen */
  width: 100vw;
  height: 100vh;
  /* transparent black */
  background: rgba(0, 0, 0, 0.7);
  /* middle layer, i.e. appears below the sidebar */
  z-index: 998;
  opacity: 0;
  /* animate the transition */
  transition: all 0.5s ease-in-out;
}
.overlay.active {
  display: block;
  opacity: 0.5;
} /*end of Sidebar slide styling */
.p-color-t {
  color: #0041C2;
}
.p-border {
  border: 1px solid #0041C2;
}
.p-background {
  background-color: #0041C2;
}
.logo-color {
  color: #FDD634;
}
img {
  max-width: 100%;
}
.my-button {
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
}
.s-text-1 {
  font-size: 9px;
}
/* Footer Styles goes in here */
footer {
  background-color: #9F616A;
}
.footer-divider {
  width: 100%;
  background-color: #fff;
}
/*overlay*/

@import "node_modules/bootstrap/scss/bootstrap";
</style>
