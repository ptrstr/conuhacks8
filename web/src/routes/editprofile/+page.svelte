<div class="flex justify-center items-center w-full min-h-screen p-8">

    <div class="flex flex-col items-center mr-8">
        <div class="relative w-28 h-28 rounded-full overflow-hidden cursor-pointer">
            <a href="/avatar">
                <img src="./photorandom.png" alt="Profile Picture" class="w-full h-full object-cover" title="Change Avatar"/>
            </a>
        </div>
    </div>

    <div class="flex flex-col">
        <h1 class="text-2xl font-semibold mb-4">Edit Your Profile</h1>
        
        <div class="form-control mb-4">
            <label class="input-group">
                <span>Name: </span>
                <input type="text" name="name" placeholder="Your name" class="input input-bordered w-full max-w-md" required>
            </label>
        </div>

        <div class="form-control mb-4">
            <label class="input-group">
                <span>Email: </span>
                <input type="email" name="email" placeholder="Your email address" class="input input-bordered w-full max-w-md" required>
            </label>
        </div>

        <div class="flex mb-2">
            <a href="/edit/skills" class="btn btn-outline btn-primary mr-2">Skills</a>
            <a href="/edit/interests" class="btn btn-outline btn-primary mr-2">Interests</a>
            <a href="/edit/availabilities" class="btn btn-outline btn-primary">Availabilities</a>
        </div>

        <button class="btn btn-outline btn-primary my-1">Change Password</button>

        <button class="btn btn-primary my-2">Save</button>
    </div>
</div>
