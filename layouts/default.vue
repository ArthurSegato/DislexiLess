<script setup lang="ts">
const isNavOpen = ref(false);
</script>

<template>
    <div class="w-full min-h-screen">
        <header class="p-4 flex flex-col fixed w-full z-20 items-end">
            <nav class="navbar bg-base-100 rounded-box shadow-xl bg-opacity-50 backdrop-blur-2xl backdrop-saturate-200">
                <div class="w-full">
                    <NuxtLink to="/" class="btn btn-ghost normal-case text-xl" tabindex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5m0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                        </svg>
                    </NuxtLink>
                </div>
                <div class="hidden lg:flex w-full">
                    <ul class="menu menu-horizontal px-1 w-full">
                        <li>
                            <NuxtLink to="/#services">Services</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#about">About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#pricing">Pricing</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/#contact">Contact</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="w-full justify-end">
                    <div class="join hidden lg:inline">
                        <NuxtLink to="/auth" class="btn join-item" tabindex="0">Sign In</NuxtLink>
                        <NuxtLink to="/auth/register" class="btn btn-primary join-item" tabindex="0">Register</NuxtLink>
                    </div>
                    <label role="button" tabindex="0" class="btn btn-ghost lg:hidden swap swap-rotate">
                        <input type="checkbox" v-model="isNavOpen" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 swap-off fill-current" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 swap-on fill-current" viewBox="0 0 16 16">
                            <path
                                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                    </label>
                </div>
            </nav>
            <ul tabindex="0" v-show="isNavOpen"
                class="menu  dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52 bg-opacity-50 backdrop-blur-2xl backdrop-saturate-200">
                <li>
                    <NuxtLink to="/#services">Services</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/#about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/#pricing">Pricing</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/#contact">Contact</NuxtLink>
                </li>
                <li class="gap-2">
                    <NuxtLink to="/auth" class="btn content-center" tabindex="0">Sign In</NuxtLink>
                    <NuxtLink to="/auth/register" class="btn btn-primary content-center" tabindex="0">Register</NuxtLink>
                </li>
            </ul>
        </header>
        <slot />
        <footer class="footer flex p-10 bg-base-200 justify-evenly">
            <nav>
                <header class="footer-title">Company</header>
                <NuxtLink to="/#services" class="link link-hover">Services</NuxtLink>
                <NuxtLink to="/#about" class="link link-hover">About us</NuxtLink>
                <NuxtLink to="/#pricing" class="link link-hover">Pricing</NuxtLink>
                <NuxtLink to="/#contact" class="link link-hover">Contact</NuxtLink>
                <NuxtLink to="/press" class="link link-hover">Press kit</NuxtLink>
            </nav>
            <nav>
                <header class="footer-title">Legal</header>
                <NuxtLink to="/legal" class="link link-hover">Terms of use</NuxtLink>
                <NuxtLink to="/legal#divider" class="link link-hover">Privacy policy</NuxtLink>
            </nav>
        </footer>
        <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 place-items-center">
            <p>&copy; 2024 DislexiLess</p>
        </footer>
    </div>
</template>