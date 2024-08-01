import { createNavTree } from "./create-nav-tree.mjs";
import { createSolidCollectionDir } from "./utils/create-dir.mjs";
import { writeFile } from "./utils/write-file.mjs";
import { createFlatEntryList } from "./create-flat-entry-list.mjs";

export const languages = ["pt-br"];
const projects = ["components"];
export const COLLECTIONS_ROOT = "src/routes";

(async () => {
	const tree = await createNavTree(COLLECTIONS_ROOT);
	await createSolidCollectionDir();

	const defaultFlatEntries = {
		learn: createFlatEntryList(tree.learn, []),
	};
	console.log(tree);
	const projectTrees = {};
	const projectFlatEntries = {};

	// for (const project of projects) {
	// 	projectTrees[project] = await createNavTree(
	// 		`${COLLECTIONS_ROOT}/${project}`
	// 	);

	// 	projectFlatEntries[project] = {
	// 		learn: await createFlatEntryList(projectTrees[project].learn, [])
	// 	};

	// 	writeFile(`${project}-tree.ts`, projectTrees[project]);
	// 	writeFile(`${project}-flat-entries.ts`, projectFlatEntries[project]);

	// 	// for (const locale of languages) {
	// 	// 	const entryTitles = await createI18nEntries(
	// 	// 		projectFlatEntries[project],
	// 	// 		locale,
	// 	// 		project
	// 	// 	);

	// 	// 	writeFile(`${project}-flat-entries-${locale}.ts`, entryTitles);
	// 	// 	writeFile(`${project}-tree-${locale}.ts`, {
	// 	// 		learn: await createI18nTree(
	// 	// 			projectTrees[project].learn,
	// 	// 			locale,
	// 	// 			project
	// 	// 		),
	// 	// 		reference: await createI18nTree(
	// 	// 			projectTrees[project].reference,
	// 	// 			locale,
	// 	// 			project
	// 	// 		),
	// 	// 	});
	// 	// }
	// }

	// for (const locale of languages) {
	// 	const entryTitles = await createI18nEntries(defaultFlatEntries, locale);
	// 	writeFile(`flat-entries-${locale}.ts`, entryTitles);
	// 	writeFile(`tree-${locale}.ts`, {
	// 		learn: await createI18nTree(tree.learn, locale),
	// 		reference: await createI18nTree(tree.reference, locale),
	// 	});
	// }

	await Promise.all([
		writeFile("tree.ts", tree),
		writeFile("entriesList.js", defaultFlatEntries, true),
		writeFile("flat-entries.ts", defaultFlatEntries),
	]);
	console.log('end...');
})();
