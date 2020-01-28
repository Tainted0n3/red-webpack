import leftPad from './leftpad';

const serNos = [6934, 23111, 23114, 1001, 211161, 4];
const strSNos = serNos.map(sn => leftPad(sn, 8, '0'));

const partEl = document.getElementById('part-list');
const strList = serNos.reduce(
  (acc, element) => (acc += `<li>${leftPad(element, 8, '0')}</li>`),
  ''
);

partEl.innerHTML = strList;
