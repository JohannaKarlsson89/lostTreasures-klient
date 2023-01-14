<template>     <div class="form-box">
    <form @submit.prevent="updateProduct(id)">
      <div class="form-group"></div>
        <fieldset>
          <legend>Update product:</legend>
          <label for="productName" class="form-label">Name: </label>
          <input v-model="OneProduct.productName" type="text" class="form-control" />
        
          <label for="productDescription" class="form-label">Description: </label>
          <input v-model="OneProduct.productDescription" type="text"  class="form-control"/>
         
          <label for="productPrice" class="form-label">Price: </label>
          <input v-model="OneProduct.productPrice" type="text" class="form-control"/>
         
          <label for="productsInStock" class="form-label">Products in stock: </label>
          <input v-model="OneProduct.productsInStock" type="text" class="form-control"/>
         
          <label for="articleNumber" class="form-label">Article Number: </label>
          <input v-model="OneProduct.articleNumber" type="text" class="form-control"/>
          
          <p>{{ errormsg }}</p>
          <p>{{ sucessmsg }}</p>
          <input type="submit" class="btn btn-primary" value="Add product" />
        </fieldset>
       
    </form>
    </div>
</template>


<script>
import Header from '../components/Header.vue';

export default {
    data() {
        return {
            //Save the id from the url
            id: this.$route.params.id,
            OneProduct: [],
                    
            errormsg: "",
            sucessmsg: ""
        };
    },
  components: { 
    Header
  },
 // emits: ["productAdded"],
  methods: {

 //GET the specific item
 async getOneProduct(id) {
     
      const resp = await fetch("http://localhost:3000/products/" + id, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
         
        },
      });
      const data = await resp.json();
      this.OneProduct = data;
      console.log(data)
    },

      //Update
    async updateProduct(id) {

      //check inputs
      if (
        this.OneProduct.productName &&
        this.OneProduct.productDescription &&
        this.OneProduct.productPrice &&
        this.OneProduct.productsInStock &&
        this.OneProduct.articleNumber != ""
      ) {
        //save inputs in a varible
        let itemBody = {
            productName: this.OneProduct.productName,
            productDescription: this.OneProduct.productDescription,
            productPrice: this.OneProduct.productPrice,
            productsInStock: this.OneProduct.productsInStock,
            articleNumber: this.OneProduct.articleNumber
        };
        const resp = await fetch("http://localhost:3000/products/" + id, {
          method: "PUT",
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
       
        this.sucessmsg = "Product updated";
        alert("Product updated!");
        this.errormsg = "";
        this.$router.push("/start");
      } else {
        this.errormsg = "All fields must be filled out";
      }
    },
 


},
  mounted() {
    this.getOneProduct(this.$route.params.id);

   
  },
  };
</script>
<style scoped>
.form-box{
  width: 70%;
  margin: auto auto;
}

</style>