<script>
	export let title
	export let tagline
	export let date
</script>

<svelte:head>
	<title>{title}</title>
	<link href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/style.css" rel="stylesheet" />
</svelte:head>

<div>
	<h1>Title: {title}</h1>
	<p>Tagline: {tagline}</p>
	<p>Date: {date}</p>
	<article class="prose">
		<slot />
	</article>
</div>
