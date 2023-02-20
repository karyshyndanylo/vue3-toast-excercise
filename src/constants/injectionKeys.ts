import { InjectionKey, Ref } from "vue";
import { Toast } from "../types";

export const ToastKey: InjectionKey<Ref<Toast>> = Symbol('Toast');