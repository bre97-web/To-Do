<template>
    <div>
        <md-item v-if="tasks.getGoals.length !== 0">
            <md-list-item
                v-for="e in tasks.getGoals"
                :key="e.index"
                :headline="
                    e?.goalSteps?.compelete
                        ? e?.goalSteps?.goals[e.goalSteps.maxIndex !== 0 ? e.goalSteps.maxIndex - 1 : 0].title
                        : e?.goalSteps?.goals[e.goalSteps.currentIndex].title
                "
                :supporting-text="
                    e?.goalSteps?.compelete ? '' : 'Next times ' + tasks.geuCurrentDate(e)
                "
                @click="setShareItem(e)"
            >
                <!-- Next Step Button -->
                <div slot="start" class="ml-2">
                    <md-standard-icon-button
                        slot="start"
                        :disabled="e?.goalSteps?.compelete"
                        @click="tasks.nextGoal(e)"
                    >
                        <md-icon v-if="!e?.goalSteps?.compelete">radio_button_unchecked</md-icon>
                        <md-icon v-else>check</md-icon>
                    </md-standard-icon-button>
                </div>

                <!-- Remove Button -->
                <div slot="end" class="flex gap-2 items-center justify-end">
                    <LabelLarge>
                        {{
                            !e?.goalSteps?.compelete
                                ? `${e?.goalSteps?.currentIndex || 0 + 1} / ${e?.goalSteps?.maxIndex || 0 + 1}`
                                : `Compeleted`
                        }}
                    </LabelLarge>
                    <md-standard-icon-button @click="tasks.remove(e)">
                        <md-icon>delete</md-icon>
                    </md-standard-icon-button>
                </div>
            </md-list-item>
        </md-item>
        <AllDone v-else></AllDone>
    </div>
</template>

<script lang="ts" setup>
import AllDone from '@/components/tasks/list/internal/AllDone.vue';
import { useTaskStore } from '@/store/useTaskStore'
import { setShareItem } from '@/components/aside/taskProvider';

const tasks = useTaskStore()
</script>
