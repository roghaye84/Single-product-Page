  // منتظر بارگذاری کامل صفحه باشید
    document.addEventListener('DOMContentLoaded', function() {
      // گرفتن عناصر
      const mainImage = document.getElementById('main-image');
      const thumbnails = document.querySelectorAll('.thumbnail');

      // اضافه کردن event listener به هر تصویر کوچک
      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
          // تغییر src تصویر اصلی به src تصویر کلیک شده
          mainImage.src = this.src;
          // تغییر alt تصویر اصلی به alt تصویر کلیک شده (اختیاری)
          mainImage.alt = this.alt;
        });
      });
    });
