chrome.storage.local.get('firbidUrls', function (result) {
  var newArr = result['firbidUrls'];
  var str = '';
  if (newArr instanceof Array) {
    newArr.forEach((item, index, arr) => {
      str += `<li class="list-group-item">${item}</li>`
    });
    document.querySelector('#list-firbid').innerHTML = str
  } else {
    document.querySelector('#list-firbid').innerHTML = `<li>列表为空</li>`
  }
})
