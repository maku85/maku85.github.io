<script setup>
// state
const showDrawer = useState('navbar.showDrawer', () => false);

// methods
const closeSidebar = () => (showDrawer.value = !showDrawer.value);
</script>

<template>
  <v-navigation-drawer v-model="showDrawer" temporary location="bottom" class="d-flex">
    <div class="pt-2 pr-2 text-right close-menu" @click="closeSidebar()">
      <v-icon>mdi-close</v-icon>
    </div>

    <v-container class="container">
      <div class="menu">
        <ul>
          <li v-for="item in menuItems" :key="item.title" :to="item.path" class="nav-item">
            <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div class="line-block"><span></span></div>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: 'About', path: '/about' },
        { title: 'Projects', path: '/projects' },
        { title: 'Notes', path: '/notes' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .menu {
    padding: 20px 40px 0px 50px;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: left;

      li a {
        margin-bottom: 20px;
        position: relative;
        display: inline-block;
        vertical-align: top;
        font-size: 22px;
        line-height: 1;
        font-family: 'Jost';
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #000;
        font-weight: 700;
      }
    }
  }

  .line-block {
    left: 30px;
    top: 0;
    opacity: 1;
    position: absolute;
    bottom: -15px;
    width: 2px;
    background: #000;
    z-index: 3;
    pointer-events: none;
    transition: all 0.5s cubic-bezier(0.3, 0, 0.3, 1);
    -webkit-transition: all 0.5s cubic-bezier(0.3, 0, 0.3, 1);

    &:before {
      content: '';
      position: absolute;
      left: -15px;
      top: -15px;
      width: 30px;
      height: 30px;
      background: #fff;
      border: 2px solid #000;
      border-radius: 30px;
      box-shadow: 5px 5px rgb(0 0 0/20%);
      z-index: 1;
    }

    &:after {
      content: '';
      position: absolute;
      left: -15px;
      bottom: -15px;
      width: 30px;
      height: 30px;
      background: #fff;
      border: 2px solid #000;
      border-radius: 30px;
      box-shadow: 5px 5px rgb(0 0 0/20%);
      z-index: 1;
    }

    span {
      position: absolute;
      top: -137px;
      bottom: auto;
      left: -116px;
      width: 200px;
      height: 200px;
      background-image: url(//luique.bslthemes.com/wp-content/themes/luique/assets/images/pat-1.png);
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>
