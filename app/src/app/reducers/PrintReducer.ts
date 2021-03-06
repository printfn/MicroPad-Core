import { MicroPadReducer } from '../types/ReducerType';
import { actions } from '../actions';
import { NoteElement } from 'upad-parse/dist/Note';

export interface IPrintStoreState {
	elementToPrint?: NoteElement;
}

export class PrintReducer extends MicroPadReducer<IPrintStoreState> {
	readonly key = 'print';
	readonly initialState: IPrintStoreState = {};

	constructor() {
		super();

		this.handle((state, action) => ({
			...state,
			elementToPrint: action.payload.result
		}), actions.print.done);

		this.handle(() => ({ ...this.initialState }), actions.clearPrintView);
	}
}
