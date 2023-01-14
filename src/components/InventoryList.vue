<template>
 
<tbody class=" " >
<tr>
        <td>{{ item.productName }} </td>
        <td>{{ item.productDescription }} </td>
        <td>{{ item.productPrice }} </td>
        <td>{{ item.productsInStock }} </td>
        <td>{{ item.articleNumber }} </td>
        <td>
          <!--   Send the id of the item with the link so that I can use the id to fetch a specific item -->
      <router-link :to="{ name: 'updateProduct', params: { id: item._id } }">
        <p class="btn btn-info">Update</p>
      </router-link></td>
        <td><button class="btn btn-danger" @click="$emit('deleteItem')">Delete</button></td>
</tr>
</tbody>
</template>

<script>
export default {
  data() {

  },
  props: {
    //Obeject of every item in array from
    item: Object,
  }
}

</script>

