<script module lang="ts">
	import { selectRandomGenres } from '$lib/genres';
	import StartGame from './StartGame.svelte';

	let genres = $state(selectRandomGenres());
	let selectedGenre = $state('');
</script>

<section>
	<h1>Choose your own adventure</h1>
	<p>Play an AI generated choose-your-own-adventure style game base on a selected story genre.</p>
</section>

<section>
	<h2>Choose your genre</h2>
	<div class="genres">
		{#each genres as genre}
			<button
				class:selected={selectedGenre === genre.label}
				style={`border-color: ${genre.color}`}
				onclick={() => {
					selectedGenre = selectedGenre === genre.label ? '' : genre.label;
				}}
			>
				<p>{genre.label}</p>
				<p>{genre.emoji}</p>
			</button>
		{/each}
	</div>
	{#if !selectedGenre}
		<div class="new-genres">
			<button
				onclick={() => {
					genres = selectRandomGenres();
				}}>Generate New Genres</button
			>
		</div>
	{/if}
</section>

<section>
	{#if selectedGenre}
		<StartGame {selectedGenre} />
	{/if}
</section>

<style>
	:root {
		padding-left: 2.5rem;
		padding-right: 2.5rem;
	}

	section {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-items: center;
		gap: 1rem;
	}

	h1 {
		font-size: xx-large;
	}

	h2 {
		text-align: center;
		font-size: x-large;
	}

	p {
		text-align: center;
	}

	button {
		padding: 0.5rem 1rem;
		display: flex;
		gap: 0.5rem;
		align-items: center;
		border: solid;
		border-width: 2px;
		border-radius: 9999px;
	}

	button.selected {
		background-color: var(--color-theme-2); /* Change to your preferred color */
		color: white;
		border: none;
	}

	section .genres {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
	}

	.new-genres {
		display: flex;
		justify-content: center;
	}

	.new-genres button {
		color: white;
		background-color: var(--color-theme-2);
	}
</style>
