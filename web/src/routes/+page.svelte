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