export enum ToastType {
  Info,
  Success,
  Error
}

export interface Toast {
  id: string,
  toastType: ToastType,
  message: string,
  duration: number,
}