let input;
let slider;
let button;
let dropdown;
let iframe;
let bouncing = false;
let yOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();// create input box
  input.position(10, 10);// set position of input box
  input.size(300,50);// set size of input box
  input.value('Hello');// set default value of input box
  input.style('font-size', '50px');// set font size of input box
  
  slider = createSlider(20, 50, 32); // create slider
  slider.position(input.x + input.width + 150, 30); // set position of slider
  
  button = createButton('Toggle Bounce'); // create button
  button.position(slider.x + slider.width + 20, 30); // set position of button
  button.mousePressed(toggleBounce); // set button press event
  
  dropdown = createSelect(); // create dropdown
  dropdown.position(button.x + button.width + 20, 15); // set position of dropdown
  dropdown.option('淡江大學');
  dropdown.option('教育科技學系');
  dropdown.option('第三周');
  dropdown.style('font-size', '30px'); // set font size of dropdown
  dropdown.size(200, 50); // set size of dropdown
  dropdown.changed(goToLink); // set dropdown change event
  
  iframe = createElement('iframe'); // create iframe
  iframe.position(100, 100); // set position of iframe
  iframe.size(windowWidth - 200, windowHeight - 200); // set size of iframe
  iframe.attribute('frameborder', '0'); // remove border
}

function draw() {
  background(0); // 修改這行，將背景顏色設為黑色
  textSize(32); // 修改
  text('文字大小',input.x + input.width + 90, 45); // 修改
  let txt = input.value();
  let spacedTxt = txt.split('').join(' ');
  textAlign(CENTER, CENTER);
  textSize(slider.value()); // 修改這行，根據滑桿的值設置文字大小
  fill(255); // 新增這行，將文字顏色設為白色
  
  if (bouncing) {
    yOffset = sin(frameCount * 0.1) * 20; // 讓文字跳動
  } else {
    yOffset = 0;
  }
  
  for (let i = 0; i < width; i += textWidth(spacedTxt) + 20) {
    text(spacedTxt, i, 100 + yOffset); // 修改這行，將Y座標設為100並加上偏移量
  }
}

function toggleBounce() {
  bouncing = !bouncing; // 切換跳動狀態
}

function goToLink() {
  let selected = dropdown.value();
  if (selected === '淡江大學') {
    iframe.attribute('src', 'https://www.tku.edu.tw'); // 在iframe中嵌入網址
  } else if (selected === '教育科技學系') {
    iframe.attribute('src', 'https://www.et.tku.edu.tw'); // 在iframe中嵌入網址
  } else if (selected === '第三周') {
    iframe.attribute('src', 'https://hackmd.io/@yljBsqXlRrKGO44yTylRTg/rk4QTmsi1l'); // 在iframe中嵌入網址
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  iframe.size(windowWidth - 200, windowHeight - 200); // 調整iframe大小
}
