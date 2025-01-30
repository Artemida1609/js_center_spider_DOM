'use strict';

// write code here
const walls = document.getElementsByTagName('div');
const spiders = document.getElementsByTagName('img');

const wallHeight = walls[0].style.height / 2;
const wallWidth = walls[0].style.width / 2;

spiders[0].style.position = 'absolute';
spiders[0].style.top += wallHeight;
spiders[0].style.left += wallWidth;
