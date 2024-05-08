function composite(BackGround, ForeGround, ForeGroundOpacity, ForeGroundPosition) {
    
    var BackGroundData = BackGround.data;
    var ForeGroundData = ForeGround.data;
  
    
    var width = BackGround.width;
    var height = BackGround.height;
  
    
    for (var y = 0; y < ForeGround.height; y++) {
      for (var x = 0; x < ForeGround.width; x++) {
        
        var fIndex = (y * ForeGround.width + x) * 4;
  
        
        var bX = ForeGroundPosition.x + x;
        var bY = ForeGroundPosition.y + y;
  
      
        if (bX >= 0 && bX < width && bY >= 0 && bY < height) {
          
          var bIndex = (bY * width + bX) * 4;
  
          
          var fRed = ForeGroundData[fIndex];
          var fGreen = ForeGroundData[fIndex + 1];
          var fBlue = ForeGroundData[fIndex + 2];
          var fAlpha = ForeGroundData[fIndex + 3] * (ForeGroundOpacity / 255); 
          /* ***************************************************** */
          var bRed = BackGroundData[bIndex];
          var bGreen = BackGroundData[bIndex + 1];
          var bBlue = BackGroundData[bIndex + 2];
          /* ****************************************************** */
          var blendedRed = (fRed * fAlpha) + (bRed * (1 - fAlpha));
          var blendedGreen = (fGreen * fAlpha) + (bGreen * (1 - fAlpha));
          var blendedBlue = (fBlue * fAlpha) + (bBlue * (1 - fAlpha));
  
          
          BackGroundData[bIndex] = blendedRed;
          BackGroundData[bIndex + 1] = blendedGreen;
          BackGroundData[bIndex + 2] = blendedBlue;
        }
      }
    }
    
    
  }