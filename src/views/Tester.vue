<template>
  <div>
    <SidebarHome />
    <div>
      <Page2 />
    </div>
  </div>
</template>

<script>
import SidebarHome from "@/components/SidebarHome.vue";
import Page2 from "./Page2.vue";
export default {
  name: "Tester",
  components: {
    SidebarHome,
    Page2
 }
};
</script>
