<template>
  <div class="wrapper">
    <p>Pets Palette</p>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/feed">Feed</RouterLink>
      <RouterLink to="/upload">Upload</RouterLink>
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
