<template>
  <div class="home">
    <div class="user-list">
      <router-link v-for="user in users" :to="{ name: 'UserProfile', params: { userID: user.id } }" :key="user.id">
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { users } from '@/assets/users';

export default {
  name: 'Home',
  setup() {
    return {
      users
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 50px 5%;

  .user-list {
    display: flex;
    flex-direction: column;
  }
}
</style>