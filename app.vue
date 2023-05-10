<template>
    <navbar msg="Test" /><br>
    <p style="margin-top: 3em">{{ nameCall?.msg }}</p>
</template>

<script setup>
useHead({ title: "ShanThesaurus", })
let { data: nameCall } = await useFetch("/api/hello/Shantanav")
</script>
