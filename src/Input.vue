<template>
    <input
        class="minimap__input"
        type="checkbox"

        @change="mutant(index)"

        v-model="checkedBroken"
    />
</template>

<script>
export default {
    props: {
        index: String
    },
    data() {
        return {
            arr: true
        }
    },

    methods: {
        mutant(id) {
            this.$store.commit('changeCheck', id)
            return this.$store.state.checked[id]
        },
    },

    computed: {
        checked() {
            return this.$store.state.checked[this.index]
        },

        checkedBroken: {
            get: function() {
                return this.$store.state.checked[this.index]
            },

            set: function(id) {
                this.$store.commit('changeCheck', id)
            }
        },
    },
}
</script>

<style>

</style>