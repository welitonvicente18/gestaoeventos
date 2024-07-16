<template>
    <section>
        <div class="page-header">
            <h3 class="fw-bold mb-3">
                <slot name="title"></slot>
            </h3>
            <ul class="breadcrumbs mb-3">
                <li class="nav-home">
                    <routerLink :to="{ name: 'home' }">
                        <fa :icon="['fas', 'house']" />
                    </routerLink>
                </li>
                <li class="separator" v-if="$slots.navegacao1">
                    <fa :icon="['fas', 'chevron-right']" />
                </li>
                <li class="nav-item" v-if="$slots.navegacao1">
                    <slot name="navegacao1"></slot>
                </li>
                <li class="separator" v-if="$slots.navegacao2">
                    <fa :icon="['fas', 'chevron-right']" />
                </li>
                <li class="separator" v-if="$slots.navegacao2">
                    <slot name="navegacao2"></slot>
                </li>
                <li class="separator" v-if="$slots.navegacao3">
                    <fa :icon="['fas', 'chevron-right']" />
                </li>
                <li class="nav-item" v-if="$slots.navegacao3">
                    <slot name="navegacao3"></slot>
                </li>
            </ul>
        </div>
    </section>
</template>