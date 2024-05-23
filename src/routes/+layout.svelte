<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { caughtPokemons } from '$lib/stores';
</script>

<div class=" flex flex-row gap-2 mx-6 my-2 font-semibold">
	<a
		href="/"
		class={`bg-primary_blue py-1 px-4 rounded-md hover:bg-secondary_blue transition-all duration-300 ${$page.url.pathname == '/' && 'bg-secondary_blue'}`}
		>Home</a
	>
	<a
		href="/my-pokemons"
		class={`bg-primary_blue py-1 px-4 rounded-md hover:bg-secondary_blue transition-all duration-300 ${$page.url.pathname == '/my-pokemons' && 'bg-secondary_blue'}`}
		>My Pokemons ({$caughtPokemons.length})</a
	>
</div>

<div class="m-[0_auto] max-w-[90%]">
	<slot />
</div>
