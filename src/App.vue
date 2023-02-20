<template>
  <div class="flex flex-col items-center justify-center gap-4 w-screen h-screen">
    <button class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md" @click="showInfoToast">
      SHOW INFO TOAST
    </button>

    <button class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md" @click="showSuccessToast">
      SHOW SUCCESS TOAST
    </button>

    <button class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md" @click="showErrorToast">
      SHOW ERROR TOAST
    </button>

    <button class="p-4 bg-indigo-100 border border-solid border-indigo-500 rounded-md" @click="clearAll">
      CLEAR ALL
    </button>
  </div>
</template>

<script setup lang="ts">
  import { useToast } from './composables/useToast';
  import { ToastType } from './constants/injectionKeys';
  const { destroyToast, createToast } = useToast();
  function showInfoToast() {
    createToast(ToastType.Info, 'This is the info message', 3000);
  }

  function showSuccessToast() {
    createToast(ToastType.Success, 'This is the Success message', 3000);
  }

  function showErrorToast() {
    createToast(ToastType.Error, 'This is the Error message', 3000);
  }

  function clearAll() {
    destroyToast();
  }
</script>