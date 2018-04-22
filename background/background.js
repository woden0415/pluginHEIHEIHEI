chrome.storage.local.set({ 'value': 'hello world' }, function () {
  // 通知保存完成。
  message('设置已保存');
});
