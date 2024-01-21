<script lang="ts">
    import { client, setJwt } from "$lib";
    import { type UserCreate } from "$lib/client";
    import PasswordValidator from "password-validator";
    export let full_name = "";
    export let email = "";
    export let password = "";
    export let password_confirmation = "";

    const schema = new PasswordValidator();
    schema
    .is().min(8)
    .has().uppercase()
    .has().lowercase()
    .has().digits();

     async function handleSubmit() {
        if (password_confirmation != password) {
            alert("Confirmation password and password don't match.");
            return;
        }

        if(!schema.validate(password_confirmation)) {
            alert("Password doesn't respect the requirements.");
            return;
        }

        let data: UserCreate = {
            email: email,
            password: password,
            full_name: full_name
        };
        let result = client.auth.registerRegisterAuthRegisterPost(data);
        result.then((data) => {
            document.location.href = "/login";
        }).catch((error) => {
            if (error.body.detail === "REGISTER_USER_ALREADY_EXISTS") {
                alert("This email already exists!");
            } else {
                alert(error.body.detail);
            }
        });
     }
</script>

<div class="flex flex-col justify-center items-center w-full min-h-screen">
  <h1 class="text-center text-2xl sm:text-3xl font-semibold my-5">Create Your Account</h1>
  <form on:submit|preventDefault={handleSubmit}>
      <div class="form-control my-2">
          <label class="input-group input-group-sm">
              <span>Full Name: </span>
              <input type="text" name="full_name" placeholder="Your full name" class="input input-bordered w-full max-w-xs" bind:value={full_name} required><br />
          </label>
      </div>
      <div class="form-control my-2">
          <label class="input-group input-group-sm">
              <span>Email: </span>
              <input type="email" name="email" placeholder="Your email address" class="input input-bordered w-full max-w-xs" bind:value={email} required><br />
          </label>
      </div>
      <div class="form-control my-2">
          <label class="input-group input-group-sm">
              <span>Password: </span>
              <input minlength="8" type="password" name="password" placeholder="Choose a password" class="input input-bordered w-full max-w-xs" bind:value={password} required><br />
          </label>
          <div class="mx-4">
            <h3>Password must contain the following:</h3>
            <div class="mx-6">
                <ul>
                    <li id="letter" >A <b>lowercase</b> letter</li>
                    <li id="capital">A <b>capital (uppercase)</b> letter</li>
                    <li id="number">A <b>number</b></li>
                    <li id="length">Minimum <b>8 characters</b></li>
                </ul>
            </div>
          </div>
      </div>
      <div class="form-control my-2">
        <label class="input-group input-group-sm">
            <span>Confirm password: </span>
            <input minlength="8" type="password" name="password-confirmation" placeholder="Confirm password" class="input input-bordered w-full max-w-xs" bind:value={password_confirmation} required><br />
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