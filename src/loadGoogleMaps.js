// src/loadGoogleMaps.js

export const loadGoogleMaps = (apiKey) => {
    return new Promise((resolve, reject) => {
      const existingScript = document.getElementById('google-maps');
      if (existingScript) {
        resolve(window.google);
        return;
      }
  
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.id = 'google-maps';
      script.async = true;
      script.defer = true;
  
      window.initMap = () => {
        resolve(window.google);
      };
  
      script.onerror = (error) => {
        reject(error);
      };
  
      document.body.appendChild(script);
    });
  };
  