<script>
import Button from 'primevue/button'
import Counter from '@/components/Counter.vue'
import Navbar from '@/components/Navbar.vue'
import RegistrationForm from '@/components/Registration.vue'
import AppLogo from '@/components/AppLogo.vue'
import { useElementVisibility } from '@vueuse/core'

export default {
  name: 'App',
  components: {
    AppLogo,
    Button, Counter, Navbar, 
    RegistrationForm, 
  },
  data(){
    return {
      NavbarIsVisible: false
    }
  },
  mounted() {
    this.NavbarIsVisible = useElementVisibility(this.$refs.navbar)
  },
}
</script>

<template>
  <main class="w-full">
    
    <div class="h-24 w-full flex justify-center items-center bg-white fixed z-50 -mt-24 transition-all duration-300 delay-100"
      :class="{'mt-0': !NavbarIsVisible}">
      <div class="w-4/5 flex justify-between items-center">
        <AppLogo />

        <Navbar />
      </div>
    </div>

    <div class="wrapper section" id="home">
      <div class="w-4/5 h-full flex flex-col gap-24">

        <div ref="navbar" class="h-24 w-full flex justify-between items-center">
          <AppLogo />

          <Navbar />
        </div>

        <div class="flex gap-5 flex-grow text-surface-700 justify-between">
          <div class="pt-5">
            <p class="text-3xl font-extralight">Leader conference</p>
            <p class="text-6xl font-bold uppercase mb-3">
              Conference<br /> 2019
            </p>
            <p class="text-2xl font-extralight my-10">
              <i class="fa fa-calendar-alt"></i> 
              20-23 November 2019 - Los Angeles CA
            </p>
            
            <Counter />
          </div>

          <div>
            <RegistrationForm />
          </div>

        </div>

      </div>
    </div>

    <div class="section" id="location"></div>

    <div class="section h-52" id="aboutus"></div>

    <div class="section h-96" id="schedules"></div>

    <div class="section h-80" id="speakers"></div>

    <div class="secton h-52" id="ticketPrincing"></div>
  </main>
</template>


<style scoped>
.wrapper{
  height: 850px;
  background-image: url('/src/assets/images/bg_1.webp');
  background-size: cover;
  background-position: center;
}

.section {
  @apply flex justify-center
}
</style>