<template>
  <div class="topbar-user">
    <div @click="dropdown = !dropdown" class="topbar-user_avatar">
      <span class="topbar-user_avatar-initials">{{ abbreviatedName }}</span>
    </div>
    <div v-if="dropdown" class="topbar-user_dropdown">
      <div class="row">
        <div class="topbar-user_avatar">
          <span class="topbar-user_avatar-initials">{{ abbreviatedName }}</span>
        </div>
        <div class="topbar-user_fullname">
          {{ fullName }}
        </div>
      </div>
      <div class="topbar-user_dropdown-links row">
        <router-link class="topbar-user_dropdown-link" to="/profile"
          ><i class="bi bi-person"></i> Profile</router-link
        >
        <router-link class="topbar-user_dropdown-link" to="/" @click="logout"
          ><i class="bi bi-box-arrow-right"></i> Logout</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'TopbarUser',
  data() {
    return {
      dropdown: false,
    };
  },
  methods: {
    ...mapActions(['logout', 'fetchUser']),
  },
  computed: {
    closeDropdown() {
      dropdown = false;
    },
    abbreviatedName() {
      const { currentUser } = this;
      return currentUser.firstName
        ? `${currentUser.firstName[0]}${currentUser.lastName[0]}`
        : '';
    },
    fullName() {
      const { currentUser } = this;
      return currentUser
        ? `${currentUser.firstName} ${currentUser.lastName}`
        : '';
    },
    ...mapGetters(['currentUser']),
  },
  mounted() {
    let self = this;
    window.addEventListener('click', (e) => {
      if (!self.$el.contains(e.target)) {
        self.dropdown = false;
      }
    });
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style lang="scss">
@import '../../assets/SCSS/variables.scss';

.topbar-user {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 5px;

  .topbar-user_avatar {
    height: 40px;
    width: 40px;
    background-color: $base-dark;
    border-radius: 10px;
    display: flex;
    margin: auto 0;
    cursor: pointer;
    user-select: none;

    .topbar-user_avatar-initials {
      height: fit-content;
      margin: auto;
      color: #fff;
    }
  }

  .topbar-user_dropdown {
    background-color: #fff;
    width: 200px;
    position: absolute;
    right: 0;
    box-shadow: $box-shadow;
    border: $border;
    border-radius: 10px;
    padding: 5px;
    top: 58px;

    &:before {
      content: '';
      background-color: #fff;
      border-left: $border;
      border-top: $border;
      position: absolute;
      height: 10px;
      width: 10px;
      top: -6px;
      right: 13px;
      transform: rotate(45deg);
    }

    .topbar-user_avatar {
      margin: 0 15px 0 0;
    }

    .topbar-user_fullname {
      margin: auto auto auto 0;
    }

    .row {
      padding: 5px;

      &:not(:last-child) {
        border-bottom: $border;
      }
    }

    .topbar-user_dropdown-links {
      display: flex;
      flex-direction: column;

      .topbar-user_dropdown-link {
        padding: 5px;
        border-radius: 5px;
        color: $base-dark;

        &:hover {
          background-color: $light-grey;
        }
      }
    }
  }
}
</style>
