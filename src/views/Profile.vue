<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body text-center">
            <img src="../assets/logo.png" alt="Profile Image" />
            <h1>John Doe</h1>
            <p>johndoe@gmail.com</p>
            <p>123456789</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-outline-success btn-sm float-end">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>
