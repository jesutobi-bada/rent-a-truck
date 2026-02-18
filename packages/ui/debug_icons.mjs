import * as icons from '@hugeicons/core-free-icons';
import fs from 'fs';

const searchTerms = ['cart', 'shopping', 'briefcase', 'chart', 'analytics', 'tick', 'check', 'steering', 'wheel'];
const results = {};

searchTerms.forEach(term => {
    results[term] = Object.keys(icons).filter(k => k.toLowerCase().includes(term));
});

fs.writeFileSync('found_icons.txt', JSON.stringify(results, null, 2));
