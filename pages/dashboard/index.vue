<script setup lang="ts">
definePageMeta({ middleware: "auth" });
const { signIn, signOut, session, status, cookies, getProviders } = useAuth();
</script>

<template>
    <div>
        <button @click="signOut()">
            Sign Out
        </button>
    </div>
    <div>
        <pre>{{ status }}</pre>
        <pre>{{ session?.user }}</pre>
    </div>
</template>