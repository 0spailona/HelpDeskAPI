const fs = require('fs');

/*try {
  let data = fs.readFileSync('saveData.json', 'utf8');
  console.log(data);
} catch(e) {
  console.log('Error:', e.stack);
}*/


function getRootData(ctx) {
  ctx.body = 'Hello, World from getRootData!';
}

function getRootDataWithDescription(ctx) {
  const id = ctx.params.id;
  ctx.body = `Hello, ${id} from getRootData!`;
}

module.exports = function (router) {
  router.get('/:id', getRootData);
  router.get('/:id/full', getRootDataWithDescription);
}
