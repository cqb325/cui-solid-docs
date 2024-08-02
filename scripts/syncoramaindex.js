const ORAMA_PRIVATE_API_KEY = process.env.ORAMA_PRIVATE_API_KEY;
import pkg from "fast-glob";
import fs from "fs";
import path from "path";
import { CloudManager } from '@oramacloud/client'

const manager = new CloudManager({ api_key: ORAMA_PRIVATE_API_KEY })
const indexManager = manager.index('mob0b9lhmjuve2a5xbf5wixy')

// Empty data
await indexManager.empty();

console.log("Index cleared.............");


const json = pkg.sync("**/*.json", { cwd: '.orama' });

console.log(json);

for (let i = 0; i < json.length; i++) {
    const file = json[i];
    const data = JSON.parse(fs.readFileSync(path.resolve('.orama/' + file), 'utf8'));
    await indexManager.insert(data);

    console.log("insert data: ", file);
}


await indexManager.deploy()

console.log("deploy end.............");
