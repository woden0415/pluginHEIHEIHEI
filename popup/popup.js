var urlKey = 'firbidUrls';

document.querySelector('.btn-add').addEventListener('click', function(){
  chrome.tabs.query({ active: true }, function (tab) {
    var seletedUrl = getDomain(tab);
    getObject(urlKey, function (firbidUrlsObj){
      var arr;
      // @TODO 先判断有没有urlKey这个变量东西，然后在判断判断后面有没有值
      if (firbidUrlsObj && firbidUrlsObj[urlKey] instanceof Array){
        arr = firbidUrlsObj[urlKey]
      } else {
        arr = []
      }
      arr.push(seletedUrl)
      chrome.storage.local.set({ urlKey: arr }, function () {
        // 通知保存完成。
        console.log('设置已保存');
      });
    });
  });
});


document.querySelector('.btn-get').addEventListener('click', function(){
  getObject(urlKey, function(result){
    console.log(result)
  })
})
/**
 * 获取当前tab的url
 * @param {当前标签页} tab
 */
function getDomain(tab) {
  var urlStr = JSON.stringify(tab[0].url);
  var urlArr = urlStr.split('/');
  return `${urlArr[0].substr(1)}//${urlArr[2]}`;
}

/**
 * @description 获取对应键的值
 * @param {需要获取值的键} key
 */
function getObject(key, callback) {
  chrome.tabs.query({ active: true }, function (tab) {
    chrome.storage.local.get(key, function (result) {
      callback(result);
    })
  })
}
