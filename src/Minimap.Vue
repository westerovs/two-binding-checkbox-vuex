<template>
    <div class="minimap">

        <Input
            v-for="key of Object.keys(seats)"
            :key="key"
            :index="key"

            class="minimap__input"
        />

    </div>
</template>

<script>
import Input from './Input'

export default {
    components: {
        Input
    },
    computed: {
        seats() {
            return this.$store.state.placeSchema.checked
        },
    }
}
</script>

<style scoped>
.minimap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    width: 30%;
    height: 100%;
}

.minimap__input {
    width: 50px;
    height: 50px;
    background: red;
}

pre {
    color: white;
}
</style>
