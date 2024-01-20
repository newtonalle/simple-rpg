<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark outlined-light">
      <div class="container-fluid">
        <img src="../../public/favicon.png" />
        <router-link
          style="margin-left: 10px"
          class="navbar-brand"
          :to="{ name: 'game' }"
          >Simple RPG
          <h6 class="text-sm">Version 1.2.1</h6></router-link
        >

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav text-center">
            <router-link
              :class="['nav-link', $route.name === 'game' ? 'active' : '']"
              :to="{ name: 'game' }"
              >Game</router-link
            >
            <router-link
              :class="['nav-link', $route.name === 'inventory' ? 'active' : '']"
              :to="{ name: 'inventory' }"
              >Inventory</router-link
            >
            <router-link
              :class="[
                'nav-link',
                $route.name === 'progressionTracker' ? 'active' : '',
              ]"
              :to="{ name: 'progressionTracker' }"
              >Milestones/Collections</router-link
            >
            <router-link
              :class="['nav-link', $route.name === 'tutorial' ? 'active' : '']"
              :to="{ name: 'tutorial' }"
              >Tutorial</router-link
            >

            <router-link
              :class="['nav-link', $route.name === 'wiki' ? 'active' : '']"
              :to="{ name: 'wiki' }"
              >Wiki</router-link
            >

            <router-link
              :class="['nav-link', $route.name === 'updates' ? 'active' : '']"
              :to="{ name: 'updates' }"
              >Updates</router-link
            >

            <router-link
              :class="['nav-link', $route.name === 'credits' ? 'active' : '']"
              :to="{ name: 'credits' }"
              >Credits</router-link
            >

            <button
              class="btn btn-outline-danger"
              style="margin-left: 10px"
              type="reset"
              @click="resetState"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </nav>
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    resetState() {
      if (
        confirm(
          "This will erase ALL your progress, are you sure you want to continue?"
        )
      ) {
        this.$store.dispatch("resetState");
      }
    },
  },
};
</script>
