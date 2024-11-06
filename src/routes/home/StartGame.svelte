<script lang="ts">
    import { fade } from "svelte/transition";

    let { selectedGenre }: { selectedGenre: string } = $props();
</script>

<a
    href={`/play/${selectedGenre.toLowerCase().replaceAll(" ", "-")}`}
    class="fade-in"
    transition:fade={{ duration: 300 }}
>
    Start Game
</a>

<style>
    a {
        font-size: large;
        padding: 0.5rem 1rem;
        text-align: center;
        background-color: rgb(96 165 250); /* Adjust as needed */
        color: white;
        border-radius: 9999px;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(5px); /* Optional slight slide-up effect */
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Apply the fade-in animation to the link */
    a.fade-in {
        animation: fadeIn 0.5s ease-in-out;
    }

</style>