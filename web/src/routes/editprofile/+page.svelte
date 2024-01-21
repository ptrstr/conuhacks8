<script lang="ts">
    import { client, setJwt, getImagePath } from "$lib";
    import { onMount } from "svelte";
    export let image_path = "";
    export let email = "";
    export let full_name = "";

    async function loadImagePath() {
        let id = (await client.users.usersCurrentUserUsersMeGet()).avatar;
        image_path = getImagePath(id);
    }

    async function loadNameEmail() {
        let email = (await client.users.usersCurrentUserUsersMeGet()).email;
        let full_name = (await client.users.usersCurrentUserUsersMeGet()).full_name;
    }

    onMount(() => {
        loadImagePath();
    });
</script>

<div class="flex justify-center items-center w-full min-h-screen p-8">
    <div class="flex flex-col items-center mr-8">
        <div
            class="relative w-28 h-28 rounded-full overflow-hidden cursor-pointer"
        >
            <a href="/edit/avatar">
                <img
                    src={image_path}
                    alt="Profile Picture"
                    class="w-full h-full object-cover"
                    title="Change Avatar"
                />
            </a>
        </div>
    </div>

    <div class="flex flex-col">
        <h1 class="text-2xl font-semibold mb-4">Edit Your Profile</h1>

        <div class="form-control mb-4">
            <span>Name : {full_name}</span>
        </div>

        <div class="form-control mb-4">
            <span>Email : {email}</span>
        </div>

        <div class="flex mb-2"></div>
        <div class="grid grid-cols-2 gap-5">
            <a href="/edit/skills" class="btn btn-outline btn-primary">Skills</a
            >
            <a href="/edit/interests" class="btn btn-outline btn-primary"
                >Interests</a
            >
            <a href="/edit/availabilities" class="btn btn-outline btn-primary"
                >Availabilities</a
            >
            <a href="/edit/password" class="btn btn-outline btn-primary"
                >Password</a
            >
        </div>
    </div>
</div>
