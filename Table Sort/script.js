let table = document.getElementById("grid");

table.addEventListener("click", sort);

function sort(event) {
  if(event.target.tagName != "TH") return;

  let type = event.target.dataset.type;
  let tr = document.querySelectorAll("tbody tr");

  switch (type) {
    case "number":
      let num = [];
      for(let prop of tr){
        num.push(prop.children[0].innerHTML);
      }
      num.sort((a,b) => a-b);
      num.forEach((element,i) => {
        for(let prop of tr){
          if(element != prop.children[0].innerHTML) continue;
          tr[i].before(prop);
          tr = document.querySelectorAll("tbody tr");
          break;
        }
      });
      break;
    case "string":
      let str = [];
      for(let prop of tr){
        str.push(prop.children[1].innerHTML);
      }
      str.sort((a,b) => a.localeCompare(b));
      str.forEach((element,i) => {
        for(let prop of tr){
          if(element != prop.children[1].innerHTML) continue;
          tr[i].before(prop);
          tr = document.querySelectorAll("tbody tr");
          break;
        }
      });
      break;
  }
}