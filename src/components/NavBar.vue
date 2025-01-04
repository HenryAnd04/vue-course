<script>
    import { RouterLink } from 'vue-router';
</script>

<template>

    <header>
        <div class="header-logo">
            <h1>Henry APP</h1>
        </div>

        <div class="header-links">
            <RouterLink to="/">Services</RouterLink>
            <RouterLink to="/jobs">About</RouterLink>
            <RouterLink to="/contact">Contact</RouterLink>
        </div>
    </header>

</template>

<style scoped>

    header{
        width: 100%;
        background-color: white;
        color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1em;
    }

    .header-logo{
        width: 25%;
    }
    .header-logo img{
        width: 50px;
        height: 50px;
    }

    .header-links{
        /* width: 40%; */
        display: flex;
        gap: 2em;
    }

    .header-links a{
        text-decoration: none;
        color: inherit;
    }

    .header-links a:hover{
        border-bottom: 0.2px solid black;
    }


</style>