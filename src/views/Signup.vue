<template>
  <div>
    <div class="pt-3 pl-3">
      <h5 class="logo-color mb-5">Middle Man</h5>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div>
        <div class="text-center mb-5">
          <h5 class="font-weight-bold">Sign up</h5>
        </div>
        <SignupForm />
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm";
export default {
  name: "Signup",
  components: {
    SignupForm
  }
};
</script>
