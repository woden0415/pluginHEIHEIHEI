/**
 * @description 获取对应键的值
 * @param {需要获取值的键} key
 */
function getObject(key, callback) {
  chrome.storage.local.get(key, function (result) {
    callback(result[key]);
  })
}

var currentUrl = window.location.origin;
getObject('firbidUrls', function (result) {
  if (result instanceof Array && result.includes(currentUrl)) {
    window.location.href = "https://www.csdn.net/"
  }
})
