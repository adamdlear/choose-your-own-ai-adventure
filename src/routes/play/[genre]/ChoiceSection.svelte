<script lang="ts">
	interface ChoiceSelectionProps {
		choices: string[];
		onChoiceSelect: () => void;
	}

	const { choices, onChoiceSelect }: ChoiceSelectionProps = $props();
</script>

<section>
	<div>
		{#each choices as choice}
			<button onclick={onChoiceSelect}>{choice}</button>
		{/each}
	</div>
</section>

<style>
	section {
		width: 100%;
	}

	div {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	button {
		width: 100%;
		padding: 0.75rem;
		border: solid;
		border-radius: 9999px;
		color: var(--color-theme-3);
		background-color: var(--color-theme-2);
	}

	button:active {
		color: var(--color-theme-3);
		background-color: var(--color-theme-1);
	}
</style>
