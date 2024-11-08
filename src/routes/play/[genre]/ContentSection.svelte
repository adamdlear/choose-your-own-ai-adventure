<script lang="ts">
	const { content }: { content: string } = $props();
</script>

<section>
	<p>{content}</p>
</section>

<style>
	p {
		text-align: center;
	}
</style>
