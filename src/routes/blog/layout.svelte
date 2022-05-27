<script>
	export let title
</script>

<svelte:head>
	<title>{title}</title>
	<link href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/style.css" rel="stylesheet" />
</svelte:head>

<div>
	<article class="prose">
		<slot />
	</article>
</div>
