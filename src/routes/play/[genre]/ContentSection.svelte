<script lang="ts">
	const { story }: { story: string } = $props();
</script>

<section>
	<p>{story}</p>
</section>

<style>
	p {
		text-align: center;
	}
</style>
