// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="shortcut icon" type="image/ico" href="/logo.svg" />
                    <link rel="icon" type="image/svg+xml" href="/logo.svg" />
                    {assets}
                </head>
                <body>
                    <div id="app">{children}</div>
                    <script src="https://hm.baidu.com/hm.js?f33b802084782420c8ec8ddcf3d4535d"></script>
                    {scripts}
                </body>
            </html>
        )}
    />
));
