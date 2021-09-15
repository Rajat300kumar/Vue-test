<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav style="justify-content: space-between;">
      <b-navbar-nav>
          <h4>
        <b-nav-item href="/" active>DashBoard</b-nav-item></h4>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown left>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em><b-icon icon="bell-fill" class="rounded-circle bg-danger p-2" font-scale="2" variant="light" ></b-icon></em>
          </template>
          <!-- <b-dropdown-item href="#">Profile</b-dropdown-item> -->
          <b-dropdown-item @click="$router.push('/')">Logout</b-dropdown-item>
          <p></p>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>