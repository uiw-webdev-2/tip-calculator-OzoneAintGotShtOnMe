/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

  const formatter = (locale, currency, value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };

  const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
    
    console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip)}
      Total:          ${formatter(locale, currency, total)}
    `);
    alert(`This is your total after the tip: ${formatter(locale, currency, total)}`);
  };
 

  document.getElementById("buttonneer").onclick = function()
  { 
    let amount = Number(document.getElementById("amount").value); 
    let tipPercent = Number(document.getElementById("tipPercent").value);
    var selected = document.getElementById("select"); 
    var selectedValue = document.getElementById("select").value;
    var selectedText = selected.options[selected.selectedIndex].text;
    tipCalculator(amount, tipPercent, selectedValue, selectedText);
  };
