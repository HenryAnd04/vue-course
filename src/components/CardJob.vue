<script setup>
import { defineProps } from 'vue';

defineProps({
    
        title:{
        type: String,
        required: true,
        default: 'Senior web developer'
        },
        experience:{
            type: String,
            required: true

        },
        salary:{
            type: String,
            required: true
        }
    }
)

</script>

<template>

    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title">{{ title }}</h3>
            <h5 class="card-text">{{ experience }}</h5>
            <p class="card-text">{{ salary }}</p>
        </div>
    </div>

</template>


<style scoped>
</style>