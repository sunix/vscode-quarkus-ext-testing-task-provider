/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as vscode from 'vscode';

export class QuarkusTaskProvider implements vscode.TaskProvider {
	static QuarkusType: string = 'quarkus';
	private quarkusPromise: Thenable<vscode.Task[]> | undefined = undefined;


	public provideTasks(): Thenable<vscode.Task[]> | undefined {
		if (!this.quarkusPromise) {
			this.quarkusPromise = getQuarkusTasks();
		}
		return this.quarkusPromise;
	}

	public resolveTask(_task: vscode.Task): vscode.Task | undefined {
		return undefined;
	}
}

async function getQuarkusTasks(): Promise<vscode.Task[]> {
		let result: vscode.Task[] = [];
		let task =  new vscode.Task({
			type: 'quarkus',
			task: 'quarkus hello'
		}, 'quarkus hello', 'quarkus', new vscode.ShellExecution(`echo hello quarkus ....`));
		result.push(task);
		return result;
}
