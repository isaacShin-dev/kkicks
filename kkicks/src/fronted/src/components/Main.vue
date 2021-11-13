
<template>
<div name = "main-wrapper" id="main-wrapper">

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
        },

        metaInfo: {
    // title 입력하기
    title: 'CultureSupply',
    // link tag 입력하기
    link: [{rel: "canonical", href: 'www.site.com'}],
    // meta tag 입력하기
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1'},
    { vmid: "description", name: "description", content: 'description' }
      //vmid ↑ 메타 태그를 고유하게 만들어준다.
    ]
}
    }
</script>
<style scoped>
    #main-wrapper{
        width: 100%;
        height: 100%;
    }
    #title-wrp{
        width: 50%;
        float: left;
        margin-right: 35px;
    }
    #title{
        font-family: 'Times New Roman', Times, serif;
        font-size: 100px;
        width: 300px;
        margin-left: 60px;
        margin-top: 200px;
        margin-bottom: 0%;
        padding-left: 0%;

    }
#sub-title{
    font-family: 'Courier New', Courier, monospace;
    width: 850px;
    margin-left: 40px;
    text-align: left;
}
#sub-title2{
    width:415px;
    margin-left: 35px;
    text-align: left;
}
#video{
    width:370px;
}
#video-wrp{
    /* float: left; */
    padding-left: 45px;
    width: 370px;
    padding-top: 0%;
    
}

img{
    width: 610px;
    height: 450px;
    margin-top: 175px;
    border: 1px;
    border-style: solid;

}
</style>


<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">