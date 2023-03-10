"use strict";
exports.__esModule = true;
exports.get = exports.latestRegistries = exports.DataRegistries = void 0;
var prismarine_chunk_1 = require("prismarine-chunk");
var minecraft_data_1 = require("minecraft-data");
var prismarine_chunk_2 = require("prismarine-chunk");
var prismarine_registry_1 = require("prismarine-registry");
var loader = require('prismarine-block');
var DataRegistries = /** @class */ (function () {
	function DataRegistries(version) {
		this.minecraft = minecraft_data_1(version);
		var registry = prismarine_registry_1(version);
		// any hack: (typeof BedrockChunk | typeof PCChunk)
		var chunkType = prismarine_chunk_2(version);
		if (typeof chunkType == typeof prismarine_chunk_1.PCChunk) {
			throw Error("only accept bedrock chunk type");
		}
		var bedrockChunkType = chunkType;
		this.chunk = bedrockChunkType;
		this.block = loader(registry);
	}
	return DataRegistries;
}());
exports.DataRegistries = DataRegistries;
exports.latestRegistries = new DataRegistries("bedrock_1.19.62");
function get(version) {
	return new DataRegistries(version);
}
exports.get = get;
