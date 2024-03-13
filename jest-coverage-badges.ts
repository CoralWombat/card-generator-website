// Make sure you have json-summary as a coverage reporter in your jest config.
// coverageReporters: ['json-summary', 'text', 'lcov']
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { get } from 'https';
import { ok } from 'assert';
import chroma from 'chroma-js';

Promise.resolve().then(async () => {
    const outputDir = join(process.cwd(), 'badges');

    const summaryPath = join(process.cwd(), 'coverage', 'coverage-summary.json');
    const summary = JSON.parse(readFileSync(summaryPath, 'utf8')) as Summary;
    const summaryKey = 'lines';

    const badgeURL = getBadgeURL(summary, summaryKey);
    const badgeFile = await download(badgeURL);
    const badgePath = join(outputDir, `coverage-${summaryKey}.svg`);

    mkdirSync(outputDir, { recursive: true });
    writeFileSync(badgePath, badgeFile, 'utf8');
});

function getBadgeURL(summary: Summary, key: string) {
    const { pct } = summary.total[key];
    ok(typeof pct === 'number', `Something wrong with the ${key} coverage`);

    // https://shields.io/category/coverage
    const coverage = `${pct}${encodeURIComponent('%')}`;
    const f = chroma.scale(['red', 'yellow', '#66FF00']).gamma(2);
    const colour = `${encodeURIComponent(f(pct / 100).toString())}`;
    const url = `https://img.shields.io/badge/coverage-${coverage}-${colour}?logo=jest`;

    return url;
}

async function download(url: string) {
    return new Promise<string>((resolve, reject) => {
        get(url, (res) => {
            let file = '';
            res.on('data', (chunk) => (file += chunk));
            res.on('end', () => resolve(file));
        }).on('error', reject);
    });
}

type Summary = {
    total: any;
    [file: string]: any;
};
