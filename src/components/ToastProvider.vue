<template>
  <div class="w-screen h-screen">
    <slot />
    <div class="absolute h-full max-h-screen p-4 max-w-72 flex flex-col overflow-y-auto overflow-x-hidden top-0 right-0">
      <transition-group
        appear
        tag="div"
        :enter-active-class="toast.length > 1 ? 'transform ease-out delay-0 duration-300 transition' : 'transform ease-out duration-300 transition'"
        enter-from-class="translate-x-4 opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0 -translate-y-5"
        move-class="transition ease-in-out duration-500"
      >
        <template v-for="(element, index) in toast" :key="index">
            <div v-if="element" :class="[
                'p-3 rounded-lg border border-solid border-indigo-500 bg-indigo-100 w-full mb-2',
                element.toastType === ToastType.Success ? 'bg-green-100 border-green-500' : '',
                element.toastType === ToastType.Error ? 'bg-red-100 border-red-500' : '',
              ]
            ">
              {{ element.message }}
            </div>
        </template>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { provide } from "vue";
  import { useToast } from "../composables/useToast";
  const { toast } = useToast();
  import { ToastType } from "../types";
  const {
    createToast,
    destroyToast
  } = useToast();
  provide("create-toast", createToast);
  provide("clear-all", destroyToast);


</script>