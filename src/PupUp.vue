<template>
    <div class="pup-up">
        <h1>PUP UP</h1>
        <Minimap />
    </div>
</template>

<script>
import Minimap from "./Minimap"

export default {
    components: {
        Minimap
    }
};
</script>

<style>

.pup-up {
    position: absolute;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -50%);
    width: 80vw;
    padding: 50px 0;
    background: rgba(8, 36, 148, 0.8);
    color: white;
}
</style>