/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as vscode from 'vscode';
import { QuarkusTaskProvider } from './quarkusTaskProvider';

//let rakeTaskProvider: vscode.Disposable | undefined;
//let customTaskProvider: vscode.Disposable | undefined;
let quarkusTaskProvider: vscode.Disposable | undefined;


export function activate(_context: vscode.ExtensionContext): void {
    quarkusTaskProvider = vscode.tasks.registerTaskProvider(QuarkusTaskProvider.QuarkusType, new QuarkusTaskProvider());		
}

export function deactivate(): void {

	if (quarkusTaskProvider) {
		quarkusTaskProvider.dispose();
	}

}