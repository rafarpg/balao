setInterval(function() {
    var loader = document.querySelector('.loader');
    var color = window.getComputedStyle(loader, null).getPropertyValue('border-top-color');
    loader.style.borderTopColor = (color == 'rgb(52, 152, 219)') ? 'rgb(243, 243, 243)' : 'rgb(52, 152, 219)';
  }, 1000);