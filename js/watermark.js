document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.content img');
    
    images.forEach(function(img) {
      img.addEventListener('load', function() {
        applyWatermark(this);
      });
      
      // 如果图片已经加载完成
      if (img.complete) {
        applyWatermark(img);
      }
    });
    
    function applyWatermark(img) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // 设置canvas尺寸为图片尺寸
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      
      // 在canvas上绘制图片
      ctx.drawImage(img, 0, 0);
      
      // 添加水印文字
      ctx.font = '24px Arial';
      ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
      ctx.textAlign = 'center';
      ctx.fillText('©EvE-VeV', canvas.width / 2, canvas.height - 30);
      
      // 替换原始图片src为带水印的canvas数据
      img.src = canvas.toDataURL();
    }
  });
  