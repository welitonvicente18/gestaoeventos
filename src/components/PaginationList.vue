<template>
    <nav>
        <ul class="pagination">
            <li class="page-item">
                <a v-if="props.pagination.first_page_url" class="page-link" href="#" @click.prevent="redirectPagination(props.pagination.first_page_url)">Anterior</a>
            </li>
            <li v-for="link in props.pagination.links" :key="link.label" class="page-item">
                <a v-if="link.label == '1'" :class="link.active ? 'page-link active' : 'page-link'" href="#" @click.prevent="redirectPagination(link.url)">1</a>
                <a v-if="link.label == '2'" :class="link.active ? 'page-link active' : 'page-link'" href="#" @click.prevent="redirectPagination(link.url)">2</a>
                <a v-if="link.label == '3'" :class="link.active ? 'page-link active' : 'page-link'" href="#" @click.prevent="redirectPagination(link.url)">3</a>
                <a v-if="link.label == '4'" :class="link.active ? 'page-link active' : 'page-link'" href="#" @click.prevent="redirectPagination(link.url)">4</a>
            </li>
            <li class="page-item">
                <a v-if="props.pagination" class="page-link" href="#" @click.prevent="redirectPagination(props.pagination.next_page_url)">Próximo</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    pagination: {
        type: Object,
        required: true
    }
});

console.log(props.pagination);
const emit = defineEmits(['pagination']);

function redirectPagination(url) {
    url = url.slice(-20);
    emit(url);
}
</script>
