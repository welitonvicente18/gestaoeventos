<template>
    <nav class="navbar navbar-header navbar-header-transparent navbar-expand-lg border-bottom">
        <div class="container-fluid">
            <nav class="navbar navbar-header-left navbar-expand-lg navbar-form nav-search p-0 d-none d-lg-flex">
            </nav>

            <ul class="navbar-nav topbar-nav ms-md-auto align-items-center">
                <li
                    class="nav-item topbar-icon dropdown hidden-caret d-flex d-lg-none">
                    <a
                       class="nav-link dropdown-toggle"
                       data-bs-toggle="dropdown"
                       href="#"
                       role="button"
                       aria-expanded="false"
                       aria-haspopup="true">
                        <i class="fa fa-search"></i>
                    </a>
                </li>
                <li class="nav-item topbar-user dropdown hidden-caret">
                    <a class="dropdown-toggle profile-pic"
                       data-bs-toggle="dropdown"
                       href="#"
                       aria-expanded="false">
                        <div class="avatar-sm">
                            <img src="assets/img/profile.jpg"
                                 alt="..."
                                 class="avatar-img rounded-circle" />
                        </div>
                        <span class="profile-username">
                            <span class="op-7">Olá, </span>
                            <span class="fw-bold">{{ nameUser }}</span>
                        </span>
                    </a>
                    <ul class="dropdown-menu dropdown-user animated fadeIn">
                        <div class="dropdown-user-scroll scrollbar-outer">
                            <li>
                                <div class="user-box">
                                    <div class="avatar-lg">
                                        <img
                                             src="assets/img/profile.jpg"
                                             alt="image profile"
                                             class="avatar-img rounded" />
                                    </div>
                                    <div class="u-text">
                                        <h4>{{ nameUser }}</h4>
                                        <p class="text-muted">{{ emailUser }}</p>
                                        <RouterLink :to="{ name: 'usuarioEdit', params: { id: userId } }" class="btn btn-xs btn-secondary btn-sm">Ver Cadastro</RouterLink>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#" @click="logout()"><i class="fa fa-power-off me-2"></i>Sair</a>
                            </li>
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import Cookie from 'js-cookie';

const userId = Cookie.get('_myapp_user_id');
const emailUser = Cookie.get('_myapp_user_email');
const nameUser = Cookie.get('_myapp_user_name');

function logout() {
    Cookie.remove('_myapp_user_id');
    Cookie.remove('_myapp_user_email');
    Cookie.remove('_myapp_user_name');
    window.location.href = '/login';
}
</script>