<script lang="ts">
	import { goto } from '$app/navigation';
	import backArrow from '$lib/icons/back-arrow.svg';
	import type { Chapter } from '$lib/types';
	import { onMount } from 'svelte';
	import ChoiceSection from './ChoiceSection.svelte';
	import ContentSection from './ContentSection.svelte';
	import Loading from './Loading.svelte';

	const { data } = $props();

	const genre = data.genre;
	const storyLength = data.storyLength;

	let chapterNumber: number = $state(1);
	let chapter: Chapter | undefined = $state();
	const chapters: Chapter[] = $state([]);

	const fetchChapter = async () => {
		const response = await fetch(`/play/${genre}`, {
			method: 'POST',
			body: JSON.stringify({ genre, storyLength, chapters }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();
		chapter = data.chapter as Chapter;

		chapters.push(chapter);
	};

	onMount(() => {
		fetchChapter();
	});

	const onGoBack = () => {
		goto('/');
	};

	const onChoiceSelect = async () => {
		chapter = undefined;

		chapterNumber += 1;

		await fetchChapter();
	};
</script>

{#if chapter}
	<div class="container">
		<div class="title-line">
			<button onclick={onGoBack}>
				<img src={backArrow} alt="back arrow" />
			</button>
			<h1>{chapter.title}</h1>
			<div>{chapters.length}</div>
		</div>
		<section class="content-wrapper">
			<div class="left">
				<ContentSection story={chapter.story} />
			</div>
			<hr class="divider" />
			<div class="right">
				{#if chapter.choices.length > 0}
					<ChoiceSection choices={chapter.choices} {onChoiceSelect} />
				{:else}
					<a href="/">Play Again</a>
				{/if}
			</div>
		</section>
	</div>
{:else}
	<Loading />
{/if}

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		padding: 1rem;
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

	h1 {
		font-size: 2rem;
		text-align: center;
	}

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
		align-items: center;
		justify-content: center;
	}

	.divider {
		display: none;
	}

	a {
		text-align: center;
		padding: 0.5rem;
		width: 100%;
		border-radius: 9999px;
		color: var(--color-theme-3);
		background-color: var(--color-theme-1);
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
