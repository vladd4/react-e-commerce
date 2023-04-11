window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".toTop-btn").classList.add("show-top");
  } else {
    document.querySelector(".toTop-btn").classList.remove("show-top");
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const Totop = () => {
  return (
    <div className="toTop-btn" onClick={toTop}>
      <img
        className="top-img"
        src="https://www.seekpng.com/png/full/255-2557821_scroll-to-top-icon-scroll-top-png.png"
        alt=""
      ></img>
    </div>
  );
};
export default Totop;
