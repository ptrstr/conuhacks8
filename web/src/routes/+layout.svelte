<!-- Navbar.svelte -->
<script>
    import '../app.css';
 </script>

<div class="navbar fixed bg-gray-800 text-neutral-content bg-base-100">
    <div class="flex-1 text-4xl">
        <img class="mr-3 w-24" src="./Reversed.png" />
        <div class="font-mono">KnownTrade</div>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1 text-3xl">
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/about">About</a></li>
        </ul>
    </div>
</div>

<slot />
