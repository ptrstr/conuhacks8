<script lang="ts">
    import { client, getJwt } from "$lib";
    import { type Body_reset_reset_password_auth_reset_password_post, type UserCreate } from "$lib/client";
    import PasswordValidator from "password-validator";
    export let current_password = "";
    export let new_password = "";
    export let confim_password = "";

    const schema = new PasswordValidator();
    schema
    .is().min(8)
    .has().uppercase()
    .has().lowercase()
    .has().digits();

     async function handleSubmit() {
        if (confim_password != new_password) {
            alert("Confirmation password and password don't match.");
            return;
        }

        if(!schema.validate(new_password)) {
            alert("Password doesn't respect the requirements.");
            return;
        }

        let data : Body_reset_reset_password_auth_reset_password_post = {
            token: await getJwt(),
            password: current_password
        }


        let result = client.auth.resetResetPasswordAuthResetPasswordPost(data);
        result.then((data) => {
            alert("Changed password successfully.");
            document.location.href = "/login";
        }).catch((error) => {
            if (error.body.detail === "RESET_PASSWORD_BAD_TOKEN") {
                alert("Wrong current password!");
            } else {
                alert(error.body.detail);
            }
        });
     }
</script>

<div class="flex flex-col justify-center items-center w-full min-h-screen">
  <h1 class="text-center text-2xl sm:text-3xl font-semibold my-5">Change Your Password</h1>
  <form on:submit|preventDefault={handleSubmit}>
      <div class="form-control my-2">
          <label class="input-group input-group-sm">
              <span>Current Password: </span>
              <input minlength="8" type="password" name="password" placeholder="Your current password" class="input input-bordered w-full max-w-xs" bind:value={current_password} required><br />
          </label>
      </div>
      <div class="form-control my-2">
        <label class="input-group input-group-sm">
            <span>Password: </span>
            <input minlength="8" type="password" name="password" placeholder="Choose a new password" class="input input-bordered w-full max-w-xs" bind:value={new_password} required><br />
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
            <input minlength="8" type="password" name="password-confirmation" placeholder="Confirm your new password" class="input input-bordered w-full max-w-xs" bind:value={confim_password} required><br />
        </label>
      </div>
      <div class="flex flex-col md:flex-row my-4 gap-2 md:gap-4 justify-center items-center">
          <button type="submit" class="btn btn-outline btn-primary btn-block max-w-[200px]">Confirm</button>
      </div>
  </form>
</div>