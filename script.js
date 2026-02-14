(function () {
  var question = document.getElementById('question');
  var buttons = document.getElementById('buttons');
  var result = document.getElementById('result');
  var btnYes = document.getElementById('btnYes');
  var btnNo = document.getElementById('btnNo');
  var raccoonWrap = document.querySelector('.raccoon-wrap');
  var sub = document.querySelector('.sub');
  var secondPage = document.getElementById('secondPage');

  btnYes.addEventListener('click', function () {
    question.classList.add('hidden');
    buttons.classList.add('hidden');
    raccoonWrap.classList.add('hidden');
    sub.classList.add('hidden');
    secondPage.classList.remove('hidden');
  });

  function moveNoButton() {
    var container = document.getElementById('buttons');
    var w = container.offsetWidth - btnNo.offsetWidth - 20;
    var h = container.offsetHeight - btnNo.offsetHeight - 20;
    var left = 10 + Math.random() * Math.max(0, w);
    var top = 10 + Math.random() * Math.max(0, h);
    btnNo.style.left = left + 'px';
    btnNo.style.top = top + 'px';
    btnNo.style.transform = 'translate(0, 0)';
  }

  btnNo.addEventListener('mouseenter', moveNoButton);
  btnNo.addEventListener('click', function (e) {
    e.preventDefault();
    moveNoButton();
  });
})();
