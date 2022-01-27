<script>
    import { onMount } from 'svelte';
    import { params, url  } from '@roxi/routify';
    import { routes, load } from '@store/nav.js';

    $: partner = $params.partner;
    $: code = $params.code;

    onMount(async () => {
		load(params, $url() );
	});
</script>

<div class="partner">
        <img src="/images/{$routes[partner].img}" alt={ $routes[partner].name } />
        <p>{code}</p>
</div>

<style>
    img {
        height: 39px;
    }

    p {
        display: inline-block;
        color: #ccc;
    }
</style>