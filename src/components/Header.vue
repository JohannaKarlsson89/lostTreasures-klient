 <template>
    


    <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">      
      <div class="container-fluid"></div>
      <a class="navbar-brand" href="/start">Lost treasures</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
       
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">         
            <li class="nav-item"><RouterLink class="nav-link" to="/start">Inventory listing</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/addProduct">Add products</RouterLink></li>
          </ul>
        </div>

    </nav>
  </header>



 </template>
<script>
import { RouterLink, RouterView } from "vue-router";
export default {
   
  components: {
    RouterLink,
  }
  };

  </script>
