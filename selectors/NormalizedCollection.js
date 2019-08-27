// @flow

type Entities<EntityType> = {
	[id: number]: EntityType
}

export default class NormalizedCollection<EntityType> {
	entities: Entities<EntityType>
	result: Array<number>

	constructor(entities: Entities<EntityType>, result: Array<number>) {
		this.entities = entities
		this.result = result
	}

	getItems = (): Array<EntityType> => {
		try {
			if (this.result) {
				return this.result.map(index => this.entities[index]).filter((item)=>typeof item !== 'undefined')
			}
		} catch (e) {}

		return []
	}

	find = (id: number): EntityType | null =>  {
		if(typeof this.entities === 'undefined' || typeof this.entities[id] === 'undefined') {
			return null
		}
		return this.entities[id]
	}
}
