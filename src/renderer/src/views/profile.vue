<template>
    <PageLayout>
        <PageContentLayout>
            <ProfileCard></ProfileCard>
            
            <ListContentLayout>
                <div class="rounded-xl">
                    <ul class="flex flex-wrap gap-2">
                        <li class="hover:elevation relative bg-[var(--md-sys-color-surface-container-low)]">
                            <md-elevation></md-elevation>
                            <LabelLarge class="text-onSurface">Dashboard</LabelLarge>
                            <md-text-button @click="router.push('/dashboard')">Open</md-text-button>
                        </li>
                    </ul>
                </div>
            </ListContentLayout>
        </PageContentLayout>
    </PageLayout>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import ProfileCard from '@/components/profile/ProfileCard.vue'
import PageLayout from '@/layouts/PageLayout.vue';
import PageContentLayout from '@/layouts/PageContentLayout.vue'
import ListContentLayout from '@/layouts/ListContentLayout.vue';

const router = useRouter()
</script>

<style scoped lang="css">
ul li {
    @apply rounded-md p-4 flex flex-col justify-center items-center;
}
</style>
