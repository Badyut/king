/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "alive",
                        aliases: ["Jinda?", "oi", "kahaho"],
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}alive`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://www.whatspaper.com/wp-content/uploads/2022/02/hd-kakashi-hatake-wallpaper-whatspaper-17.jpg";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.image,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.jpeg,
				caption: `Hello there, I am *KINGSLEY-BOT* a WhatsApp BOT deployed by my ${this.client.config.prefix}owner . I am online now. Use *${this.client.config.prefix}help* to access my commandlist. \n`,
			}
		);
	};
}
