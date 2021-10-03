import * as vscode from 'vscode';
import { ProviderResult } from 'vscode';
import * as path from 'path';


export function activate(context: vscode.ExtensionContext) {
	let factory = new DebugAdapterExecutableFactory(context);
	context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory('mir-intp-dap', factory));
}

export function deactivate() {
    return;
}


class DebugAdapterExecutableFactory implements vscode.DebugAdapterDescriptorFactory {
	context: vscode.ExtensionContext;
	constructor(context: vscode.ExtensionContext) {
        this.context = context;
    }
	// The following use of a DebugAdapter factory shows how to control what debug adapter executable is used.
	// Since the code implements the default behavior, it is absolutely not neccessary and we show it here only for educational purpose.

	createDebugAdapterDescriptor(_session: vscode.DebugSession, executable: vscode.DebugAdapterExecutable | undefined): ProviderResult<vscode.DebugAdapterDescriptor> {
		// param "executable" contains the executable optionally specified in the package.json (if any)

		// use the executable specified in the package.json if it exists or determine it based on some other information (e.g. the session)
        if (!executable) {
			console.log(path.join(this.context.extensionPath, "./bin/mir-intp-dap.exe"));
			executable = new vscode.DebugAdapterExecutable(
                path.join(this.context.extensionPath, "./bin/mir-intp-dap.exe"), [], {}
            );
		}

		// make VS Code launch the DA executable
		return executable;
	}
}
