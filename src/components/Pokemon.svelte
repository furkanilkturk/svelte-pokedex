<script lang="ts">
	import type { IndexPokemon } from '../routes/+page';
	import { caughtPokemons } from '$lib/stores';
	import { page } from '$app/stores';
	export let pokemon: IndexPokemon;

	export let onRemove: (pokemon: IndexPokemon) => void;

	let canCatchPokemon: boolean = true;

	{
		$page.url.pathname === '/' ? (canCatchPokemon = true) : (canCatchPokemon = false);
	}

	const catchPokemon = () => {
		if (canCatchPokemon) {
			caughtPokemons.update((pokemons) => {
				return [...pokemons, pokemon];
			});
			console.log('catch pokemon', pokemon);
		}
	};

	const handleRemove = () => {
		if (onRemove) {
			onRemove(pokemon);
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="w-28 m-3 p-3 relative bg-secondary_blue rounded-md shadow-md shadow-primary_blue hover:bg-primary_blue transition-all duration-300"
>
	<div class="flex flex-col items-center" on:click={catchPokemon}>
		<img src={pokemon.image} alt={pokemon.name} />

		{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
	</div>
	<div class="absolute top-2 left-2 text-slate-600">{pokemon.id}</div>
	{#if !canCatchPokemon}
		<button on:click|stopPropagation={handleRemove} class="absolute top-2 right-2">X</button>
	{/if}
</div>
