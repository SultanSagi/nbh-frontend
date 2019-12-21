<template>
  <main class="py-4">
    <div>
      <Header />
      <nuxt/>
    </div>
  </main>
</template>

<script>
import Header from './partials/Header'
export default {
  components: {
    Header
  }
}
</script>

