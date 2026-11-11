document.getElementById('submitButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputField').value;
    document.getElementById('outputLabel').textContent = inputText * 2;
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(() => console.log('Service Worker enregistré'))
    .catch(err => console.error('Erreur SW:', err));
}