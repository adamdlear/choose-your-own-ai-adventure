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
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}

	button {
		padding: 0.5rem;
		width: 75%;
		border: solid;
		border-radius: 9999px;
	}
</style>
