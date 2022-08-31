<script>
	import Footer from "$lib/Footer.svelte";
	import Header from "$lib/Header.svelte";
	import '../app.css';
	let name = 'world';
	export const prerender = true;
</script>
<style>
	#app {
		display: grid;
		grid-template-rows: 230px 1fr 50px;
		background-color: #003464;
		min-height: 100%;
	}
	#content {
		position: relative;
		grid-column: 1/-1;
		z-index: 0;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		justify-content: center;
		align-content: baseline-position;
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
	<div id="content">
		<slot />
	</div>
	<Footer />
</div>
