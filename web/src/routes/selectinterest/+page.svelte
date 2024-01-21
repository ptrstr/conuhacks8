<script lang="ts">
    import { onMount } from "svelte";
    import { skills, loadSkills } from "./stores";
    import Card from "../Card.svelte";
    import { client, getUserId } from "$lib";
    import type { UserUpdate } from "$lib/client";

    onMount(async () => {
        await loadSkills();
        setup();

        window.bob = async function bob(selectedSkillsJson) {
            let update = {
                interests: selectedSkillsJson.join(',')
            }
            await client.users.usersPatchCurrentUserUsersMePatch(update);

            window.location.href = "/selectskill";
        };
    });

    
</script>

<div class="flex flex-col items-center w-full min-h-screen">
    <h1 class="text-2xl font-semibold mb-6">Select Your Interests</h1>
    <p class="text-2xl font-semibold mb-6">Please choose at least 3</p>

    <div
        class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-2xl overflow-y-auto mb-4"
        id="skillsContainer"
        style="display:flex; flex-flow:wrap; flex-wrap:wrap"
    >

        {#each $skills as skill}
            <label class="checkbox-container">
                <input type="checkbox" name="selectedSkills" data-type={skill.name} class="form-checkbox checkbox checkbox-secondary">
                <Card title={skill.name} image={skill.image} url='#' />
            </label>
        {/each}
    </div>

    <button
        id="continueBtn"
        class="btn btn-outline btn-primary"
        disabled>Continue</button
    >
    <style>
        #skillsContainer {
            max-height: 60vh;
            overflow-y: auto;
        }

        .checkbox-container {
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem;
        }

        .checkbox-container input {
            margin-right: 0.5rem;
        }
    </style>
    

    <script lang="ts">
        function setup() {
            const skillsContainer = document.getElementById("skillsContainer");

            let checkboxes = document.querySelectorAll(
                'input[name="selectedSkills"]',
            );

            const continueBtn = document.getElementById("continueBtn");

            continueBtn.addEventListener("click", function () {
                    let selectedSkillsJson = Array.from(checkboxes)
                        .filter((checkbox) => checkbox.checked)
                        .map((checkbox) => checkbox.getAttribute('data-type'));

                    window.bob(selectedSkillsJson);
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
        }
    </script>
</div>
