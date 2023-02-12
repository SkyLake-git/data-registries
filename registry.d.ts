import { Block } from 'prismarine-block'
import { BedrockChunk } from 'prismarine-chunk'
import { IndexedData } from 'minecraft-data'

export class DataRegistries {

	minecraft: IndexedData
	chunk: typeof BedrockChunk
	block: typeof Block

	constructor(version: string)
}

export let latestRegistries: DataRegistries

export function get(version: string): DataRegistries
