const mainLang = '日本語';
const subLang = '英語';

const buttons = Array.from(document.querySelectorAll('button[role=tab]'));
const observedButton = buttons.filter(
  (b) => b.innerText === '言語を検出する' || b.innerText.includes('自動検出'),
)[0];
const mainLangButton = buttons.filter((b) => b.innerText === mainLang)[1];
const subLangButton = buttons.filter((b) => b.innerText === subLang)[1];

const mo = new MutationObserver(() => {
  const [ detectedLang, autoDetection ] = observedButton.innerText.split(' - ');

  if (autoDetection !== '自動検出') {
    return;
  }

  detectedLang === mainLang && subLangButton.getAttribute('aria-selected') === 'false' && subLangButton.click();
  detectedLang === subLang && mainLangButton.getAttribute('aria-selected') === 'false' && mainLangButton.click();
});
mo.observe(observedButton, { attributeOldValue: true });
