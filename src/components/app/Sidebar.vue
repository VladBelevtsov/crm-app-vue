<template>
  <aside :class="{fullMenu: value}">
    <nav class="nav">
      <router-link tag="li" active-class="active" exact to="/">
        <a href="#">
          <Icons name="dashboard" class="icon"/>
          <span>Dashboard</span>
        </a>
      </router-link>
      <router-link tag="li" active-class="active" exact to="/people">
        <a href="#">
          <Icons name="people" class="icon"/>
          <span>People</span>
        </a>
      </router-link>
      <router-link tag="li" active-class="active" exact to="/finances"> 
        <a href="#">
          <Icons name="finances" class="icon"/>
          <span>Finances</span>
        </a>
      </router-link>
      <router-link tag="li" active-class="active" exact to="/statistics">
        <a href="#">
          <Icons name="chart" class="icon"/>
          <span>Statistics</span>
        </a>
      </router-link>
      <router-link tag="li" active-class="active" exact to="/calendar">
        <a href="#">
          <Icons name="calendar" class="icon"/>
          <span>Calendar</span>
        </a>
      </router-link>
      <li @click="$emit('click')">
        <Icons name="full" class="icon"/>
      </li>
    </nav>
  </aside>
</template>

<script>
import Icons from '@/components/Icons'
export default {
  props: ['value'],
  components: {
    Icons
  },
  methods: {
    fullMenu() {
      document.querySelector('aside').classList.toggle('fullMenu')
    }
  }
}
</script>

<style lang="scss" scoped>
aside {
  position: fixed;
  width: 60px;
  height: 100vh;
  padding-top: 60px;
  background-color: #1F2227;
  display: block;
  overflow: hidden;
  transition: width .2s ease;

  .nav {
    margin-top: 40px;
    padding: 0 12.5px;

    li {
      border-radius: 3px;
      margin-bottom: 20px;
      overflow: hidden;

      a {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        position: relative;

        span {
          color: #fff;
          padding-left: 12px;
          font-size: 14px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 30px;
        }
      }

      &:hover {
        background-color: #2A2D33;
      }

      &:last-child {
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 0px;
        margin-bottom: 40px;
        cursor: pointer;
      }

      .icon {
        width: 23px;
        height: 23px;
      }
    }

    li.active {
      background-color: #2A2D33;
    }
  }
}

.fullMenu {
  width: 240px;

  .nav {
    width: 100%;

    li {
      width: 100%;

      a {
        width: 100%;
        justify-content: start;
        padding-left: 6px;
      }
    }
  }
}
</style>