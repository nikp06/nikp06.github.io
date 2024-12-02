// ga.js
(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
  
    // Initialize Google Analytics
    gtag('js', new Date());
    gtag('config', '{{ .Site.Params.googleAnalyticsID }}'); // Replace with your actual Google Analytics ID
  })();
  