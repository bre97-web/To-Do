<script setup>
import moment from 'moment'
import {ref} from 'vue'

var month = ref(moment().format('MMM'))
var day   = ref(moment().format('Do'))

setInterval(function() {
    month.value = moment().format('MMM')
    day.value   = moment().format('Do')
},600000)
</script>

<template>
    <p class="font-black text-2xl">
        <h1 class="inline">{{month}}</h1>
        <h2 class="inline bg-clip-text text-transparent bg-gradient-to-tl from-yellow-300 to-red-500">{{day}}</h2>
    </p>
</template>