<script context="module">
	/** @type {import('./index').Load}*/
	export async function load({ fetch }) {
		const url = 'http://localhost:3000/blog/posts.json'
		const response = await fetch(url)

		return {
			status: response.status,
			props: {
				posts: response.ok && (await response.json())
			}
		}
	}
</script>

<script lang="ts">
	import { BlogHeader } from '$lib'
	export let posts
	let { blogPosts } = posts
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<BlogHeader title="Test Title" date={new Date()} />

<h1>My Blog</h1>
{#each blogPosts as post}
	<a href="blog/posts/{post.slug}">
		<p>{post.title}</p>
		<p>{post.slug}</p>
	</a>
{/each}
<p>TODO...</p>
