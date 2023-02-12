import { BedrockChunk, PCChunk } from "prismarine-chunk";
import dataLoader from 'minecraft-data'
import chunkLoader from 'prismarine-chunk'
import registryLoader from 'prismarine-registry'
const loader = require('prismarine-block')

export class DataRegistries {

	minecraft
	chunk
	block

	constructor(version) {
		this.minecraft = dataLoader(version)

		let registry = registryLoader(version)

		// any hack: (typeof BedrockChunk | typeof PCChunk)
		/**
		 * @type {any}
		 */
		let chunkType = chunkLoader(version)

		if (typeof chunkType == typeof PCChunk) {
			throw Error("only accept bedrock chunk type")
		}

		let bedrockChunkType = chunkType
		this.chunk = bedrockChunkType

		this.block = loader(registry)
	}
}


export let latestRegistries = new DataRegistries("bedrock_1.19.60")

export function get(version) {
	return new DataRegistries(version)
}
