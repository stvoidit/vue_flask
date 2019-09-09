<template>
  <div>
    <div class="container mt-1">
      <nav class="nav-extended">
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <router-link :to="{name: 'home'}" class>Home</router-link>
            </li>
            <li class="tab">
              <router-link :to="{name: 'facts'}" class>Facts</router-link>
            </li>
            <li class="tab">
              <router-link :to="{name: 'cats'}" class>Cats</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!-- <div id="app">
    </div>-->
  </div>
</template>

<script>
require("@/assests/materialize.min.css");
require("@/assests/materialize.min");
export default {
  name: "nav"
};
</script>
