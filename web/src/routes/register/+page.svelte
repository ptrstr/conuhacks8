<div class="flex flex-col justify-center items-center w-full min-h-screen">
  <h1 class="text-center text-2xl sm:text-3xl font-semibold my-5">Create Your Account</h1>
  <form action="" method="post">
      <div class="form-control">
          <label class="input-group input-group-sm">
              <span>Username: </span>
              <input type="text" name="username" placeholder="Choose a username" class="input input-bordered w-full max-w-xs" required><br />
          </label>
      </div>
      <div class="form-control">
          <label class="input-group input-group-sm">
              <span>Email: </span>
              <input type="email" name="email" placeholder="Your email address" class="input input-bordered w-full max-w-xs" required><br />
          </label>
      </div>
      <div class="form-control">
          <label class="input-group input-group-sm">
              <span>Password: </span>
              <input type="password" name="password" placeholder="Choose a password" class="input input-bordered w-full max-w-xs" required><br />
          </label>
      </div>
      <div class="flex flex-col md:flex-row my-4 gap-2 md:gap-4 justify-center items-center">
          <input type="submit" value="Register" class="btn btn-outline btn-primary btn-block max-w-[200px]" />
      </div>
  </form>
  <div class="text-center">
      <span>Already have an account? </span>
      <a class="link link-secondary" href="/login">Sign in here</a>
  </div>
</div>