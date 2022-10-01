import path from 'path';
import { Page } from '../baseTypes.js';
import { env } from '../env/server.mjs';


export function fetchContent<T>(path: string[]) {
    return get<T>(path.join("/"));
}

export async function fetchChildren(path?: string, paths?: string[]) {
    paths = paths ?? [];
    path = path ? (`${path}/`) : "";
    const children = await get<Page[]>(`${path}children`)
    for await (const child of children) {
        const p = `${path}${child.routeSegment}`;
        paths.push(p);
        await fetchChildren(p, paths);
    }
    return paths;
}

export async function get<T>(path?: string) {
    const response = await fetch(`${env.CONTENT_API_URL}/${path ?? ""}`, {
        headers: {
            Accept: "application/json"
        }
    });
    const data = await response.json();
    if (response.ok) {
        return data as T;
    }
    console.error("Error getting data", data)
    throw new Error("Error getting");
}