<!-- Navbar.svelte -->
<script>
    import { getJwt, setJwt, getImagePath, client } from '$lib';
    import { onMount } from 'svelte';
    import '../app.css';
    export const ssr = false;
    export let image_path = "";

    async function loadImagePath() {
        let id = (await client.users.usersCurrentUserUsersMeGet()).avatar;
        image_path = getImagePath(id);
    }

    onMount(() => {
        loadImagePath();
    })

    async function logout() {
        setJwt("");
        document.location.href = "/login";
    }
 </script>

<div class="navbar fixed bg-gray-800 text-neutral-content bg-base-100">
    <div class="flex-1 text-4xl">
        <img class="mr-3 w-24" src="./Reversed.png" />
        <div class="font-mono">KnowTrade</div>
    </div>
    
    {#await getJwt()}
    {:then jwt}
        {#if jwt === ""}
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1 text-3xl">
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/about">About</a></li>
                </ul>
            </div>
        {:else}
            <div class="flex-none gap-2 relative">
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={image_path} />
                        </div>
                    </div>
                    <ul tabindex="-1" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 left-0 translate-x-[-100%]">
                        <!-- Modification des propriétés CSS -->
                        <li>
                            <a href="/editprofile" class="justify-between">
                                Profile
                            </a>
                        </li>
                        <li><a href="/settings">Settings</a></li>
                        <li ><button on:click|preventDefault={logout}>Logout</button></li>
                    </ul>
                </div>
            </div>
        {/if} 
    {:catch error}
	    <p style="color: red">{error.message}</p>
    {/await}
</div>

<slot />


