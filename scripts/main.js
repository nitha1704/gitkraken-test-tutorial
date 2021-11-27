greeting();
addTime();

function greeting() {
  console.log("hello world");
}

function hello() {
  console.log("hello hell");
}

function addTime() {
  const demo = document.querySelector(".demo");
  let num = 0;

  let count = setInterval(() => {
    num += 1;
    demo.innerHTML = num;

    if (num === 2) {
      clearInterval(count);
    }

    console.log(num)
  }, 1000);
}
