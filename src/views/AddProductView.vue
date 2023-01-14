<template>
    <Header />
    <h1 class="text-center">Add a new product to the store inventory</h1>
    <AddProduct />

</template>


<script>
import Header from '../components/Header.vue';
import AddProduct from '../components/AddProduct.vue';
export default {
    data() {
        return {
            productName:"",
            productDescription: "",
            productPrice:"",
            productsInStock:"",
            articleNumber:""
        };
    },
  components: { 
    Header,
    AddProduct
  },
  };
</script>

<style scoped>
h1 {
    margin: 4% 0 2% 0;
}
</style>