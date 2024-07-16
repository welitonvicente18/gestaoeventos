<template>
    <div class="card">
        <div class="card-header">
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