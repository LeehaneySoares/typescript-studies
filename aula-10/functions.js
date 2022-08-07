"use strict";
function montaDiv(name, position) {
    return `
    <div style="text-align: ${position}">
      ${name}
    </div>`;
}
montaDiv('Leehaney', 'left');
montaDiv('Leehaney', 'right');
montaDiv('Leehaney', 'center');
montaDiv('Leehaney', 'down');
function config(props) {
    return props;
}
config({ width: 100, height: 100 });
config('auto');
config('300px');
