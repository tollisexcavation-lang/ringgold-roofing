/* Tolli's lead-source capture: remembers utm_source (and friends) from the URL
   and writes it into hidden fields on every inspection form, so FormSubmit
   emails show where the lead came from (yardsign, doorhanger, ads, etc.). */
(function () {
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'];
  var KEY = 'tollis_utm';
  var store = {};
  try { store = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { store = {}; }
  var params;
  try { params = new URLSearchParams(window.location.search); } catch (e) { params = null; }
  if (params) {
    var found = false;
    KEYS.forEach(function (k) {
      var v = params.get(k);
      if (v) { store[k] = String(v).slice(0, 100); found = true; }
    });
    if (found) {
      store.first_page = window.location.pathname;
      try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {}
    }
  }
  function fill() {
    var forms = document.querySelectorAll('form.lead-form');
    Array.prototype.forEach.call(forms, function (f) {
      KEYS.forEach(function (k) {
        if (!store[k]) return;
        var input = f.querySelector('input[name="' + k + '"]');
        if (!input) {
          input = document.createElement('input');
          input.type = 'hidden';
          input.name = k;
          f.appendChild(input);
        }
        input.value = store[k];
      });
      var src = f.querySelector('input[name="Lead source"]');
      if (src && store.utm_source) {
        src.value = store.utm_source + (store.utm_medium ? ' / ' + store.utm_medium : '') + (store.utm_campaign ? ' / ' + store.utm_campaign : '');
      }
      var subj = f.querySelector('input[name="_subject"]');
      if (subj && store.utm_source && subj.value.indexOf('[') === -1) {
        subj.value = subj.value + ' [' + store.utm_source + ']';
      }
    });
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', fill); } else { fill(); }
})();
