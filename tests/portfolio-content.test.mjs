import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

test('portfolio content is updated to Lucas identity', () => {
  const files = [
    read('src/data/portfolio.ts'),
    read('src/layouts/Layout.astro'),
    read('src/pages/index.astro'),
    read('src/pages/about.astro'),
    read('src/pages/works.astro'),
    read('src/pages/contacts.astro'),
  ].join('\n');

  assert.match(files, /Lucas Tabacchi/);
  assert.match(files, /lucastabacchi31@gmail\.com/);
  assert.match(files, /linkedin\.com\/in\/lucas-tabacchi-ab74551a5/i);
  assert.match(files, /Concepción del Uruguay, Entre Ríos/);
  assert.match(files, /AutoDocker/);

  assert.doesNotMatch(files, /\bElias\b/);
  assert.doesNotMatch(files, /Kyiv/i);
  assert.doesNotMatch(files, /!Elias#3519/);
  assert.doesNotMatch(files, /elias@elias/i);
});

test('top navigation keeps only the requested in-page sections', () => {
  const layout = read('src/layouts/Layout.astro');
  const home = read('src/pages/index.astro');

  assert.match(layout, /href="\/#works"/);
  assert.match(layout, /href="\/#skills"/);
  assert.match(layout, /href="\/#about-me"/);
  assert.match(layout, /href="\/#contacts"/);
  assert.doesNotMatch(layout, /<span class="hash">#<\/span>home/);
  assert.doesNotMatch(layout, /nav-lang/);
  assert.match(layout, /<span class="hash">#<\/span>projects/);
  assert.match(layout, /<span class="hash">#<\/span>skills/);
  assert.match(layout, /<span class="hash">#<\/span>about me/);
  assert.match(layout, /<span class="hash">#<\/span>contact/);

  assert.match(home, /section class="hero-section" id="home"/);
  assert.match(home, /section class="section projects-section" id="works"/);
  assert.match(home, /section class="section skills-section" id="skills"/);
  assert.match(home, /section class="section about-section" id="about-me"/);
  assert.match(home, /section class="section contacts-section" id="contacts"/);
});

test('navbar stays pinned to the top while scrolling', () => {
  const styles = read('src/styles/global.css');

  assert.match(styles, /\.navbar\s*\{[\s\S]*position:\s*sticky;/);
  assert.match(styles, /\.navbar\s*\{[\s\S]*top:\s*0;/);
  assert.match(styles, /\.navbar\s*\{[\s\S]*z-index:\s*30;/);
});

test('featured projects render real preview images with overlay treatment', () => {
  const portfolio = read('src/data/portfolio.ts');
  const home = read('src/pages/index.astro');

  assert.match(portfolio, /previewImage:\s*'\/project-previews\/autodocker-home\.png'/);
  assert.match(portfolio, /previewImage:\s*'\/project-previews\/projectflow-home\.png'/);
  assert.match(portfolio, /previewImage:\s*'\/project-previews\/amargo-home\.png'/);

  assert.match(home, /background-image:\s*linear-gradient\(/);
  assert.match(home, /url\(\$\{project\.previewImage\}\)/);
  assert.match(home, /class="proj-preview-overlay"/);
});
