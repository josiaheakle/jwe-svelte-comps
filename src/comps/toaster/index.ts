import Toaster from "./Toaster.svelte"
import { Toaster as ToastCtrl } from "./ToasterControl.svelte"

const toast = ToastCtrl.open
const clearToast = ToastCtrl.close

export { Toaster, toast, clearToast }
