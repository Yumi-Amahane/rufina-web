contents={
  TITLE: "Rufina-Web-top",
  HEADER: "HEADER",
  CONTENTS: "テスト用コンテンツ",
};

function rendering(){
  for (let key in contents){
    document.getElementById(key)=contents[key];
  }
}

rendering()
