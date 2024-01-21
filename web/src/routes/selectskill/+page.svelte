<div class="flex flex-col justify-center items-center w-full min-h-screen">
    <h1 class="text-2xl font-semibold mb-6">Select Your Skills</h1>
    <p class="text-2xl font-semibold mb-6">Please choose at least 3</p>
    <!-- Search Bar -->
    <div class="form-control mb-4">
        <input
            type="text"
            id="skillSearch"
            placeholder="Search skills"
            class="input input-bordered w-full max-w-md"
        />
    </div>

    <!-- Skills List Container -->
    <div
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-2xl overflow-y-auto mb-4"
        id="skillsContainer"
        style="display:flex; flex-flow:wrap; flex-wrap:wrap"
    >
        <!-- Data will be dynamically populated here -->
    </div>

    <!-- Continue Button -->
    <button
        id="continueBtn"
        class="btn btn-outline btn-primary"
        disabled>Continue</button
    >
    <style>
        #skillsContainer {
            max-height: 20rem; /* Adjust the maximum height as needed */
            overflow-y: auto;
        }

        .checkbox-container {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }

        .checkbox-container input {
            margin-right: 0.5rem;
        /*    background-color: orange; /* Set the background color to orange */
        }
    </style>
    

    <script lang="ts">
        // Function to fetch data from the specified JSON file
        function fetchSkillData(jsonPath) {
            fetch(jsonPath)
                .then((response) => response.json())
                .then((data) => {
                    const skillsContainer = document.getElementById("skillsContainer");
                    const skillSearchInput = document.getElementById("skillSearch");

                    // Initial population of skills
                    populateSkills(data);

                    // Add event listener to update skills based on search input
                    skillSearchInput.addEventListener("input", function () {
                        const searchText = skillSearchInput.value.toLowerCase();
                        const filteredSkills = data.filter(skill =>
                            skill.toLowerCase().includes(searchText)
                        );

                        // Clear the skills container before populating with filtered skills
                        skillsContainer.innerHTML = "";
                        populateSkills(filteredSkills);
                    });

                    // Function to populate skills dynamically
                    function populateSkills(skills) {
                        skills.forEach((skill) => {
                            const label = document.createElement("label");
                            label.className = "checkbox-container";

                            const checkbox = document.createElement("input");
                            checkbox.type = "checkbox";
                            checkbox.name = "selectedSkills";
                            checkbox.className = "form-checkbox checkbox checkbox-primary";

                            label.appendChild(checkbox);
                            label.appendChild(document.createTextNode(skill));

                            skillsContainer.appendChild(label);
                        });
                    }
                })
                .then(() => {
                    // Add event listener to update Continue button based on skill selection
                    let checkboxes = document.querySelectorAll(
                        'input[name="selectedSkills"]',
                    );
                    console.log(checkboxes);

                    const continueBtn = document.getElementById("continueBtn");
                    
                    continueBtn.addEventListener("click", function() {
                        // Redirect to the "/selectinterest" page
                        window.location.href = "/selectinterest";
                    });

                    checkboxes.forEach((checkbox) => {
                        checkbox.addEventListener(
                            "change",
                            updateContinueButton,
                        );
                    });

                    function updateContinueButton() {
                        const selectedSkills = Array.from(checkboxes).filter(
                            (checkbox) => checkbox.checked,
                        );

                        continueBtn.disabled = selectedSkills.length < 3;
                    }
                })
                .catch((error) =>
                    console.error("Error fetching skill list:", error),
                );
        }

        // Call the function with the path to your JSON file
        fetchSkillData("/skillListjson.json");
    </script>
</div>
