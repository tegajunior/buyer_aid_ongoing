<template>
  <div>
    <form action="#">
      <div class="form-group">
        <label for="storeName" class="form-control-label font-weight-bold">
          Store name
        </label>
        <input type="text" class="form-control" id="storeName" />
      </div>
      <div class="form-group">
        <label for="email" class="form-control-label font-weight-bold">
          Email
        </label>
        <input type="email" id="email" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password" class="form-control-label font-weight-bold">
          Password
        </label>
        <input type="password" id="email" class="form-control" />
      </div>
      <div class="form-group">
        <label
          for="confirmPassword"
          class="form-control-label font-weight-bold"
        >
          Confirm password
        </label>
        <input type="password" id="confirmPassword" class="form-control" />
      </div>
      <div class="form-text mb-5">
        <p class="password-guideline-text grayed-colored-text">
          your passsword must have
        </p>
        <div class="password-guide">
          <font-awesome-icon
            icon="check-circle"
            class="grayed-colored-text"
          ></font-awesome-icon>
          <p class="font-weight-bold">8 or more characters</p>
        </div>
        <div class="password-guide">
          <font-awesome-icon
            icon="check-circle"
            class="grayed-colored-text"
          ></font-awesome-icon>
          <p class="font-weight-bold">
            upper and lower case letters
          </p>
        </div>
        <div class="password-guide">
          <font-awesome-icon
            icon="check-circle"
            class="grayed-colored-text"
          ></font-awesome-icon>
          <p class="font-weight-bold">
            must contain 1 number
          </p>
        </div>
      </div>
      <div class="form-group">
        <button
          type="submit"
          class="my-button p-background text-white font-weight-bold"
        >
          Sign up
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "SignupForm",
  components: {
    FontAwesomeIcon
  }
};
</script>
<style scoped>
.form-group input {
  border: 1px solid black;
}
.grayed-colored-text {
  color: #8C8C8C;
}
.password-guide p {
  margin: 0;
  margin-left: 10px;
  font-size: 14px;
  display: inline-block;
}
.my-button {
    width: 250px;
}
</style>
