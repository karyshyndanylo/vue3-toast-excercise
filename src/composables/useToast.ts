import uuid4 from "uuid4";
import { Ref, ref } from "vue";
import { Toast, ToastType } from "../types";


const toast: Ref<Toast[]> = ref([]);
export function useToast() {
  const createToast = (toastType: ToastType, message: string, duration: number = 3000) => {
    const id = uuid4();
    toast.value.push({
      id,
      toastType,
      message: `${message}`,
      duration,
    });

    setTimeout(() => clearToast(id), duration)
    return toast;
  }

  const clearToast = (id: string) => {
    toast.value = toast.value.filter((entry) => entry.id !== id)
  }

  const destroyToast = () => {
    toast.value = [];
  }

  return { toast, createToast, destroyToast };
}