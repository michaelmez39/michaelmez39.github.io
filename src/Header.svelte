<script>
    import Navigator from "./Navigator.svelte";
</script>
<div id="header">
    <Navigator />
    <h1>
        Not Just Another Showcase
    </h1>
</div>


<style>
    #header {
        grid-column: 1/-1;
        display: grid;
		grid-template-columns: 1fr repeat(8, 2fr) 1fr;
        border-bottom: 5px solid white;
    }
    h1 {
		grid-column: 3/6;
		font-family: 'Orbitron', sans-serif;
		font-kerning: none;
		color: white;
	}
</style>