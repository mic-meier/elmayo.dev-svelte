<script lang="ts">
	import format from 'date-fns/format/index.js'
	export let title = 'Title'
	export let date: Date = new Date()

	let formattedDate = format(new Date(date), 'do MMM yyyy')
</script>

<div class="mt-24">
	<h1 class="mb-0 text-5xl font-extrabold">{title}</h1>
	<div class="text-gray-500 text-sm">{formattedDate}</div>
</div>
