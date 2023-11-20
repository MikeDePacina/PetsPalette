<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/feed">Feed</RouterLink>
    </nav>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
}
</style>
