/* eslint-disable max-len, import/no-unresolved */

export default (app, route, req) => `
  <!doctype html>
  <html lang="en">
    <head>
    </head>
    <body>
      <div id="root">${app}</div>
    </body>
  </html>`;
