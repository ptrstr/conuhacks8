<script>
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

/**
 * @type {{ destroy: () => void; }}
 */
let vantaInstance;

/**
 * @param {HTMLDivElement} node
 */
function vanta(node) {
  // @ts-ignore
  vantaInstance = NET({
    el: node,
    THREE: THREE,
    color: 0x000000,
  });
}

function destroyVanta() {
  if (vantaInstance) {
    vantaInstance.destroy();
  }
}
</script>

<style>
/* Ajoutez d'autres styles CSS si nécessaire */
body {
  margin: 0;
  overflow: hidden;
}

.full-screen-container {
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
}

.company-title {
  font-size: 110px;
  font-weight: bold;
  color: #fff;
  margin-left: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1001; /* Mettez le texte au-dessus de la barre noire */
}

.logo {
  position: absolute;
  top: 0px;
  left: 10px;
  z-index: 1002; /* Mettez le logo encore au-dessus de la barre noire */
}

.logo img {
  width: 170px;
  height: auto;
  object-fit: cover;
}

.black-bar {
    background-color: rgba(0, 0, 0, 0.355);
    height: 170px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
}

.avatar img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

nav {
    display: flex;
    justify-content: space-evenly;
    padding: 10px 0;
    color: #fff;
    font-weight: bold;
    font-size: 35px;
    position: absolute;
    top: 100px;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}
</style>

<div class="full-screen-container" use:vanta on:destroy={destroyVanta}>
<div class="black-bar"></div>

<div class="logo">
    <img src="./GlobeGather.png" alt="Logo" />
</div>
<div class="company-title">KnowTrade</div>
</div>

<nav>
<a href="#register">Register</a>
<a href="#login">Login</a>
<a href="#about">About Us</a>
</nav>