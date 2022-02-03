<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card">
          <span class="alert alert-danger" v-if="message">{{ message }}</span>
          <div class="card-body">
            <h3 class="mt-2 mb-3">Login</h3>
            <form @submit.prevent="login">
              <div class="form-group">
                <input
                  type="email"
                  v-model="email"
                  placeholder="Email"
                  class="form-control"
                />
              </div>
              <div class="form-group mt-3">
                <input
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  class="form-control"
                />
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-3">
                Login
              </button>
            </form>
          </div>
          <div class="card-footer">
            <small
              ><span>Don't have an account?</span
              ><a href="#">Register</a></small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    login() {
      if (this.email === "test@gmail.com" && this.password === "123456") {
        localStorage.setItem("auth", this.email);
        this.$router.push("/profile");
      } else {
        this.message = "Email or password is incorrect";
      }
    },
  },
};
</script>
