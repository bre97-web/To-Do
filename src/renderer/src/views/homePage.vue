<template>
    <PageLayout>
        <div class="relative w-full">
            <md-tabs class="sticky top-[0px] z-50">
                <md-tab @click="setCurrentCollection('overview')">Overview</md-tab>
                <md-tab v-for="(e, index) in tasks.getCollections" :key="index" @click="setCurrentCollection(e)">{{ e
                }}</md-tab>
                <md-tab inline-icon @click="openDialog">
                    <md-icon slot="icon">add</md-icon>
                    New
                </md-tab>
            </md-tabs>

            <div>
                <Overview v-if="currentCollection === 'overview'"></Overview>
                <TaskList v-else :tasks="tasks.getTasksByCollection(currentCollection)"></TaskList>
            </div>

            <Teleport to="#app">
                <md-dialog id="createCollectionDialog" draggable modeless transition="grow">
                    <p slot="header">New Collection</p>

                    <form id="createCollectionDialogForm" action="dialog">
                        <md-filled-text-field
                            autofocus
                            label="Collection Name"
                            supportingText="The collection will be removed if there is nothing there in the collection."
                        ></md-filled-text-field>
                    </form>

                    <div slot="footer" class="flex gap-2">
                        <md-text-button @click="closeDialog">Cancle</md-text-button>
                        <md-tonal-button @click="submitDialog">Apply</md-tonal-button>
                    </div>
                </md-dialog>
            </Teleport>
        </div>
    </PageLayout>
</template>

<script lang="ts" setup>
import Overview from '@/components/tasks/TaskOverview.vue'
import { useTaskStore } from '@/store/useTaskStore';
import { ref } from 'vue';
import TaskList from '@/components/tasks/list/TaskList.vue';
import { useTask } from '@/hooks/useTask';

const tasks = useTaskStore()

/**
 * overview是一个特殊的集合，它不做为tasks中的fromCollection过滤目标
 */
const currentCollection = ref('overview')
const setCurrentCollection = (e: string) => currentCollection.value = e

const setDialogOpen = async (e: boolean) => {
    (document.getElementById('createCollectionDialog') as HTMLElement & { show: () => void, close: () => void })[e ? 'show' : 'close']()
}
const openDialog = async () => {
    await setDialogOpen(true)
}
const closeDialog = async () => {
    (document.getElementById('createCollectionDialogForm')?.children.item(0) as HTMLElement & { value: string }).value = ''
    await setDialogOpen(false)
}
const submitDialog = async () => {    
    tasks.push(useTask({
        title: 'Template',
        fromCollection: (document.getElementById('createCollectionDialogForm')?.children.item(0) as HTMLElement & { value: string }).value
    }))
    closeDialog()
    setCurrentCollection((document.getElementById('createCollectionDialogForm')?.children.item(0) as HTMLElement & { value: string }).value)
}
</script>
