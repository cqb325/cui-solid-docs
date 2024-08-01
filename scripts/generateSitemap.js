import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import entries from "../.solid/entriesList.js";
import fs from "fs";

const generateLinkArray = (routes) => {
    return routes.reduce((acc, route) => {
        return [
            ...acc,
            { url: route, priority: route == "/" ? 1 : 0.7, changefreq: "weekly" },
        ];
    }, []);
};

(async () => {
    const learnRoutes = entries.learn.map(({ path }) => path);
    const links = [
        ...generateLinkArray(learnRoutes),
    ];
    const stream = new SitemapStream({ hostname: "https://cui.cqb325.cn/" });
    return streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
        fs.writeFileSync("public/sitemap.xml", data, { encoding: "utf-8" })
    );
})();
