<script lang="ts">
	import github from '$lib/images/github.svg';
	import home from '$lib/icons/home.svg'
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={home} alt="Home" />
		</a>
	</div>
	<div class="corner">
		<a href="https://github.com/adamdlear/choose-your-own-ai-adventure">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		padding-top: 12px;
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
