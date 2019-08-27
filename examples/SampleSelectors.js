import {NormalizedCollection} from '../selectors/NormalizedCollection'

export function selectCarsCollection(state: Object): NormalizedCollection {
	const {cars} = state
	return new NormalizedCollection(cars.entities, cars.ids)
}

export function selectCarsList(state: Object): Array<Object> {
	const CloneLots = selectCarsCollection(state)
	return CloneLots.getItems()
}

export function selectCar(state: Object, carId: Number): Object {
	const CloneLots = selectCarsCollection(state)
	return CloneLots.find(carId)
}
