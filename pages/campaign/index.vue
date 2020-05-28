<template>
  <div class="campaign">
    <div class="main">
      <div class="mainheader">Campaign</div>
      <div>
        <video width="1000" height="1000" controls autoplay>
          <source
            :src="require('@/assets/videos/Campaign.mp4')"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.campaign {
  @apply h-screen;
}

.campaign .main {
  @apply flex flex-col justify-center items-center bg-black text-white h-full w-full p-5;
}

@screen lg {
  .campaign .main {
    @apply p-10;
  }
}

.campaign .main .mainheader {
  @apply font-mainheader text-15vw;
}

@screen lg {
  .campaign .main .mainheader {
    @apply text-10vw;
  }
}
.campaign .main .mainheader video:hover {
  @apply outline-none;
}
</style>
