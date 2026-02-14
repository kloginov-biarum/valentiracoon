(function () {
  var question = document.getElementById('question');
  var buttons = document.getElementById('buttons');
  var result = document.getElementById('result');
  var btnYes = document.getElementById('btnYes');
  var btnNo = document.getElementById('btnNo');
  var raccoonWrap = document.querySelector('.raccoon-wrap');
  var sub = document.querySelector('.sub');
  var secondPage = document.getElementById('secondPage');
  var heartsCelebration = document.getElementById('heartsCelebration');

  var HEARTS = ['❤', '💕', '💗', '💖', '💝', '♥'];
  var trailLast = 0;
  var trailThrottle = 80;

  function isFirstPage() {
    return secondPage.classList.contains('hidden');
  }

  function createHeartFall() {
    var heart = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    var el = document.createElement('span');
    el.className = 'heart-fall';
    el.textContent = heart;
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (2 + Math.random() * 2) + 's';
    el.style.animationDelay = Math.random() * 0.5 + 's';
    heartsCelebration.appendChild(el);
    setTimeout(function () {
      el.remove();
    }, 4500);
  }

  btnYes.addEventListener('click', function () {
    for (var i = 0; i < 50; i++) {
      createHeartFall();
    }
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

  document.addEventListener('mousemove', function (e) {
    if (!isFirstPage()) return;
    var now = Date.now();
    if (now - trailLast < trailThrottle) return;
    trailLast = now;
    var heart = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    var el = document.createElement('span');
    el.className = 'heart-trail';
    el.textContent = heart;
    el.style.left = e.clientX + 'px';
    el.style.top = e.clientY + 'px';
    document.body.appendChild(el);
    setTimeout(function () {
      el.remove();
    }, 800);
  });
})();
