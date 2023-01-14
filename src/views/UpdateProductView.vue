<template>
    <Header />
    <h1 class="text-center">Update product to the store inventory</h1>
    <UpdateProduct />

</template>


<script>
import Header from '../components/Header.vue';
import UpdateProduct from '../components/UpdateProduct.vue';
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
    UpdateProduct
  },
  };
</script><style scoped>
h1 {
    margin: 4% 0 2% 0;
}
</style>