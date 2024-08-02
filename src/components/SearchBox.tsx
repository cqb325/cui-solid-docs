import {
	RegisterSearchBox,
	RegisterSearchButton,
	RegisterSearchBoxProps,
	RegisterSearchButtonProps,
} from "@orama/searchbox/dist/index.js";
import { OramaClient } from "@oramacloud/client";
import { createEffect } from "solid-js";
import "@orama/searchbox/dist/index.css";
import { isServer } from "solid-js/web";

const client = new OramaClient({
	endpoint: "https://cloud.orama.run/v1/indexes/cui-ms3ibu",
	api_key: "JvOzqGfLUs8WfBF4SlJmkXBKj7m57xc5",
});

export function SearchBox (props: any) {

    if (!isServer) {
		createEffect(() => {
			/**
			 * These function calls create/register web components like
			 * orama-searchbox and orama-search-button at runtime.
			 */
			RegisterSearchBox({
				summaryGeneration: import.meta.env.VITE_ORAMA_SECURE_PROXY,
				oramaInstance: client,
				colorScheme: props.theme || "system",
				backdrop: true,
				resultsMap: {
					description: "content",
				},
				themeConfig: {
					light: {},
					dark: {
						"--border-color-accent": "rgb(147 197 253)",
						"--backdrop-bg-color": "rgb(19 20 24 / 75%)",
					},
				},
				searchMode: 'hybrid'
			});
			RegisterSearchButton({
				colorScheme: props.theme || "system",
				themeConfig: {
					light: {},
					dark: {
						"--search-btn-background-color": "#040816",
					},
				},
			});
		});
	}

    return <div class="sp-search-box">
        <div class="fixed z-10">
            <orama-searchbox />
        </div>
        <orama-search-button />
    </div>
}

declare module "solid-js" {
	namespace JSX {
		interface IntrinsicElements {
			"orama-searchbox": RegisterSearchBoxProps;
			"orama-search-button": RegisterSearchButtonProps;
		}
	}
}
