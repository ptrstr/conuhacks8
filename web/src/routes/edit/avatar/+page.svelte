<script lang="ts">
    import { client, setJwt, getImagePath } from "$lib";
    import type { UserUpdate } from "$lib/client";
    export let image_id = -1;
    async function saveImageId() {
      (await client.users.usersCurrentUserUsersMeGet()).avatar = image_id;
      let data : UserUpdate = {
          avatar: image_id
      };
      await client.users.usersPatchCurrentUserUsersMePatch(data);
      document.location.href = "/editprofile";
    }
</script>

<div class="flex justify-center items-center w-full min-h-screen p-8">
    <h1 class="text-center text-2xl sm:text-3xl font-semibold my-5">Change your Avatar</h1> <br />
    <div class="grid grid-cols-4 gap-4">
        <div class="avatar">
            <div class="w-40 rounded-full">
              <button on:click={event => {image_id = 1; saveImageId();}}>
                <img src="/avatar/anonymous-avatar.png" />
              </button>
            </div>
          </div>
          <div class="avatar">
            <div class="w-40 rounded-full">
              <button on:click={event => {image_id = 2; saveImageId();}}>
                <img src="/avatar/art-avatar.jpg" />
              </button>
            </div>
          </div>
          <div class="avatar">
            <div class="w-40 rounded-full">
              <button on:click={event => {image_id = 3; saveImageId();}}>
                <img src="/avatar/dog-avatar.jpg" />
              </button>
            </div>
          </div>
          <div class="avatar">
            <div class="w-40 rounded-full">
              <button on:click={event => {image_id = 4; saveImageId();}}>
                <img src="/avatar/eagle-avatar.jpg" />
              </button>
            </div>
          </div>
          <div class="avatar">
            <div class="w-40 rounded-full">
              <button on:click={event => {image_id = 5; saveImageId();}}>
                <img src="/avatar/female-avatar.png" />
              </button>
            </div>
          </div>
          <div class="avatar">
            <div class="w-40 rounded-full">
              <button on:click={event => {image_id = 6; saveImageId();}}>
                <img src="/avatar/godess-avatar.png" />
              </button>
            </div>
          </div>
          <div class="avatar">
            <div class="w-40 rounded-full">
              <button on:click={event => {image_id = 7; saveImageId();}}>
                <img src="/avatar/pinguin-avatar.webp" />
              </button>
            </div>
          </div>
          <div class="avatar">
            <div class="w-40 rounded-full">
              <button on:click={event => {image_id = 8; saveImageId();}}>
                <img src="/avatar/planet-avatar.webp" />
              </button>
            </div>
          </div>
    </div>
</div>