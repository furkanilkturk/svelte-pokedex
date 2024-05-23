<script lang="ts">
	import { caughtPokemons, removePokemon } from '$lib/stores';
	import Pokemon from '../../components/Pokemon.svelte';
</script>

{#if $caughtPokemons.length === 0}
	<div class="flex flex-col mt-72 justify-center items-center gap-2">
		<h1 class="text-primary_yellow font-black text-3xl">YOU DON'T HAVE ANY POKEMON</h1>
		<h2 class="text-primary_orange font-bold text-2xl">GO CATCH!</h2>
		<a href="/" class="bg-primary_yellow px-2 py-1 rounded-md font-semibold">Catch!</a>
	</div>
{/if}

<div class="flex gap-2">
	{#each $caughtPokemons as pokemon}
		<Pokemon {pokemon} onRemove={removePokemon} />
	{/each}
</div>
