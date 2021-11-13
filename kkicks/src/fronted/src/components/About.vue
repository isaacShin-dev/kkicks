<template>
<div id = "container">
  <h2>About Kkicks !</h2>
  <h5>This page is going to contains the a lot more info bout this web service in da future</h5>
  <b-card>bootstrap Test </b-card>
    
</div>

</template>

<script>
    export default {
        name : 'About',
        props: {
            msg: String
        },
        data() {
            return {
                tags: [],
            }
                show: true
        },
        methods: {
            onsubmit(evt){
                evt.preventDefault()
                alert(JSON.stringify(this.tags))
            }
        }
    }
</script>


<style scoped>

</style>