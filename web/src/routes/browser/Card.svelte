<script>
    /** @type {string} */
	export let title;

    /** @type {string} */
	export let url;

    /** @type {string} */
	export let image;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="{image}" alt="{image}" /></figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <div class="card-actions justify-end">
        <a href="{url}" class="btn btn-primary">Visit</a>
      </div>
    </div>
  </div>