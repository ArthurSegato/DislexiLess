<script setup lang="ts">
definePageMeta({ middleware: "auth" });
const { signOut, session } = useAuth();
</script>

<template>
    <NuxtLayout name="dashboard">
        <section class="flex flex-col gap-12 lg:gap-20 px-4 sm:px-12 md:px-16 xl:px-20 overflow-x-hidden">
            <h1>Patients</h1>
            <ul>
                <li>test</li>
            </ul>
        </section>
    </NuxtLayout>
</template>