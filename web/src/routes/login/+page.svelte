<script lang="ts">
    import { client, setJwt } from "$lib";
    import type { Body_auth_jwt_login_auth_jwt_login_post } from "$lib/client";
    export let email = "";
    export let password = "";

    
     async function handleSubmit() {
        let data: Body_auth_jwt_login_auth_jwt_login_post = {
            username: email,
            password: password
        };

        let result = client.auth.authJwtLoginAuthJwtLoginPost(data);
        result.then((data) => {
            setJwt(data.access_token);
            document.location.href = "/browser";
        }).catch((error) => {
            if (error.body.detail === "LOGIN_BAD_CREDENTIALS") {
                alert("Login or/and Email is/are incorrect.");
            } else {
                alert(error.body.detail);
            }
        });

     }
</script>

<div class="flex flex-col justify-center items-center w-full h-screen">
    <h1 class="text-center text-2xl sm:text-3xl font-semibold my-5">Sign in Your Account</h1>
    <form action="/" id="loginInfo" on:submit|preventDefault={handleSubmit}>
        <div class="form-control">
            <label class="input-group input-group-sm">
                <span>Email: </span>
                <input type="text" name="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" bind:value={email} required><br />
            </label>
        </div>
        <div class="form-control">
            <label class="input-group input-group-sm">
                <span>Password: </span><br />
                <input type="password" name="password" placeholder="Your password" class="input input-bordered w-full max-w-xs" bind:value={password} required><br />
            </label>
        </div>
        <div class="flex flex-col md:flex-row my-4 gap-2 md:gap-4 justify-center items-center">
            <button type="submit" class="btn btn-outline btn-primary btn-block max-w-[200px]">Sign In</button>
        </div>
    </form>
    <div class="text-center">
        <span class="">New to KnowTrade ?</span>
        <a class="link link-secondary" href="/register">Join now</a>
    </div>
</div>