<script setup lang="ts">
definePageMeta({ middleware: "auth" });
const { session } = useAuth();
</script>

<template>
    <NuxtLayout name="dashboard">
        <section class="w-full h-full flex flex-col card bg-base-100 p-4 shadow">
            <LazyDashboardHeader title="Patients"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed lorem non mauris interdum ultricies. Duis congue nisl id posuere semper. Morbi in consequat metus. Vivamus nisi dui, sollicitudin sit amet imperdiet et, dignissim ut diam." />
            <div class="divider"></div>
            <div class="overflow-x-auto">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Contact</th>
                            <th>Guardian</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="flex items-center gap-3">
                                    <div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div class="font-bold">Hart Hagerty</div>
                                        <button class="btn btn-xs">
                                            1A3B5C
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current"
                                                viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                    d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button class="btn btn-sm">
                                    1A3B5C
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current"
                                        viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                </button>
                            </td>
                            <td class="join join-vertical">
                                <NuxtLink to="mailto:example@email.com" class="btn btn-sm join-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                        class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.24a2.25 2.25 0 0 1-1.07 1.92l-7.5 4.61a2.25 2.25 0 0 1-2.36 0l-7.5-4.61a2.25 2.25 0 0 1-1.07-1.92v-.24" />
                                    </svg>
                                    example@email.com
                                </NuxtLink>
                                <NuxtLink to="tel:example@email.com" class="btn btn-sm join-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                        class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                    +351 931 198 155
                                </NuxtLink>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button class="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </NuxtLayout>
</template>