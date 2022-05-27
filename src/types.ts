export interface BlogPost {
	slug: string
	title: string
	date: Date
	tagline: string
	published: boolean
	layout: string
}

export interface NavLink {
	name: string
	to: string
}
