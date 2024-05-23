<script lang="ts">
	import Pokemon from '../components/Pokemon.svelte';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { generations } from './generations';
	import { goto } from '$app/navigation';

	export let data: PageData;

	let form = {
		searchString: ''
	};

	let searchString = '';
	$: selectedPokemons = data.pokemons.filter((pokemon) => {
		return pokemon.name.toLowerCase().includes(searchString.toLowerCase());
	});

	$: selectedGenerationId = $page.url.searchParams.get('generation_id') || '';

	const updateSearchParams = (key: string, value: string) => {
		const searchParams = new URLSearchParams($page.url.searchParams);
		searchParams.set(key, value);
		goto(`?${searchParams.toString()}`);
	};

	const submitSearch = (e: Event) => {
		searchString = form.searchString;
	};
</script>

<div class="flex flex-row flex-wrap justify-center py-2">
	<button
		on:click={() => updateSearchParams('generation_id', 'all')}
		class={`m-1 py-1 px-3 rounded-md bg-primary_blue hover:bg-secondary_blue shadow-sm shadow-secondary_blue text-gray-800 font-semibold cursor-pointer transition-all duration-300 ${selectedGenerationId === 'all' && 'bg-secondary_blue'} `}
	>
		All
	</button>
	{#each generations as generation (generation.id)}
		<button
			on:click={() => updateSearchParams('generation_id', generation.id.toString())}
			class={`m-1 py-1 px-3 rounded-md bg-primary_blue hover:bg-secondary_blue shadow-sm shadow-secondary_blue text-gray-800 font-semibold cursor-pointer transition-all duration-300 ${selectedGenerationId === generation.id.toString() && 'bg-secondary_blue'} `}
		>
			{generation.main_region}
		</button>
	{/each}
</div>
<form on:submit|preventDefault={submitSearch} class="flex flex-row justify-center m-5 gap-4">
	<input
		type="text"
		bind:value={form.searchString}
		placeholder="Pokemon Name"
		class="py-1 px-3 rounded-md focus-within:outline-none"
	/>
	<input type="submit" value="Search" class="py-1 px-2 bg-white rounded-md text-slate-500" />
</form>
<div class="flex flex-row flex-wrap justify-center">
	{#each selectedPokemons as pokemon (pokemon.id)}
		<Pokemon {pokemon} />
	{/each}
</div>
