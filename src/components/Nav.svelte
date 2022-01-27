<script>
  import { routes, styleVarArray, currentRoute, load, navOpen } from '@store/nav.js';
 
  function scrollbarVisible(element) {
      return element.scrollHeight > element.clientHeight;
  }

  function setNavWrapperWidth() {
      if( scrollbarVisible( document.getElementById("tabs") ) ){
          $styleVarArray.navScrollbar = 13;
      } else {
          $styleVarArray.navScrollbar = 0;
      }
  }

  window.addEventListener('resize', setNavWrapperWidth)

  function toggle() {
      navOpen.update(n => !n);
  }
</script>


<div id="nav" class="{$navOpen ? 'open' : ''}">
    <div id="home" class="tab {$currentRoute.route === '/' ? 'is-active' : ''}">
      <a role="button" class="navbar-burger {$navOpen ? 'open' : ''}" on:click={toggle}>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <a href={'/'}> <img src="/images/eNQue-light.svg" alt="eNQue" /></a>
    </div>
    <div id="tabs">
        {#each Object.keys($routes) as route }
        <div class="tab {$currentRoute.name === route ? 'is-active' : ''}" style="--partnerPrimary:{$routes[route].primary};--partnerSecondary:{$routes[route].secondary};" >
            <a href="/{route}" ><img src="/images/{$routes[route].img}" alt="route" /></a>
        </div>
        {/each}
        <div id="divider"></div>
    </div>
    <div id="profile" class="tab {$currentRoute.name === 'profile' ? 'is-active' : ''}" >
        <a href={'profile'}>Profile</a>
    </div>
</div>
<!-- {#if $params.partner}
<div v-if id="title">
  <img src="/images/{$routes[$currentRoute].img}" alt={ $routes[$currentRoute].name } />
  <p>{$params.code}</p>
</div>
{/if} -->

<style>
    #nav, #nav #tabs, #nav #profile, #nav #divider {
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    #nav.open, #nav.open #tabs, #nav.open #profile {
        width: var(--navWrapperWidth,120px);
    }

    #nav.open #divider {
      left: calc( var(--navWrapperWidth,120px) - 5px );
    }

    #nav {
        position:fixed;
        top: 0px;
        left: 0px;
        bottom: 0px;
        width: 0px;
        color: #555;
        z-index: 3;
        /* background-color: #4a274a; */
    }

    #divider {
        position:fixed;
        top: 0px;
        left: -5px;
        bottom: 0px;
        width: 5px;
        background-color: var( --primary, #111 );
        z-index: 1;
        border-left: solid 1px #555;
    }

    #divider:hover {
        background-color: lightskyblue;
    }

    #tabs {
        position:absolute;
        top: 45px;
        bottom: 60px;
        width: 0;
        direction: ltr;
        border: none;
        /* background:
            radial-gradient(circle farthest-side at 0% 50%,#292929 23.5%,rgba(240,166,17,0) 0)21px 30px,
            radial-gradient(circle farthest-side at 0% 50%,#222 24%,rgba(240,166,17,0) 0)19px 30px,
            linear-gradient(#292929 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#292929 0)0 0,
            linear-gradient(150deg,#292929 24%,#222 0,#222 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#222 0,#222 76%,#292929 0)0 0,
            linear-gradient(30deg,#292929 24%,#222 0,#222 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#222 0,#222 76%,#292929 0)0 0,
            linear-gradient(90deg,#222 2%,#292929 0,#292929 98%,#222 0%)0 0 #292929; 
        background-size: 40px 60px; */
        display: flex;
        direction: rtl;
        flex-direction: column;
        overflow: auto;
    }
    
    .tab {
        position: relative;
        display: block;
        width: calc( var(--navWidth,120px) - 16px);
        /* background-color: #444; */
        background-color: var(--partnerPrimary, #111);
        color: #fff;
        padding: 0px;
        margin: 0px 8px 2px 3px;
        border: 1px solid #555;
        border-radius: 6px;
    } 

    #home {
        position: absolute;
        top: 0px;
        left: 0px;
        width: var(--navWrapperWidth,120px);
        margin: 0px;
        border: none;
        border-bottom: 1px solid #555;
        border-radius: 0px;
    }

    #home img {
      margin: 0px auto 0px 48px;
    }

    #profile {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 0;
        height: 60px;
        margin: 0px;
        border: none;
        border-top: 1px solid #555;
        border-radius: 0px;
    }

    .tab.is-active {
        /* background-color: var(--primary, #aaa); */
        z-index: 3;
        border-right: none;
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        width: calc( var(--navWidth,120px) - 6px);
        margin-right: 0px;
    }
      
    a {
        display: flex;
        align-items: center;
        padding: 5px;
        margin-bottom: 0px;
        height: 40px;
        vertical-align: middle;
    }   

    li.is-active a img {
        filter: none;
    }
    
    img {
        /* filter: grayscale(0.9); */
        max-height: 30px;
        max-width: 100px;
        display: block;
        margin: 0px auto 0px auto;
    }

    .navbar-burger {
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 4
    }
 
    .navbar-burger span:nth-child(1) {
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    .navbar-burger span:nth-child(2) {
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    .navbar-burger span:nth-child(3) {
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
    }

    .navbar-burger.open span:nth-child(1) {
        -webkit-transform: rotate(43deg);
        -moz-transform: rotate(43deg);
        -o-transform: rotate(43deg);
        transform: rotate(43deg);
    }

    .navbar-burger.open span:nth-child(2) {
        width: 0%;
        opacity: 0;
    }

    .navbar-burger.open span:nth-child(3) {
        -webkit-transform: rotate(-43deg);
        -moz-transform: rotate(-43deg);
        -o-transform: rotate(-43deg);
        transform: rotate(-43deg);
    }
    
</style>