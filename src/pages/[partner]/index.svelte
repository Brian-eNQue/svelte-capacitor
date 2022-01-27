<script>
        import { onMount } from 'svelte';
    import { params, url  } from '@roxi/routify';
    import { routes, load, currentRoute } from '@store/nav.js';

    $: partner = $params.partner;
    $: code = $params.code;

    onMount(async () => {
		load($params, $url() );
	});

</script>

<div class="partner">
    <div id="title">
        <img src="/images/{$currentRoute.img}" alt={ $currentRoute.name } />
    </div>
</div>

<style>
    img {
        height: 39px;
    }

    #title {
        width: 100%;
        height: 40px;
        background-color: var( --primary, #111 );
        border-bottom: 1px solid #555;
    }
</style>