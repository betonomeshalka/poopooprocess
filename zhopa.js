'use strict';
const zhopa = 'thequickbrownfoxjumpsoverthelazydog1234567890THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG';
let kakaha = '';
for (let step = 0; step < 8; step++) {
  const form = zhopa[Math.floor(Math.random() * zhopa.length)];
  kakaha += form;
}
console.log(kakaha);