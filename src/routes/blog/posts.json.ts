import pMap from 'p-map'
import { basename } from 'path'

export async function get() {
	const modules = import.meta.glob('./posts/*.svx')

	const posts = await pMap(Object.entries(modules), async function ([filename, module]) {
		const { metadata } = await module()

		return {
			slug: basename(filename, '.svx'),
			title: metadata.title,
			date: new Date(metadata.date),
			tagline: metadata.tagline,
			published: metadata.published,
			layout: metadata.layout
		}
	})

	posts.sort((a, b) => (a.date > b.date ? -1 : 1))

	let blogPosts

	if (process.env.NODE_ENV === 'production') {
		blogPosts = posts.filter((post) => post.published === true)
	} else {
		blogPosts = posts
	}

	return {
		body: { blogPosts }
	}
}
