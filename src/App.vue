<style lang="scss">
@import '@/assets/scss/main.scss';
</style>

<template>
   <div class="d-flex flex-column vh-100 position-relative">
      <div class="navbar navbar-dark bg-primary justify-content-center">
         <button class="btn nav-link text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#menu">
            <i class="fas fa-bars"></i>
         </button>
         <router-link to="/" class="nav-link">
            <i class="fas fa-home"></i>
         </router-link>
         <router-link to="/characters" class="nav-link">
            <i class="fas fa-id-card"></i>
         </router-link>
      </div>
      <div class="flex-grow-1 pt-2 text-center">
         <router-view />
      </div>
   </div>

   <div class="offcanvas offcanvas-start bg-primary" id="menu">
      <div class="offcanvas-header p-1 border-bottom">
         <div class="my-0 mx-4 p-1 text-white h2">Основные правила</div>
         <button type="button" class="btn" data-bs-dismiss="offcanvas">
            <i class="fas fa-2x fa-times text-white"></i>
         </button>
      </div>
      <div class="offcanvas-body">
         <router-link to="/races" class="nav-link" data-bs-dismiss="offcanvas">Расы</router-link>
         <router-link to="/classes" class="nav-link" data-bs-dismiss="offcanvas">Классы</router-link>
         <router-link to="/abilities" class="nav-link" data-bs-dismiss="offcanvas">Атрибуты</router-link>
         <router-link to="/inventory" class="nav-link" data-bs-dismiss="offcanvas">Снаряжение</router-link>
         <router-link to="/magic" class="nav-link" data-bs-dismiss="offcanvas">Магия</router-link>
         <router-link to="/alchemy" class="nav-link" data-bs-dismiss="offcanvas">Алхимия</router-link>
      </div>
   </div>
</template>
