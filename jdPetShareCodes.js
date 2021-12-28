/*
东东萌宠互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 PetShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let PetShareCodes = [
  'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==@MTE5MzEwNTEzODAwMDAwMDA1OTQzMzQ2Nw=='
,
  'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==@MTE5MzEwNTEzODAwMDAwMDA1OTQzMzQ2Nw=='
,
  'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==@MTE5MzEwNTEzODAwMDAwMDA1OTQzMzQ2Nw==',
    'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==@MTE5MzEwNTEzODAwMDAwMDA1OTQzMzQ2Nw==',
	  'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==@MTE5MzEwNTEzODAwMDAwMDA1OTQzMzQ2Nw==',
	    'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==@MTE5MzEwNTEzODAwMDAwMDA1OTQzMzQ2Nw==',
		  'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==',
		    'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==',
			  'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==@MTE5MzEwNTEzODAwMDAwMDA1OTQzMzQ2Nw==',
			    'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==@MTE5MzEwNTEzODAwMDAwMDA1OTQzMzQ2Nw==',
				  'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDUwMTI0MDAwMDAwMDQ0NjA2NTk3@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDY3NTIwMDAwMDAwNDk4ODgzMTM=@MTEzMzI1MTE4NDAwMDAwMDA1MDE1MTQxMQ==@MTE1NDQ5OTUwMDAwMDAwNDY1MDc2Njk=@MTE1NDAxNzgwMDAwMDAwNDM3OTQzNTE=@MTAxODc2NTEzMDAwMDAwMDAyNDAyNzA1MQ==@MTEzMzI1MTE4NDAwMDAwMDA1MTc4NDAzNw==@MTE5MzEwNTEzODAwMDAwMDA1MDA2MTMxOQ==@MTAxNzIyNTU1NDAwMDAwMDA1MTgzNDk0NQ==@MTE5MzEwNTEzODAwMDAwMDA1OTQzMzQ2Nw==',
   'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTAxODc2NTEzNDAwMDAwMDAxOTQ0OTg4Mw==@MTAxODc2NTE0NzAwMDAwMDAyMTc3MTY5NQ==@MTAxODExNTM5NDAwMDAwMDAzOTgyMDQyNw==',//账号一的好友shareCode,不同好友中间用@符号隔开
   'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTAxODc2NTEzNDAwMDAwMDAxOTQ0OTg4Mw==@MTAxODc2NTE0NzAwMDAwMDAyMTc3MTY5NQ==@MTAxODExNTM5NDAwMDAwMDAzOTgyMDQyNw==',
    'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=@MTAxODc2NTEzNDAwMDAwMDAxOTQ0OTg4Mw==@MTAxODc2NTE0NzAwMDAwMDAyMTc3MTY5NQ==@MTAxODExNTM5NDAwMDAwMDAzOTgyMDQyNw==',
	 'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=',
	  'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=',
	   'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=',
	    'MTAxODcxOTI2NTAwMDAwMDAyNTc4NTQ4MQ==@MTE1NDQ5MzYwMDAwMDAwMzk4MTM2Mjc=@MTE1NDQ5OTIwMDAwMDAwMzg5NjE4MTk=@MTE1NDQ5OTUwMDAwMDAwMzkxNzA5NTk=@MTAxODExNTM5NDAwMDAwMDAzOTgxMjM5NQ==@MTAxODExNDYxMTAwMDAwMDAwMzk4NDIwODU=@MTE1NDAxNzgwMDAwMDAwNDY5NTA3OTU=',

]
// 判断github action里面是否有东东萌宠互助码
if (process.env.PETSHARECODES) {
  if (process.env.PETSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东萌宠互助码选择的是用&隔开\n`)
    PetShareCodes = process.env.PETSHARECODES.split('&');
  } else if (process.env.PETSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东萌宠互助码选择的是用换行隔开\n`)
    PetShareCodes = process.env.PETSHARECODES.split('\n');
  } else {
    PetShareCodes = process.env.PETSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < PetShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['PetShareCode' + index] = PetShareCodes[i];
}