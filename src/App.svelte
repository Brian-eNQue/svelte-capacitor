<script>
	import { Router } from "@roxi/routify";
	import { routes } from "../.routify/routes";
	import { cssVarStyles, navOpen } from '@store/nav.js';

	import Timeline from "@components/Timeline.svelte"
</script>

<div style={$cssVarStyles} >
	<Timeline />
	<main class="{$navOpen ? 'nav-open' : ''}">
		<Router {routes} />
	</main>
</div>

<style @global>
	:global(body, #app){
		width: 100%;
		height: 100%;
		margin: 0px;
		padding: 0px;
	}

	main {
		background-color: #fff;
		position: absolute;
		left: 0px;
		top: 0px;
		right: 0px;
		bottom: 0px;
		overflow: auto;
		-webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
	}

	main.nav-open {
		left: var( --navWrapperWidth, 120px );
	}
</style>
