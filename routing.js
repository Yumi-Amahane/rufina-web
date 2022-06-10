contents={
  TITLE: "Rufina-Web-top",
  HEADER: "HEADER",
  CONTENT: "テスト用コンテンツ",
};

function rendering(){
  for (let key in contents){
    console.log("Rendering")
    //console.log(key)
    //console.log(contents[key])
    document.getElementById(key).innerHTML=contents[key];
  }
}

console.log(contents)
rendering()
