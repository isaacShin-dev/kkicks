
<template>
<div name = "main-wrapper">
    <h2>Kkicks</h2>
    <div>WHERE you can be the master of sneaker culture</div>
    <div>"Kkicks"는 Korea 와 Kicks 의 합성어 입니다 !!</div>
    

</div>
</template>

<script>
    export default {
        name : 'Main',
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


<style scoped>

</style>