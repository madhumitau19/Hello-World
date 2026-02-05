let more= document.body.querySelector(".more");
let box1= document.body.querySelector(".box-1");
let box2= document.body.querySelector(".box-2");
let box3= document.body.querySelector(".box-3");
let box4= document.body.querySelector(".box-4");

more.addEventListener("mouseover", (e) => {
    more.classList.add('open');
    box1.classList.add('open');
    box2.classList.add('open');
    box3.classList.add('open');
    box4.classList.add('open');
});
// more.addEventListener("mouseleave", (e) => {
//     more.classList.remove('open');
//     box1.classList.remove('open');
//     box2.classList.remove('open');
//     box3.classList.remove('open');
//     box4.classList.remove('open');
// // });
// more.addEventListener("click", (e) => {
//     more.classList.add('open');
//     box1.classList.add('open');
//     box2.classList.add('open');
//     box3.classList.add('open');
//     box4.classList.add('open');
// });
document.addEventListener("click", (e) => {
    more.classList.remove('open');
    box1.classList.remove('open');
    box2.classList.remove('open');
    box3.classList.remove('open');
    box4.classList.remove('open');
});

let light= document.getElementById("light");
let dark= document.getElementById("dark");

dark.addEventListener("click", () =>
    {
        document.body.classList.add('dark');
        dark.innerHTML = "DARK<br>(*)";
        light.innerHTML = "LIGHT<br>()";
    }
)
light.addEventListener("click", () =>
    {
        document.body.classList.remove('dark');
        dark.innerHTML = "DARK<br>()";
        light.innerHTML = "LIGHT<br>(*)";
    }
)