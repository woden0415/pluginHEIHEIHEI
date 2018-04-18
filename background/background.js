chrome.storage.local.set({ 'value': theValue }, function () {
  // 通知保存完成。
  message('设置已保存');
});
