function deleteRootData(ctx){
  ctx.body = `Hello, World from deleteRootData! ${ctx.params.id}`;
}

module.exports = function (router){
  router.delete('/:id', deleteRootData);
}
