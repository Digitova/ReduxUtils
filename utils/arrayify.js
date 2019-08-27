// @flow
const arrayify = (object: any): Array<any> => {
	return (typeof object === 'undefined' || object === null)
		? []
		: (object.constructor !== Array)
		? [object]
		: object
}

export default arrayify
