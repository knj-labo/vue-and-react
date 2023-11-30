<template>
  <div>
    <h1>About</h1>
    <h2>Vue</h2>
    <vue-button msg="About Page"/>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/edit">Edit</router-link>
    </nav>
  </div>
</template>
<script>
import Button from '@/components/Button.vue'
export default {
  components: {
    VueButton: Button
  }
}
</script>