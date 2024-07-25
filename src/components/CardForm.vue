<template>
    <div class="card">
        <div class="card-header titulo">
            <slot name="title"></slot>
        </div>
        <div class="card-body">
            <slot name="body"></slot>
        </div>
        <div class="card-action" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style>
    .titulo {
       text-align: left; 
       font-weight: bold;
       font-size: 20px;
       color: #1A2035;
    }
    .destaque {
       text-align: center; 
       font-weight: bold;
       font-size: 20px;
       color: #1A2035;
    }
</style>