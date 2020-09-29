var wrapper = document.body;
var data = [
  {
    color:"purple",
  },
  {
    color:"turquoise",
  },
  {
   color:"grey",
  }
];
var elements = [];
function character(background){
var that = this;
  this.number = 0;
  this.color= background;
  this.ele= document.createElement("div");
  this.ele.style.backgroundColor = this.color;
  this.ele.style.height="100px";
  this.ele.style.width="200px";
  this.ele.style.borderRadius ="10px";
  this.ele.style.fontSize="18px";
  this.ele.style.textAlign="center";
  this.ele.style.verticalAlign ="";
  this.numberEle= document.createElement("div");
  this.numberEle.innerHTML = this.number;
  this.ele.appendChild(this.numberEle)
  
  this.ele.addEventListener("click", function(){
    that.addUp();
  });
  wrapper.appendChild(this.ele);
}
 character.prototype.addUp = function(){
    this.number++;
    this.numberEle.innerHTML = this.number;
  }
for(var i=0; i<data.length;i++){
  elements.push(new character(data[i].color))
}