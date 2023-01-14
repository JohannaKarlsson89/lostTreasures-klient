<template>
  
   
    <div class="form-box">
    <form @submit.prevent="addProduct()">
   
      <div class="form-group">
        <fieldset>
          
          <legend>Prouct to add:</legend>
          
          <label for="productName" class="form-label">Name: </label>
          <input v-model="productName" type="text" class="form-control" />
       
          <label for="productDescription" class="form-label">Description: </label>
          <input v-model="productDescription" type="text" class="form-control"/>
        
          <label for="productPrice" class="form-label">Price: </label>
          <input v-model="productPrice" type="text" class="form-control" />
          
          <label for="productsInStock" class="form-label">Products in stock: </label>
          <input v-model="productsInStock" type="text" class="form-control" />
          
          <label for="articleNumber" class="form-label"> Article Number: </label>
          <input v-model="articleNumber" type="text"  class="form-control"/>
          
          <p>{{ errormsg }}</p>
          <p>{{ sucessmsg }}</p>
          <input type="submit" class="btn btn-primary" value="Add product" />
          
        </fieldset>
      </div>
    </form>
  </div>
</template>


<script>
import Header from '../components/Header.vue';

export default {
    data() {
        return {
            productName:"",
            productDescription: "",
            productPrice:"",
            productsInStock:"",
            articleNumber:"",
            errormsg: "",
      sucessmsg: ""
        };
    },
  components: { 
    Header
  },
  emits: ["productAdded"],
  methods: {
      //add an item
    async addProduct() {

      //check inputs
      if (
        this.productName &&
        this.productDescription &&
        this.productPrice &&
        this.productsInStock &&
        this.articleNumber != ""
      ) {
        //save inputs in a varible
        let itemBody = {
            productName: this.productName,
            productDescription: this.productDescription,
            productPrice: this.productPrice,
            productsInStock: this.productsInStock,
            articleNumber: this.articleNumber
        };
        const resp = await fetch("http://localhost:3000/products", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(itemBody),
        });
        const data = await resp.json();
        this.productName = "";
        this.productDescription = "";
        this.productPrice = "";
        this.productsInStock = "";
        this.articleNumber = "";
        //emit to parent component
       // this.$emit("productAdded");
        this.sucessmsg = "Product added";
        alert("Product added!");
        this.errormsg = "";
      } else {
        this.errormsg = "All fields must be filled out";
      }
    },
 },
  mounted() {   
  },
  };
</script>
<style scoped>
.form-box{
  width: 70%;
  margin: auto auto;
}
h1 {
    margin: 4% 0 2% 0;
}
</style>