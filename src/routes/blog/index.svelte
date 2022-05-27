<script context="module">
	/** @type {import('./__types/index').Load} */
	export async function load() {
		const url = '/blog/posts.json'
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
	export let posts
	let { blogPosts } = posts
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
