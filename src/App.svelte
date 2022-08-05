<script>
	import Navigator from "./Navigator.svelte";
	import Footer from "./Footer.svelte"
	import Content from "./Content.svelte"
	let name = 'world';
</script>
<style>
	#app {
		display: grid;
		min-height: 100%;
		grid-template-columns: 1fr repeat(8, 2fr) 1fr;
		grid-template-rows: 80px 150px 1fr 50px;
		background-color: #003464;
	}
	h1 {
		grid-column: 3/6;
		font-family: 'Orbitron', sans-serif;
		font-kerning: none;
		color: white;
	}
	@media (max-width: 576px) {
		#app {
			display: flex;
			flex-direction: column;
		}
	}
</style>
<div id="app">

	<Navigator />
	<h1>
		Not Just Another Showcase
	</h1>
	<Content />
	<Footer />
</div>
