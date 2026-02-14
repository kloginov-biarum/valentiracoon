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

  var secondPageFall = document.getElementById('secondPageFall');
  var FALL_PHOTOS = 20;
  var fallIntervalId = null;

  function createFallingItem() {
    if (!secondPageFall || secondPageFall.classList.contains('hidden')) return;
    var isHeart = Math.random() < 0.4;
    var el;
    var duration = 5 + Math.random() * 6;
    var left = Math.random() * 100;
    if (isHeart) {
      el = document.createElement('span');
      el.className = 'falling-mini heart-mini';
      el.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
      el.style.left = left + 'vw';
      el.style.animationDuration = duration + 's';
    } else {
      var num = 1 + Math.floor(Math.random() * FALL_PHOTOS);
      el = document.createElement('img');
      el.className = 'falling-mini';
      el.src = 'assets/fall' + num + '.png';
      el.alt = '';
      el.style.left = left + 'vw';
      el.style.width = (50 + Math.random() * 40) + 'px';
      el.style.animationDuration = duration + 's';
    }
    secondPageFall.appendChild(el);
    setTimeout(function () {
      el.remove();
    }, duration * 1000 + 500);
  }

  function startSecondPageFall() {
    secondPageFall.classList.remove('hidden');
    createFallingItem();
    createFallingItem();
    if (fallIntervalId) clearInterval(fallIntervalId);
    fallIntervalId = setInterval(createFallingItem, 600);
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
    startSecondPageFall();
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
