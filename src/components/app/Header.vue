<template>
  <header>
    <div class="logo">
      <router-link tag="a" to="/" href="#">
        <img src="@/assets/img/logo.png" alt="CRM">
      </router-link>
    </div>
    <div class="rightSide">
      <div class="currentDate">
        {{ date | date('date') }}
      </div>
      <div class="messages">
        <button>
          <Icons name="messages" class="icon"></Icons>
        </button>
      </div>
      <div class="alert true">
        <button>
          <Icons name="alert" class="icon"></Icons>
        </button>
        <span>3</span>
      </div>
      <div class="user" @click="userMenu()">
        <div class="user-img">
          <img src="@/assets/img/logo.jpeg" alt="user name">
        </div>
        <div class="user-name">
          Vlad. B
        </div>
        <div class="user-arrow">
          <Icons name="arrowDown" class="icon"></Icons>
        </div>
        <div class="user-dropDown">
          <router-link tag="li" to="/profile" href="#">
            <a href="#">Profile</a>
          </router-link>
          <li tag="li">
            <a href="#" @click.prevent="logout">Logout</a>
          </li>
        </div>
      </div>
    </div>
    <div class="overflow"></div>
  </header>
</template>

<script>
import Icons from '@/components/Icons'
export default {
  data: () => ({
    date: new Date(),
    interval: null
  }),
  components: {
    Icons
  },
  methods: {
    userMenu() {
      const btn = document.querySelector('.user')
      const drop = document.querySelector('.user-dropDown')
      const overflow = document.querySelector('.overflow')
      btn.classList.toggle('full')
      drop.classList.toggle('full')
      overflow.classList.toggle('full')

      overflow.addEventListener('click', function() {
        btn.classList.remove('full')
        drop.classList.remove('full')
        overflow.classList.remove('full')
      })
    },
    logout() {
      console.log('Logout');
      this.$router.push('/login?message=logout')
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: #1F2227;
  padding: 8px 15px 7px 13px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 1;

  .logo {
    flex: 1;

    a {
      width: 35px;
      display: block;

      img {
        width: 35px;
        height: 35px;
        display: block;
      }
    }
  }

  .rightSide {
    display: flex;
    align-items: center;

    .currentDate {
      color: #fff;
      font-size: 14px;
    }

    .messages {
      margin-left: 10px;
    }

    .messages, .alert{
      padding: 8px 10px;
      border-radius: 4px;
      &:hover {
        background-color: #2A2D33;
      }

      button {
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;

        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }

    .alert span {
      display: none;
    }

    .alert.true {
      position: relative;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 14px;
        height: 14px;
        position: absolute;
        background-color: #EB5757;
        border-radius: 50px;
        top: 4px;
        right: 6px;
        font-size: 11px;
        color: #fff;
      }
    }

    .user {
      margin-left: 5px;
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 5px;
      border-radius: 4px;
      position: relative;
      z-index: 1;

      &:hover {
        background-color: #2A2D33;
      }

      &.full {
        background-color: #2A2D33;
      }


      &-img {
        img {
          width: 35px;
          height: 35px;
          object-fit: cover;
          display: block;
          border-radius: 50px;
        }
      }

      &-name {
        margin: 0 10px;
        color: #fff;
        font-size: 14px;
      }

      &-dropDown {
        width: 200px;
        background-color: #1F2227;
        position: absolute;
        top: calc(100% + 7px);
        right: 0;
        border-radius: 0px 0px 3px 3px;
        padding: 10px;

        visibility: hidden;
        opacity: 0;

        &.full {
          visibility: visible;
          opacity: 1;
        }

        li {
          margin-bottom: 10px;

          a {
            width: 100%;
            display: block;
            padding: 10px;
            border-radius: 3px;
            text-decoration: none;
            color: #fff;

            &:hover {
              background-color: #2a2d33;
            }
          }
        }
      }
    }
  }
  .overflow {
    width: 100%;
    height: 100%;
    position: fixed;
    display: none;
    top: 0px;

    &.full {
      display: block;
    }
  }
}

@media screen and (max-width: 460px) {
  .user-name, .user-arrow {
    display: none;
  }
}
</style>