<!-- <div class="h-screen" use:vanta on:destroy={destroyVanta}> -->
  <div class="navbar bg-gray-800 text-neutral-content bg-base-100">
    <div class="flex-1 text-4xl">
      <img class=" mr-3 w-24" src="./Reversed.png" />
      <div class="font-mono">KnownTrade</div>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 text-3xl">
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </div>
  </div>
<!-- </div> -->

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