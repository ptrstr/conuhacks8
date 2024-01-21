import { writable } from "svelte/store";
import { client } from "$lib";

/** @type {import("svelte/store").Writable<import("$lib/client").Skill[]>} */
export const skills = writable([]);

export async function loadSkills() {
    skills.set(await client.default.skillsSkillsGet());
}