<script lang="ts">
  import type { PageData } from './$types';
  import { onMount } from 'svelte';
  import { client } from '$lib';

  export let data: PageData;

  export let email: string;

  export let name: string;

  onMount(async () => {
    let data = await client.default.getUserUserUserIdGet(data.id);

    email = data.email;

    name = data.name;
  })
</script>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
  
      .profile-container {
        text-align: center;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        padding: 20px;
        max-width: 400px;
        width: 100%;
      }
  
      .profile-image {
        border-radius: 50%;
        width: 150px;
        height: 150px;
        object-fit: cover;
        margin-bottom: 10px;
        margin-left: 110px; /* Ajustez cette valeur selon vos préférences */
        }

  
      .full-name {
        font-size: 1.5em;
        font-weight: bold;
        margin: 0; /* Ajustement pour éliminer l'espace entre l'image et le nom */
      }
  
      .email {
        color: #555;
        margin-bottom: 20px;
      }
  
      .skills-and-interests {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
  
      .skill-interest-card {
        margin: 10px;
        text-align: center;
      }
  
      .skill-interest-image {
        border-radius: 10px;
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-bottom: 10px;
      }
  
      .skill-interest-name {
        font-size: 0.9em;
        color: #444;
      }
    </style>
  </head>
  <body>
  
    <div class="profile-container">
      <img class="profile-image" src="./photoprofil.jpg" alt="Profile Image">
      <div class="full-name">{name}</div>
      <div class="email">{email}</div>
      
      <div class="skills-and-interests">
        <div class="skill-interest-card">
          <img class="skill-interest-image" src="path/to/skill1.jpg" alt="Skill 1">
          <div class="skill-interest-name">Skill 1</div>
        </div>
        
        <div class="skill-interest-card">
          <img class="skill-interest-image" src="path/to/skill2.jpg" alt="Skill 2">
          <div class="skill-interest-name">Skill 2</div>
        </div>

        <div class="skill-interest-card">
            <img class="skill-interest-image" src="path/to/skill2.jpg" alt="Skill 2">
            <div class="skill-interest-name">Skill 3</div>
        </div>
        
        <div class="skill-interest-card">
          <img class="skill-interest-image" src="path/to/interest1.jpg" alt="Interest 1">
          <div class="skill-interest-name">Interest 1</div>
        </div>
        
        <div class="skill-interest-card">   
          <img class="skill-interest-image" src="path/to/interest2.jpg" alt="Interest 2">
          <div class="skill-interest-name">Interest 2</div>
        </div>

        <div class="skill-interest-card">   
            <img class="skill-interest-image" src="path/to/interest2.jpg" alt="Interest 2">
            <div class="skill-interest-name">Interest 3</div>
        </div>

      </div>
    </div>
  
  </body>