import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReader } from '@keystatic/core/reader';
import config from '../keystatic.config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(__dirname, '..');

export const reader = createReader(projectDir, config);
