<script setup lang="ts">
definePageMeta({ middleware: "auth" });
</script>

<template>
    <div>
        <NuxtLayout name="dashboard">
            <section class="w-full h-full flex flex-col card bg-base-100 p-4 shadow">
                <LazyDashboardHeader title="Metrics"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed lorem non mauris interdum ultricies. Duis congue nisl id posuere semper. Morbi in consequat metus. Vivamus nisi dui, sollicitudin sit amet imperdiet et, dignissim ut diam." />
                <div class="divider"></div>
                <div></div>
            </section>
        </NuxtLayout>
    </div>
</template>