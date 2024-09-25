<script setup>
const menuItems = [
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Notes", path: "/notes" },
];

// state
const showDrawer = useState("navbar.showDrawer", () => false);

// methods
const closeSidebar = () => {
  showDrawer.value = !showDrawer.value;
};
</script>

<template>
  <v-navigation-drawer
    v-model="showDrawer"
    temporary
    location="bottom"
    class="sidebar"
    color="white"
  >
    <div class="sidebar__close-menu" @click="closeSidebar()">
      <v-icon icon="mdi-close" />
    </div>

    <v-container class="sidebar__container">
      <div class="sidebar__menu">
        <ul class="sidebar__list">
          <li v-for="item in menuItems" :key="item.title" :to="item.path">
            <NuxtLink class="sidebar__item" :to="item.path">{{
              item.title
            }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="line-block"><span></span></div>
    </v-container>
  </v-navigation-drawer>
</template>
