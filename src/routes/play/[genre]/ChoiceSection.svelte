<script lang="ts">
	const { choices }: { choices: string[] } = $props();
</script>

<section>
	<div>
		{#each choices as choice}
			<button>{choice}</button>
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
