<script>
	import Footer from "./Footer.svelte";
	import Content from "./Content.svelte";
	import Header from "./Header.svelte";
	let name = 'world';
</script>
<style>
	#app {
		display: grid;
		min-height: 100%;
		grid-template-rows: 230px 1fr 50px;
		background-color: #003464;
	}
	@media (max-width: 576px) {
		#app {
			display: flex;
			flex-direction: column;
		}
	}
</style>
<div id="app">
	<Header />
	<Content />
	<Footer />
</div>
