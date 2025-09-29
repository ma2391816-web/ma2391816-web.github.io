// تتبع النقر على رابط الواتساب
document.getElementById('whatsapp-link').addEventListener('click', function() {
    if(typeof ttq !== 'undefined') {
        ttq.track('ClickButton', {
            contents: [{
                content_type: 'whatsapp_link',
                content_id: 'wa_link_hfdyry'
            }],
            value: 1,
            currency: 'USD'
        });
    }
});

// تتبع تحميل الصفحة
window.addEventListener('load', function() {
    if(typeof ttq !== 'undefined') {
        ttq.track('ViewContent', {
            contents: [{
                content_type: 'landing_page',
                content_id: 'whatsapp_landing'
            }],
            value: 0,
            currency: 'USD'
        });
    }
});
