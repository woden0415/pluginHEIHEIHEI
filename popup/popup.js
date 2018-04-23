var urlKey = 'firbidUrls';

document.querySelector('.btn-add').addEventListener('click', function(){
  chrome.tabs.query({ active: true }, function (tab) {
    var seletedUrl = getDomain(tab);
    getObject(urlKey, function (result){
      var arr = []
      if (result instanceof Array) {
        result.push(seletedUrl)
        arr = result
      } else {
        arr = [seletedUrl]
      }
      chrome.storage.local.set({ 'firbidUrls': arr }, function(){
        console.log('添加成功')
      })
    });
  });
});

document.querySelector('.btn-get').addEventListener('click', function(){
  getObject(urlKey, function(result){
    alert(JSON.stringify(result))
  })
})

document.querySelector('.btn-del').addEventListener('click', function(){
  chrome.storage.local.remove(urlKey, function(){
    console.log('clear success!')
  })
})

