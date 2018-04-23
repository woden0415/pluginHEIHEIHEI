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
  chrome.storage.local.get(key, function (result) {
    callback(result[key]);
  })
}
