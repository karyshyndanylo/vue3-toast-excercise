<template>
  <div class="flex flex-col items-center justify-center gap-4 w-screen h-screen">
    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click.prevent="createToast(ToastType.Info,'This is the info message', 3000)"
    >
      SHOW INFO TOAST
    </button>
    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click.prevent="createToast(ToastType.Success,'This is the info message', 3000)"
    >
      SHOW SUCCESS TOAST
    </button>
    <button
      class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md"
      @click.prevent="createToast(ToastType.Error,'This is the info message', 3000)"
    >
      SHOW ERROR TOAST
    </button>
    <button class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md" @click="clearAll">
      CLEAR ALL
    </button>
  </div>
</template>

<script setup lang="ts">
  import { inject } from 'vue';
  import { useToast } from './composables/useToast';
  import { ToastType, Toast } from './types';

  // const { destroyToast } = useToast();
  const createToast = <Toast>inject("create-toast");
  const clearAll = inject("clear-all");
</script>