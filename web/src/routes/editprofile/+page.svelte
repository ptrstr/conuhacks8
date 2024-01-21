<div class="flex justify-center items-center w-full min-h-screen p-8"> <!-- Added padding -->

    <!-- Left Section: Profile Picture -->
    <div class="flex flex-col items-center mr-8">
        <div class="relative w-28 h-28 rounded-full overflow-hidden cursor-pointer">
            <!-- Placeholder for the profile picture, can be an image -->
            <img src="./photorandom.png" alt="Profile Picture" class="w-full h-full object-cover" />
            <!-- Overlay for changing profile picture -->
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <!-- Wrapped "Change Picture" text with an anchor tag -->
                <a href="/change-picture" class="text-white">Change Picture</a>
            </div>
        </div>
    </div>

    <!-- Right Section: Edit Name, Email, and Buttons -->
    <div class="flex flex-col">
        <h1 class="text-2xl font-semibold mb-4">Edit Your Profile</h1>
        
        <!-- Edit Name -->
        <div class="form-control mb-4">
            <label class="input-group">
                <span>Name: </span>
                <input type="text" name="name" placeholder="Your name" class="input input-bordered w-full max-w-md" required>
            </label>
        </div>

        <!-- Edit Email -->
        <div class="form-control mb-4">
            <label class="input-group">
                <span>Email: </span>
                <input type="email" name="email" placeholder="Your email address" class="input input-bordered w-full max-w-md" required>
            </label>
        </div>

        <!-- Buttons for Skills, Interests, and Availabilities -->
        <div class="flex mb-4">
            <a href="/edit/skills" class="btn btn-outline btn-primary mr-2">Skills</a>
            <a href="/edit/interests" class="btn btn-outline btn-primary mr-2">Interests</a>
            <a href="/edit/availabilities" class="btn btn-outline btn-primary">Availabilities</a>
        </div>

        <!-- Save Button -->
        <button class="btn btn-primary">Save</button> <!-- Added Save Button -->

        <!-- Change Password Link -->
        <div class="text-center mt-auto">
            <a class="link link-secondary" href="/change-password">Change Password</a>
        </div>
    </div>
</div>
