<template>
    <header id="headerArea">
    <ul id="menuList">
        <li id="logo"><router-link to='/'><img src="../../assets/logo.png"/></router-link></li>
        <li id="cal" class="menu-button"><a href="#">Calender</a></li>
        <li id="news" class="menu-button">Community</li>
        <li id="ev" class="menu-button"><a href="">News</a></li>
        <li id="ra" class="menu-button"><router-link to='/raffle'>Raffle</router-link></li>
    </ul>

    </header>
</template>
<script>
export default {
    name: 'main-header'
}
</script>
<style scoped>

    #logo img{
        height: 100px;
        width: 100px;
        margin: 0%;
    }
    #headerArea {
        height: 100px;
        margin-bottom: 30px;    
        border-bottom: 1.5px;
        border-bottom-style: solid;
    }
    #menuList{
        width: 600px;

    }
    #menuList li{
        float: left;
        font-size: 12pt;
        font-family: han sans-serif;
        font-weight: bold;
        list-style: none;
    }
    #menuList li a{
        text-decoration: none;
        color: black;
    }
    .menu-button{
        margin-top: 40px;
        margin-left: 35px;
    }

    /* @media (max-width: 800px) {
        #headerArea{
            display: none;
        } 
        }*/

 
</style>

