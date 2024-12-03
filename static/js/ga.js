(function() {
    // Create the script element to load gtag.js
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-QF82QQD9DC';
    
    // Append the script tag to the document head
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
  
    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
  
    // Initialize Google Analytics
    gtag('js', new Date());
    gtag('config', 'G-QF82QQD9DC');
  })();
