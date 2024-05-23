import { writable, type Writable } from 'svelte/store';
import type { IndexPokemon } from '../routes/+page';

export const caughtPokemons: Writable<IndexPokemon[]> = writable([]);

export function removePokemon(pokemon: IndexPokemon) {
	caughtPokemons.update((pokemons) => pokemons.filter((p) => p.id !== pokemon.id));
}
