<script>
import { defineProps } from 'vue';
//import logo from '../assets/logo.jpg';

/* defineProps({
    logo: {
        type: String
    }
}) */
</script>

<template>

    <header>
        <div class="header-logo">
            <img src="../assets//logo.jpg" alt="Logo vue">
        </div>

        <div class="header-links">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
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