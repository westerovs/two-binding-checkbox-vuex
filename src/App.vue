<template>
    <div>
        <PopUp />
        <Page />
    </div>
</template>

<script>
import PopUp from "./PupUp";
import Page from "./Page"

export default {
    components: {
        PopUp,
        Page
    },
    mounted() {
        // action

        // 1 запрос с сервера
        const payLoad = {
            0: true,
            1: false,
            2: true,
        }

        this.$store.dispatch('placeSchema/server', payLoad)
    }
};
</script>

<style>
* {
    user-select: none;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
}

body {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: rgb(29, 28, 28);
    color: white;
}

input[type=checkbox] {
    padding: 10px;
    width: 25px;
    height: 25px;
    margin: 0 5px;
    outline: 1px solid black;
}
</style>