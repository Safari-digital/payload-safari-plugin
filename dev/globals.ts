import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const basePath = path.resolve(path.dirname(fileURLToPath(import.meta.url)));
export const fromRoot = (...paths: Array<string>) => path.resolve(basePath, '..', ...paths);
