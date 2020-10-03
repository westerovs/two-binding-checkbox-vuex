<template>
    <div class="page">
        <h1>Page</h1>
        <Minimap />
    </div>
</template>

<script>
import Minimap from "./Minimap"

export default {
    components: {
        Minimap
    }
}
</script>

<style scoped>
    .page {
        margin: 0 auto;
        width: 80vw;
        padding: 20px 0 100vh;
        background: rgba(18, 136, 148, 0.8);
        color: white;
    }
</style>