import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  const publicDir = path.resolve(projectRoot, 'public');
  const siteRenderFile = path.resolve(publicDir, 'site-render.json');

  return {
    base: process.env.NODE_ENV === 'production' ? '/catalon2026/' : '/',
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'site-render-save-plugin',
        configureServer(server) {
          server.middlewares.use('/__save-project', async (req, res, next) => {
            if (req.method !== 'POST') {
              next();
              return;
            }

            try {
              const chunks: Buffer[] = [];

              for await (const chunk of req) {
                chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
              }

              fs.mkdirSync(publicDir, { recursive: true });
              fs.writeFileSync(siteRenderFile, Buffer.concat(chunks).toString('utf8'), 'utf8');

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
            } catch {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: false }));
            }
          });

          server.middlewares.use('/__reset-project', (req, res, next) => {
            if (req.method !== 'POST') {
              next();
              return;
            }

            try {
              fs.mkdirSync(publicDir, { recursive: true });
              fs.writeFileSync(
                siteRenderFile,
                JSON.stringify({ html: '', css: '', savedAt: '', projectData: null }, null, 2),
                'utf8',
              );

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: true }));
            } catch {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ ok: false }));
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': projectRoot,
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify: file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
