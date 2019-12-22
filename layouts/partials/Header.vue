<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <nuxt-link :to="{ name: 'index' }" class="navbar-brand">{{ $auth.loggedIn ? ($auth.user.role == 'client' ? 'Client Dashboard' : 'CRM Dashboard') : 'App' }}</nuxt-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                        <template v-if="!$auth.loggedIn">
                            <li class="nav-item">
                                <nuxt-link :to="{ name: 'auth-signin' }" class="nav-link">Login</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link :to="{ name: 'auth-signup' }" class="nav-link">Register</nuxt-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {{ $auth.user.email + ' (' + $auth.user.role + ')' }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" @click="$auth.logout()">
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </template>
                </ul>
            </div>
        </div>
    </nav>
</template>