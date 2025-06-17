import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            // 将 @ui 映射到实际的目录，比如 src/ui
            '@ui': path.resolve(__dirname, '../src/ui'),
        },
    },
});
