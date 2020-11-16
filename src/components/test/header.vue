<template>
    <div class="header">
        <h1 class="header__title">Тест для определения вероятности заражения COVID-19</h1>
        <!-- <div class="header__subtitle">
            <span>Описание:</span> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida bibendum tincidunt mauris, odio scelerisque id sed mattis. 
            Natoque sit cursus id proin mattis arcu fringilla augue. Eu a cursus mattis suscipit enim, lorem ornare consequat ac. Pretium eu leo nibh eget volutpat dui ultrices nullam.
        </div> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
    .header {
        text-align: center;
    }
    .header__title {
        font-size: 34px;
        color: #29304D;
        /* font-weight: 900; */
    }
    .header__subtitle {
        color: #828282;
        font-size: 15px;
    }
    .header__subtitle span {
        color: #29304D;
    }

    @media (max-width: 579px) {
        .header__title {
            font-size: 28px;
        }
    }
    
</style>