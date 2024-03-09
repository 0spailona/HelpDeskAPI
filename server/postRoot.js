
function postRootData(ctx){
  ctx.body = 'Hello, World from postRootData!';
}

module.exports = function (router){
  router.post('/', postRootData);
}
