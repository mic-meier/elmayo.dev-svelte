<script lang="ts">
	import { BlogHeader, BlogImage } from '$lib';
	export let title: string;
	export let date: Date;
	export let imgUrl: string;
	export let imgAlt: string;
</script>

<svelte:head>
	<title>{title}</title>
	<link href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/style.css" rel="stylesheet" />
</svelte:head>

<div>
	<article class="prose">
		<BlogHeader {title} {date} />
		<BlogImage {imgUrl} {imgAlt} />
		<slot />
	</article>
</div>
