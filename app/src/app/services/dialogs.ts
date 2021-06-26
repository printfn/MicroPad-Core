import * as Vex from 'vex-js';
import * as VexDialog from 'vex-dialog';
import 'vex-js/dist/css/vex.css';
import 'vex-js/dist/css/vex-theme-top.css';

Vex.registerPlugin(VexDialog);
Vex.defaultOptions!.className = 'vex-theme-top';

export class Dialog {
	public static alert = (message: string) => setTimeout(() => Vex.dialog.alert(message), 0);

	public static confirm = (message: string): Promise<boolean> => new Promise(resolve =>
		setTimeout(() => Vex.dialog.confirm({
			message,
			callback: value => resolve(value)
		}), 0)
	)

	public static confirmUnsafe = (unsafeMessage: string): Promise<boolean> => new Promise(resolve =>
		setTimeout(() => Vex.dialog.confirm({
			unsafeMessage,
			callback: value => resolve(value)
		}), 0)
	)

	public static prompt = (message: string): Promise<string | undefined> =>
		new Promise(resolve => {
			setTimeout(() => {
				Vex.dialog.prompt({
					message,
					input: '<input name="vex" type="text" class="vex-dialog-prompt-input" autocomplete="off">',
					callback: value => resolve(value)
				});
			}, 0);
		})

	public static promptSecure = (message: string): Promise<string | undefined> =>
		new Promise(resolve => {
			setTimeout(() => {
				Vex.dialog.open({
					message,
					input: '<input name="vex" type="password" class="vex-dialog-prompt-input" />',
					callback: value => resolve(value.vex)
				});
			}, 0);
		})
}
