<template>
    <nav>
        <div class="float-left">
            <a class="button" href="#">ShanThesaurus: {{ msg }}</a>
        </div>
        <div class="float-right">
            <a class="button" @click="test()">Submit An Entry: Clicked {{ count }} times</a>
            <a class="button" href="https://github.com/shantanav/ShanThesaurus" target="_blank">View On GitHub</a>
        </div>
    </nav>
</template>

<script lang="ts">
export default { 
    props: ['msg'],
    data() {
        return { count: 0, }
    },
    methods: {
        test() { this.count++; }
    }
}
</script>

<style scoped>
nav {
    @apply
        w-screen
        fixed
        bg-gray-900
        text-gray-50
        shadow-inner;
}

.button {
    @apply 
        md:text-xl 
        inline-block 
        p-4 
        transition 
        duration-500 
        hover:bg-gray-50 
        hover:text-gray-900;
}
</style>
