<template>
  <div class="home">
    <HelloWorld/>
    <Sidebar/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Sidebar,
  }
}
</script>
