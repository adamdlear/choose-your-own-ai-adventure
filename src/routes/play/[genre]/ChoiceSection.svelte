<script lang="ts">
	import type { Choice } from '$lib/types';

	const { choices }: { choices: Choice[] } = $props();
</script>

<section>
	<div>
		{#each choices as choice}
			<button>{choice.text}</button>
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
