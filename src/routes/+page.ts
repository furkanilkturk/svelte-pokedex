import type { PageLoad } from './$types';

type ApiPokemon = {
	name: string;
	url: string;
};
export type IndexPokemon = ApiPokemon & {
	id: string;
	image: string;
};
export const load = (async ({ fetch, url }) => {
	const generationId = url.searchParams.get('generation_id') || '1';
	let pokemonList = [];
	if (generationId == 'all') {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20000');
		const json = await response.json();
		pokemonList = json.results;
	} else {
		const generationResponse = await fetch(`https://pokeapi.co/api/v2/generation/${generationId}`);
		const generationJson = await generationResponse.json();
		pokemonList = generationJson.pokemon_species;
	}

	const pokemons: IndexPokemon[] = pokemonList.map((pokemon: ApiPokemon) => {
		const splitUrl = pokemon.url.split('/');
		const id = splitUrl[splitUrl.length - 2];
		return {
			name: pokemon.name,
			url: pokemon.url,
			id,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
		};
	});

	return {
		pokemons
	};
}) satisfies PageLoad;
