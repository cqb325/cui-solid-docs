import { format as prettierFormat } from 'prettier/standalone';
import * as prettierPluginBabel from 'prettier/plugins/babel';
import * as prettierPluginEstree from 'prettier/plugins/estree';

function format (code: string) {
    console.log('format...');
    return prettierFormat(code, {
        parser: 'babel-ts',
        plugins: [prettierPluginBabel, prettierPluginEstree],
    });
}

self.addEventListener('message', async ({ data }) => {
    const { event, id, code } = data;

    switch (event) {
    case 'FORMAT':
        self.postMessage({
            id,
            event: 'FORMAT',
            code: await format(code),
        });
        break;
    }
});

export {};
