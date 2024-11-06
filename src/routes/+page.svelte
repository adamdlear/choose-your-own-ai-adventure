<script module lang="ts">
	import { selectRandomGenres } from './genres';
    import StartGame from './StartGame.svelte';

	let selectedGenre = $state('');

	const genres = selectRandomGenres();
</script>

<section>
    <h1>Choose your Own adventure</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores impedit incidunt tempore dignissimos perspiciatis nam aliquam, quasi praesentium eaque odit amet rerum possimus error consequuntur quidem voluptatem. Vitae, nesciunt.</p>
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
</section>

<section class="">
    {#if selectedGenre}
        <StartGame selectedGenre={selectedGenre} />
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
        font-size: xx-large
    }

    h2 {
        text-align: center;
        font-size: x-large;
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
        background-color: rgb(96 165 250); /* Change to your preferred color */
        color: white;
        border: none;
    }

    section .genres {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.5rem;
    }

</style>