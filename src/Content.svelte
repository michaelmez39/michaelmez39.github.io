<script>
	import Home from "./Pages/Home.svelte";
	import About from "./Pages/About.svelte";
	import {current_page} from "./stores.js";
	let pageValue = 0;
	current_page.subscribe(value => {
		pageValue = value;
	});
	$: console.log("current page" + pageValue);
	function advance() {
		current_page.update(n => (n+1) % 6);
	}
	function back() {
		current_page.update(n => (n-1) % 6);
	}
</script>
<style>
	#content {
		position: relative;
		grid-column: 1/-1;
		flex-grow: 1;
		height: 100%;
		z-index: 0;

		display: grid;
		grid-template-columns: repeat(6, 1fr);
		justify-content: center;
	}
	.nav-button {
		background-color: transparent;
		z-index: 200;
		margin: auto;
		color: white;
		border: none;
	}

	.next {
		grid-column: 6/-1;
	}
	@media (max-width: 576px) {
		#content {
			display: flex;
			flex-direction: column;
		}
	}
</style>

<div id="content">
	{#if (pageValue > 0)}
	<button class="nav-button" on:click={back}>
		Previous
	</button>
	{/if}

	{#if (pageValue === 0)}
		<Home />
	{:else if (pageValue === 1)}
		<About />
	{:else}
		<Home />
	{/if}

	{#if (pageValue < 5)}
	<button class="nav-button next" on:click={advance}>
		Next
	</button>
	{/if}
</div>