import Overlay from "./Overlay.svelte"
import { OverlayController } from "./OverlayControl.svelte"

const openOverlay = OverlayController.open
const closeOverlay = OverlayController.close

export { Overlay, openOverlay, closeOverlay }
