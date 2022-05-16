import pMap from 'p-map'
import { basename } from 'path'

export async function get() {
	const modules = import.meta.glob('./posts/*.svx')

	const blogPosts = await pMap(Object.entries(modules), async function ([filename, module]) {
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

	blogPosts.sort((a, b) => (a.date > b.date ? -1 : 1))

	return {
		body: { blogPosts }
	}
}
