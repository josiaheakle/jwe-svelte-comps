import type { Component } from "svelte"
import { v4 as uuid } from "uuid"

export type OverlayId = string

export type OverlaySettings<P> = {
	props?: P
	className?: string
}

type OverlayInstance<P extends Record<string, any>> = {
	component: Component<P>
	settings: OverlaySettings<P>
}

class OverlayCtrl {
	instances: { [index: OverlayId]: OverlayInstance<any> } = $state({})

	open = <P extends Record<string, any>>(
		component: Component<P>,
		settings: OverlaySettings<P> = {}
	) => {
		const id = uuid()
		this.instances[id] = {
			component: component,
			settings,
		}
		return id
	}

	close = (id: OverlayId) => {
		delete this.instances[id]
	}
}

export const OverlayController = new OverlayCtrl()
