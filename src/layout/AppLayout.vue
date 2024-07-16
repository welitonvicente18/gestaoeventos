<template>
    <div class="wrapper">
        <AppSliderBar />
        <div class="main-panel">
            <div class="main-header">
                <div class="main-header-logo">
                    <AppLogoHeader />
                </div>
                <AppNavBar />
            </div>
            <div class="container">
                <div class="page-inner">
                    <RouterView />
                </div>
            </div>
            <AppFooter />
        </div>
    </div>

</template>


<script>
import AppSliderBar from './AppSliderBar.vue';
import AppLogoHeader from './AppLogoHeader.vue';
import AppNavBar from './AppNavBar.vue';
import AppFooter from './AppFooter.vue';

export default {
    components: {
        AppSliderBar, AppLogoHeader, AppNavBar, AppFooter
    }
}
</script>