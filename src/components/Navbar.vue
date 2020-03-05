<template>
<nav class="navbar is-fixed-top" role="navigation"> 
    <div class="container">
        <div class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item"><router-link tag="button" class="button is-dark is-outlined nav-element" to="/">Bark</router-link></div>
                <div class="navbar-item"><router-link tag="button" class="button is-primary is-outlined nav-element" to="/posts">post</router-link></div>
                <div class="navbar-item"><router-link tag="button" class="button is-link is-outlined nav-element" to="/login">log-in</router-link></div>
            </div>
        </div>
    </div>
</nav>
</template>

<style scoped>
    .nav-element {
        width: 100%;
        top: 0px;
    }
    
</style>

