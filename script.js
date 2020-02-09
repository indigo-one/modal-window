function Popup() {
  this.modal = document.querySelector('.modal');
  this.overlay = document.querySelector('.overlay');
  let popup = this;
  this.open = function(content) {
    popup.modal.innerHTML = content;
    popup.overlay.classList.add("open");
    popup.modal.classList.add("open");
  };
  this.close = function() {
    popup.overlay.classList.remove("open");
    popup.modal.classList.remove("open");
  };
  this.overlay.onclick = popup.close;
}
window.onload = function() {
  let p = new Popup();
   document.querySelector(".write").onclick = function() {
    p.open("Написать");
  }
  document.querySelector(".callme").onclick = function() {
    let form = document.querySelector('.for-callme-popup');
    p.open(form.innerHTML);
  }
};
