import { buildFileTree } from "./build-file-tree.mjs";

/**
 *
 * @param {string} rootDir
 * @returns
 */
export async function createNavTree(rootDir) {
	const [learn] = await Promise.all([
		buildFileTree(rootDir),
	]);

	if (
		learn &&
		learn.type === "section"
	) {
		return {
			learn: learn.children,
		};
	}
}
