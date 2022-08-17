<script>
	import {current_page} from "./stores.js";
	import Home from "./Pages/Home.svelte";
	import About from "./Pages/About.svelte";
	import Resume from "./Pages/Resume.svelte";
	import Projects from "./Pages/Projects.svelte";
	import Thoughts from "./Pages/Thoughts.svelte";
	let pageValue = 0;
	current_page.subscribe(value => {
		pageValue = value;
	});
	let components = [
		{name: 'Home', component: Home},
		{name: 'About', component: About},
		{name: 'Resume', component: Resume},
		{name: 'Projects', component: Projects},
		{name: 'Thoughts', component: Thoughts}
	]
	let current_component = {name: 'Home', component: Home};
	$: current_component = components[pageValue];
	// async function loadComponent(name) {
	// 	console.log(`./${name}.svelte`);
    //     return await import(`./Pages/${name}.svelte`);
    // }
	$: console.log(`current page: {current_component.name}`);

	function advance() {
		current_page.update(n => (n+1) % 5);
	}
	function back() {
		current_page.update(n => (n-1) % 5);
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

	<svelte:component this={current_component.component} />

	{#if (pageValue < 4)}
	<button class="nav-button next" on:click={advance}>
		Next
	</button>
	{/if}
</div>