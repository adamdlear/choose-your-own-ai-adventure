<script lang="ts">
	import ContentSection from './ContentSection.svelte';
	import ChoiceSection from './ChoiceSection.svelte';
	import backArrow from '$lib/icons/back-arrow.svg';
	import type { PageData } from '../$types';

	const { data }: { data: PageData } = $props();

	const chapter = data.chapters[0];
	const id = chapter.id;
	const title = chapter.title;
	const story = chapter.story;
	const choices = chapter.choices;
</script>

<div class="container">
	<div class="title-line">
		<img src={backArrow} alt="back arrow" />
		<h1>{title}</h1>
		<div>{id}</div>
	</div>
	<section class="content-wrapper">
		<div class="left">
			<ContentSection {story} />
		</div>
		<hr class="divider" />
		<div class="right">
			<ChoiceSection {choices} />
		</div>
	</section>
</div>

<style>
	/* Basic reset */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* Main container styling */
	.container {
		padding: 1rem;
		font-family: Arial, sans-serif;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.title-line {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* Header styling */
	h1 {
		font-size: 2rem;
		text-align: center;
	}

	/* Section layout */
	.content-wrapper {
		display: flex;
		flex: 1;
		gap: 1rem;
		align-items: stretch;
	}

	.left,
	.right {
		width: 100%;
		flex: 1;
		min-width: 290px;
		display: flex;
		flex-direction: column;
		justify-content: space;
	}

	.divider {
		display: none;
	}

	@media (max-width: 768px) {
		.content-wrapper {
			flex-direction: column;
		}

		.divider {
			display: block;
			border: 0;
			border-top: 1px solid #ccc;
			margin: 1rem 0;
		}
	}
</style>
