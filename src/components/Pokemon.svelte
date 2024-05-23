<script lang="ts">
	import type { IndexPokemon } from '../routes/+page';
	import { caughtPokemons } from '$lib/stores';
	export let pokemon: IndexPokemon;

	const catchPokemon = () => {
		caughtPokemons.update((pokemons) => {
			return [...pokemons, pokemon];
		});
		console.log('catch pokemon', pokemon);
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="w-28 m-3 p-3 relative bg-secondary_blue rounded-md shadow-md shadow-primary_blue hover:bg-primary_blue transition-all duration-300"
>
	<div class="flex flex-col items-center" on:click={catchPokemon}>
		<img src={pokemon.image} alt={pokemon.name} />
		{pokemon.name}
	</div>
	<div class="absolute top-2 left-2 text-slate-600">{pokemon.id}</div>
</div>
