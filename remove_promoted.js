document.body.addEventListener('DOMSubtreeModified', function () {
  removePromoted();
});

window.onload(function () {
  removePromoted();
})

function removePromoted() {
  document.querySelectorAll('span.ngb5qd-0.hmXDoq').forEach(function(i) {
    if (i.textContent == 'promoted') {
      i.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
    }
  })
}
