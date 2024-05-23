<script lang="ts">
	import { caughtPokemons } from '$lib/stores';
	import Pokemon from '../../components/Pokemon.svelte';
</script>

<div class="flex gap-2">
	{#each $caughtPokemons as pokemon}
		<Pokemon {pokemon} />
	{/each}
</div>
