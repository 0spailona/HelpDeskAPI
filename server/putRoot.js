function putRootData(ctx){
  ctx.body = `Hello, World from putRootData! ${ctx.params.id}`;
}

module.exports = function (router){
  router.put('/:id', putRootData);
}
