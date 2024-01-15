<script setup lang="ts">
const { session, signOut } = useAuth()
const isNavOpen = ref(false);
const isMenuOpen = ref(false);
</script>

<template>
    <div class="w-full h-screen flex flex-col">
        <header class="p-4 flex flex-col w-full relative z-10 items-end">
            <nav class="navbar bg-base-100 shadow-xl rounded-box">
                <div class="w-full">
                    <label role="button" tabindex="0" class="btn btn-ghost swap swap-rotate">
                        <input type="checkbox" v-model="isNavOpen" />
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 swap-off fill-none stroke-current"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 swap-on fill-current" viewBox="0 0 16 16">
                            <path
                                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                    </label>
                </div>
                <div class="w-full justify-center">
                    <NuxtLink to="/dashboard" class="btn btn-ghost normal-case text-xl">
                        DislexiLess
                    </NuxtLink>
                </div>
                <div class="w-full justify-end">
                    <button @click="isMenuOpen = !isMenuOpen" class="btn btn-ghost btn-circle avatar"
                        v-if="session?.user?.image">
                        <NuxtImg :src="session.user.image" class="w-10 rounded-full" />
                    </button>
                    <button @click="isMenuOpen = !isMenuOpen" class="btn btn-ghost btn-circle avatar placeholder" v-else>
                        <div class="bg-neutral text-neutral-content rounded-full w-10">
                            <span>{{ session?.user?.name?.charAt(0) }}</span>
                        </div>
                    </button>
                </div>
            </nav>
            <ul class="menu absolute top-20 bg-base-200 w-40 rounded-box mt-3 p-2" v-show="isMenuOpen">
                <li>
                    <NuxtLink to="/dashboard/settings">Settings</NuxtLink>
                </li>
                <li>
                    <button @click="signOut()">Sign Out</button>
                </li>
            </ul>
        </header>
        <div class="flex h-full grow">
            <div class="flex z-10 items-center m-2" v-show="isNavOpen">
                <ul class="menu bg-base-100 p-2 rounded-box">
                    <li>
                        <NuxtLink to="/dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                            </svg>
                            <p class="hidden md:inline">Patients</p>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard/info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                            </svg>
                            <p class="hidden md:inline">Data</p>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/dashboard/settings">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p class="hidden md:inline">Settings</p>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="p-4 w-full">
                <slot />
            </div>
        </div>
    </div>
</template>