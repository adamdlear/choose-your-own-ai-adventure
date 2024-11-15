<script lang="ts">
	import { fade } from 'svelte/transition';

	let { selectedGenre }: { selectedGenre: string } = $props();
</script>

<div>
	<a
		href={`/play/${selectedGenre.toLowerCase().replaceAll(' ', '-')}`}
		class="fade-in"
		transition:fade={{ duration: 300 }}
	>
		Start Game
	</a>
</div>

<style>
	div {
		display: flex;
		justify-content: center;
	}

	a {
		font-size: large;
		padding: 0.5rem 4rem;
		text-align: center;
		background-color: var(--color-theme-1);
		color: white;
		border-radius: 9999px;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(5px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	a.fade-in {
		animation: fadeIn 0.5s ease-in-out;
	}
</style>
