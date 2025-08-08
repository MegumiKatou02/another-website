<template>
  <Header />
  <div class="container">
    <div class="container-info">
      <div class="image-wrapper">
        <img src="@/assets/img/avatar.jpg" alt="" class="img" />
      </div>
      <div class="about">
        <h1 class="name">Yukiookii</h1>
        <h2 class="description">Just your average software engineer</h2>
        <ul class="socials-list">
          <li v-for="social in socialsList" v-bind:key="social.link">
            <a :href="social.link"
              ><img :src="social.img" :alt="social.altName" width="20" height="20"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'

defineOptions({
  name: 'HomePage',
})

const socialsList = [
  {
    link: 'https://github.com/MegumiKatou02',
    img: '/github.svg',
    altName: 'Github Logo',
  },
  {
    link: 'https://www.npmjs.com/~yukiookii',
    img: '/npm.svg',
    altName: 'Npm Logo',
  },
  {
    link: 'https://discord.com/users/604949724788817920',
    img: '/discord.svg',
    altName: 'Discord Logo',
  },
  {
    link: 'https://linktr.ee/yukiooki_',
    img: '/linktree.svg',
    altName: 'Linktree Logo',
  },
  {
    link: 'https://open.spotify.com/user/31uoe4jzedryeongjz5ymntipfvq',
    img: '/spotify.svg',
    altName: 'Spotify Logo',
  },
  {
    link: 'https://soundcloud.com/tuy-t-721347328',
    img: '/soundcloud.svg',
    altName: 'Soundcloud Logo',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 52px);
  background-color: black;
  background: url('@/assets/img/background.jpg');
}

.container-info {
  width: 550px;
  height: 140px;
  background-size: cover;
  box-shadow: 0 0 4px black;
  background-color: var(--bg-primary);
  display: flex;
  padding: 20px;
  gap: 20px;
  border: var(--border) 1px solid;
  border-radius: var(--radius-sm);
}

.image-wrapper {
  width: 200px;
  height: 100%;
}

.img {
  width: 100%;
  height: 100%;
  border: var(--border) 1px solid;
  border-radius: var(--radius-sm);
}

.container-info .about {
  width: 100%;
  font-family: 'Roboto', sans-serif;
}

.about .name {
  color: white;
  font-weight: bold;
  font-size: 36px;
}

.about .description {
  color: rgba(255, 255, 255, 0.5);
  margin-top: 10px;
  font-size: 23px;
  font-weight: 300;
}

.about .socials-list {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.about .socials-list li {
  padding: 7px;
  background-color: var(--bg-secondary);
  border: var(--border) 1px solid;
  border-radius: var(--radius-sm);
}

.about .socials-list li a {
  color: white;
  filter: invert(1);
}
</style>
