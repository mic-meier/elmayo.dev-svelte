<script lang="ts">
	import type { BlogPost } from '@src/types'

	export let blogPosts: BlogPost[]
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1 class="my-8">My Blog</h1>
{#each blogPosts as post}
	<a href="blog/posts/{post.slug}">
		<div class="my-4">
			<h2>{post.title}</h2>
			<p>{post.tagline}</p>
		</div>
	</a>
{/each}
