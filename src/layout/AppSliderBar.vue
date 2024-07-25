<template>
    <div class="sidebar" data-background-color="dark">
        <div class="sidebar-logo">
            <!-- Logo Header -->
            <div class="logo-header" data-background-color="dark">
                <a href="index.html" class="logo">
                    <img
                         src="assets/img/kaiadmin/logo_light.svg"
                         alt="navbar brand"
                         class="navbar-brand"
                         height="20" />
                </a>
                <div class="nav-toggle">
                    <button class="btn btn-toggle toggle-sidebar">
                        <i class="gg-menu-right"></i>
                    </button>
                    <button class="btn btn-toggle sidenav-toggler">
                        <i class="gg-menu-left"></i>
                    </button>
                </div>
                <button class="topbar-toggler more">
                    <i class="gg-more-vertical-alt"></i>
                </button>
            </div>
            <!-- End Logo Header -->
        </div>
        <div class="sidebar-wrapper scrollbar scrollbar-inner">
            <div class="sidebar-content">
                <ul class="nav nav-secondary">
                    <li class="nav-item active">
                        <a data-bs-toggle="collapse"
                           href="#dashboard"
                           class="collapsed"
                           aria-expanded="false">
                            <fa :icon="['fas', 'house']" />
                            <p>&nbsp;Dashboard</p>
                        </a>
                    </li>
                    <li class="nav-section">
                        <span class="sidebar-mini-icon">
                            <i class="fa fa-ellipsis-h"></i>
                        </span>
                        <h4 class="text-section">Módulos</h4>
                    </li>
                    <li class="nav-item">
                        <a data-bs-toggle="collapse" href="#evento">
                            <fa :icon="['fas', 'layer-group']" />
                            <p>&nbsp;Eventos</p>
                            <span class="caret"></span>
                        </a>
                        <div class="collapse" id="evento">
                            <ul class="nav nav-collapse">
                                <li>
                                    <router-link :to="{ name: 'eventoform' }"><span class="sub-item">Adicionar Eventos</span></router-link>
                                </li>
                                <li>
                                    <routerLink :to="{ name: 'eventoListar' }"><span class="sub-item">Gerenciar Eventos</span></routerLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a data-bs-toggle="collapse" href="#sidebarLayouts">
                            <fa :icon="['fas', 'layer-group']" />
                            <p>&nbsp;Usuários</p>
                            <span class="caret"></span>
                        </a>
                        <div class="collapse" id="sidebarLayouts">
                            <ul class="nav nav-collapse">
                                <li>
                                    <routerLink :to="{ name: 'usuarioForm' }"><span class="sub-item">Adicionar Usuário</span></routerLink>
                                </li>
                                <li>
                                    <routerLink :to="{ name: 'usuarioListar' }"><span class="sub-item">Gerenciar Usuários</span></routerLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>