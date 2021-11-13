<template>
<h1>raffle page</h1>
</template>

<script>
export default {
        name : 'Raffle',
        props: {
            msg: String
        },
        data() {
            return {
                tags: [],
                show: true
            }
        },
        methods: {
            onsubmit(evt){
                evt.preventDefault()
                alert(JSON.stringify(this.tags))
            }
        }
}
</script>

<style>

</style>