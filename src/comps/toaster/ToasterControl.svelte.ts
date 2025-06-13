import { v4 as uuid } from "uuid"

export type ToastId = string

export type ToastProps = {
	content: string

	durationMs: number
}

class ToastCtrl {
	readonly DEFAULT_PROPS: Partial<ToastProps> = {
		durationMs: 5000,
	}

	instances: { [index: ToastId]: ToastProps } = $state({})
	timeouts: { [index: ToastId]: number } = {}

	open = (props: ToastProps): ToastId => {
		props = { ...this.DEFAULT_PROPS, ...props }

		const id = uuid()
		this.instances[id] = props

		setTimeout(() => {
			this.removeInstance(id)
		}, props.durationMs)

		return id
	}

	close = (id: ToastId) => {
		this.removeInstance(id)
	}

	private removeInstance(id: ToastId) {
		if (id in this.instances) delete this.instances[id]
		if (id in this.timeouts) {
			clearTimeout(this.timeouts[id])
			delete this.timeouts[id]
		}
	}
}

export const Toaster = new ToastCtrl()
