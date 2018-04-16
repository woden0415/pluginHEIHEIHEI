document.querySelector(".btn").addEventListener("click", function(){
  chrome.tabs.query({ active: true }, function (tab) {
    alert(JSON.stringify(tab[0]))
    var url = tab[0].url;
  });
})
