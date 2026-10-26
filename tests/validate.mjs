import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const htmlFiles = ["index.html", ...readdirSync(join(root, "partials")).map((name) => `partials/${name}`)];
const sourceExtensions = new Set([".css", ".html", ".js"]);
const ignoredAssetPrefixes = ["http://", "https://", "mailto:", "#", "data:"];
const forbiddenClaims = ["Healthcare Research", "Fresh Graduate", "OCR systems", "independent coffee shop"];
const requiredPublicLinks = ["abiekapw@gmail.com", "github.com/abiekaputra", "linkedin.com/in/abiekaputrawulyono", "instagram.com/beka.ptr"];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if ([".git", "node_modules", "artifacts"].includes(entry.name)) return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const allFiles = walk(root);
const combinedHtml = htmlFiles.map((file) => readFileSync(join(root, file), "utf8")).join("\n");

for (const path of allFiles.filter((file) => sourceExtensions.has(extname(file)))) {
  const lineCount = readFileSync(path, "utf8").split("\n").length;
  assert(lineCount <= 300, `${path.replace(root, "")} has ${lineCount} lines; limit is 300`);
}

const assetMatches = [...combinedHtml.matchAll(/(?:href|src)="([^"]+)"/g)].map((match) => match[1]);
for (const asset of assetMatches) {
  if (ignoredAssetPrefixes.some((prefix) => asset.startsWith(prefix))) continue;
  assert(existsSync(join(root, asset)), `Missing local asset: ${asset}`);
}

for (const claim of forbiddenClaims) {
  assert(!combinedHtml.includes(claim), `Forbidden or outdated public claim found: ${claim}`);
}

for (const link of requiredPublicLinks) {
  assert(combinedHtml.includes(link), `Required public contact missing: ${link}`);
}

assert(readFileSync(join(root, "CNAME"), "utf8").trim() === "abiekaputra.is-a.dev", "Unexpected CNAME");
assert((combinedHtml.match(/class="project-link(?: |")/g) ?? []).length === 6, "Expected six selected projects");
assert((combinedHtml.match(/<img(?:\s|>)/g) ?? []).length === 1, "Only the personal portrait should appear on the website");
assert(combinedHtml.includes('src="https://github.com/abiekaputra.png?size=900"'), "Portrait must use the dynamic GitHub avatar endpoint");
assert(!combinedHtml.includes("project-media"), "Project screenshots must not appear on the personal website");

console.log(`Validated ${allFiles.length} files, ${htmlFiles.length} HTML modules, and six selected projects.`);

