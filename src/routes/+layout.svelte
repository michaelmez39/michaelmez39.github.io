<script>
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
	import '../app.css';
	let name = 'world';
</script>
<style>
	#app {
		display: grid;
		min-height: 100%;
		grid-template-rows: 230px 1fr 50px;
		background-color: #003464;
	}
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
		#app {
			display: flex;
			flex-direction: column;
		}
	}
</style>
<div id="app">
	<Header />
		<article id="content">
			{#if (0 > 0)}
			<button class="nav-button" on:click={back}>
				Previous
			</button>
			{/if}
			<slot />
			{#if (0 < 4)}
			<button class="nav-button next" on:click={advance}>
				Next
			</button>
			{/if}
		</article>
	<Footer />
</div>
