// class ImageCanvas{
//     constructor(canvas, ctx, imgBox){
//         this.canvas = canvas;
//         this.ctx = ctx;
//         this.imgBox = imgBox;
//     }

//     loadImage(imgPath){
//         if(ctx){
//             this.imgBox.onload = function(e){
//                 let v = (this.width/ctx.canvas.width - this.height/ctx.canvas.height) > 0 ?  this.width/ctx.canvas.width : this.height / ctx.canvas.height;
//                 let nw = this.width/v;
//                 let nh = this.height/v;
//                 ctx.drawImage(imgBox, 0, 0, nw, nh);
//             }
//             this.imgBox.src = imgPath;
//             console.log("SET IMAGE");
//         }
//     }
// }
