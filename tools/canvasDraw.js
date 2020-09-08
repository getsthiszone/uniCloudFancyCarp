// 绘制圆角矩形
function drawRoundedRect(ctx, x, y, width, height, r, fill, stroke) {
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(x + r, y);
	ctx.arcTo(x + width, y, x + width, y + r, r);
	ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
	ctx.arcTo(x, y + height, x, y + height - r, r);
	ctx.arcTo(x, y, x + r, y, r);
	if (fill) {
		ctx.fillStyle = fill;
		ctx.fill();
	} else {
		ctx.fillStyle = 'white';
		ctx.fill();
	}
	if (stroke) {
		ctx.stroke();
	}
	ctx.restore();
}
/*
	自动换行文本
	app端context.measureText无效
*/
function drawText(context, t, x, y, w, color, size) {
	var chr = t.split('');
	var temp = '';
	var row = [];
	context.font = size ? '19px  bold 黑体' : '15px  bold 黑体';
	context.fillStyle = color ? color : '#000';
	context.textBaseline = 'middle';
	for (var a = 0; a < chr.length; a++) {
		if (context.measureText(temp).width < w && context.measureText(temp + chr[a]).width <= w) {
			temp += chr[a];
		} else {
			row.push(temp);
			temp = chr[a];
		}
	}
	row.push(temp);
	for (var b = 0; b < row.length; b++) {
		context.fillText(row[b], x, y + (b + 1) * 24);
	}
}

function drawAvatar(context, avatarImage, x, y,w) { 
	  
	context.save();
	context.beginPath(); //开始绘制
	//先画个圆   前两个参数确定了圆心 （x,y） 坐标  第三个参数是圆的半径  四参数是绘图方向  默认是false，即顺时针
	context.arc(w / 2 + x, w / 2 + y, w / 2, 0, Math.PI * 2, false);
	context.strokeStyle = 'rgba(200, 200, 200,0)';
	context.stroke();
	context.clip();
	context.drawImage(avatarImage, x, y, w, w);
	context.restore();
	context.beginPath();
}
 
export default {
	drawRoundedRect(ctx, x, y, width, height, r, fill, stroke) {
		return drawRoundedRect(ctx, x, y, width, height, r, fill, stroke);
	},
	drawText(context, t, x, y, w, color, size) {
		return drawText(context, t, x, y, w, color, size);
	},
	drawAvatar(context, avatarImage, x, y,w){
		return drawAvatar(context, avatarImage, x, y,w)
	}
}
