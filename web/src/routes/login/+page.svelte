<div class="flex flex-col justify-center items-center w-full  min-h-screen">
    <h1 class="text-center text-2xl sm:text-3xl font-semibold my-5">Sign in Your Account</h1>
    <form action="">
        <div class="form-control">
            <label class="input-group input-group-sm">
                <span>Username: </span>
                <input type="text" name="username" placeholder="Your username" class="input input-bordered w-full max-w-xs"><br />
            </label>
        </div>
        <div class="form-control">
            <label class="input-group input-group-sm">
                <span>Password: </span>
                <input type="password" name="password" placeholder="Your password" class="input input-bordered w-full max-w-xs"><br />
            </label>
        </div>
        <div>
            <a class="link link-secondary" href="/forgot">Forgot your password ?</a>
        </div>
        <div class="flex flex-col md:flex-row my-4 gap-2 md:gap-4 justify-center items-center">
            <input type="submit" value="Sign In" class="btn btn-outline btn-primary btn-block max-w-[200px]" />
        </div>
    </form>
</div>
