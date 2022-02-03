<template>
  <div>
    <div class="container">
      <h1 v-if="loading">Loading...</h1>
      <div v-else class="row mt-5">
        <div class="col-md-4" v-for="(product, index) in products" :key="index">
          <div class="card mb-3">
            <div class="card-body text-center">
              <img
                :src="product.image"
                class="product-image"
                alt="Product Image"
              />
              <h3 class="mt-4">{{ product.title }}</h3>
              <div class="text-muted my-4">$ {{ product.price }}</div>
              <router-link
                :to="`/product/${product.id}`"
                class="btn btn-primary btn-block w-100"
              >
                More Detail
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProductHome",
  data() {
    return {
      products: [],
      loading: false,
    };
  },
  created() {
    this.loading = true;
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        this.products = response.data;
        this.loading = false;
      })
      .catch((error) => {
        this.loading = error;
      });
  },
};
</script>

<style scoped>
.product-image {
  height: 150px;
}
</style>
