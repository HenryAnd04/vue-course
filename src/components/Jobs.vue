<script setup>
import CardJob from './CardJob.vue';
import jobs from '../data/jobs';
console.log(jobs);

</script>

<template>
    <div class="jobs-section">
        <h2>Jobs as a Developer</h2>

        <div class="card-jobs">
            <CardJob 
            v-for='job in jobs'
            :key="job.id"
            :title="job.title"
            :experience="job.experience"
            :salary="job.salary"
            />
        </div>
    </div>
</template>

<style scoped>
    .jobs-section{
        margin: 4% auto;
        background-color: black;
        height: auto;
        padding: 1em 1em;
    }

    .jobs-section h2{
        color: white;
        text-align: center;
    }
    .card-jobs{
        margin-top: 2em;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>