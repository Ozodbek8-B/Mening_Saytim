// Saytdagi tugmani topib olamiz
const meningTugmam = document.getElementById('tugma');

// Tugma bosilganda nima bo'lishini belgilaymiz
meningTugmam.addEventListener('click', function() {
    // Ekranga o'zbekcha xabar chiqaradi
    alert('Saytimga kirganingiz uchun rahmat!');
    
    // Brauzer konsoliga ma'lumot yozadi
    console.log('Tugma muvaffaqiyatli bosildi.');
});