import MessageHandler from '../Handlers/MessageHandler'
import { WAClient } from '../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "./";
export interface ICommand {
	client?: WAClient;
	handler?: MessageHandler;
	run(
		M: ISimplifiedMessage,
		parsedArgs: IParsedArgs
	): Promise<void | never> | void | never;
	config: {
		adminOnly?: boolean;
		aliases?: string[];
		description?: string;
		command: string;
		id?: string;
		category?: TCategory;
		usage?: string;
		dm?: boolean;
		baseXp?: number;
		modsOnly?: boolean;
	};
}

export type TCategory =
	| "👩‍💻coding👩‍💻"
        | "🌚creation🌝"
	| "dev🥴"
	| "fun😄"
	| "games😕"
	| "🤓educative🤓"
	| "general"
	| "👩‍🎤media🤘"
	| "😜Lègéñds😎"
        | "😈nsfw😈"
	| "utils"
	| "weeb"
	| "category";


