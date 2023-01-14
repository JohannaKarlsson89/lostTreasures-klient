<template>
 <Header />
 <div class="container-fluid">
 
     <!--Component for form when new item is added the list of products is reloaded -->
 <!--<AddProduct @productAdded="getItems()" /> -->
    <h1 class="text-center">Inventory</h1>
    <div class="table-responsive">
    <table class="table table-bordered table-hover ">
        <thead>
    <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>In stock</th>
        <th>Article number</th>
    </tr>
    </thead>
    
  <InventoryList
  @deleteItem="deleteItem(item._id)"
    v-for="item in productsArr"
    :item="item"
    :key="item.id"
  />

  </table>
  </div></div>
</template>


<script>
import Header from '../components/Header.vue';
import InventoryList from "../components/InventoryList.vue";
import AddProduct from "../components/AddProduct.vue";
export default {
    data() {
        return {
            productsArr:[]
        };
    },
  components: { 
    Header,
    InventoryList,
    AddProduct
  },
  methods: {
 //Using AJAX to Fetch products from database
async getProducts() {
   //fetch
  const resp = await fetch("http://localhost:3000/products", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json"
    },
  });
  const data = await resp.json();
  this.productsArr = data;
  
},
 

  async deleteItem(id) {
      //user has to confirm delete
      if(confirm("Do you want to delete this product?")) {     
 //delete item with id och DELETE call to api
      const resp = await fetch("http://localhost:3000/products/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
      });
      const data = await resp.json();
      alert("Product deleted!");
      this.getProducts();
    }else {
      console.log("product is not deleted");
    }
    },
},
  mounted() {
    this.getProducts();
  },
  };
</script>

<style scoped>
h1 {
    margin: 4% 0 2% 0;
}
</style>