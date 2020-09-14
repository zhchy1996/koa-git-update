// 封装邮件发送接口
const nodemailer = require('nodemailer');

// 开启一个SMTP连接
let transporter = nodemailer.createTransport({
    // host: 'smtp.qq.com',
    service: 'Gmail', // 需要到qq邮箱设置开通SMTP, 查看支持的邮件服务商列表 https://nodemailer.com/smtp/well-known/
    port: 465, // SMTP 端口
    secureConnection: true, // 使用了SSL
    secure: true, // true for 465, false for other ports
    auth: {
        user: '',
        pass: '' // 这里密码不是qq密码，是你设置的smtp授权码
    }
})

// 填写邮件信息
let mailOptions = {
    from: 'blog builder', // 发件人
    to: '', // 收件人
    subject: '', // 标题
    // 发送text或者html格式
    text: '', // plain text body 文本格式的内容
    html: '' // html body HTML格式的内容
};

// 使用前面创建的传输器来发送邮件
let send = function (subject, content, flag) {
    if (subject && content) {
        mailOptions.subject = subject;
        if (flag === 'html') {
            mailOptions.html = content;
        }else
        {   // 默认不传flag发送text
            mailOptions.text = content;
        }
        transporter.sendMail(mailOptions, (error, info) => {
            mailOptions.text = '';
            mailOptions.html = '';
            // console.log(`Message: ${info.messageId}`);
            // console.log(`sent: ${info.response}`);
        })
    }
};

// 将send方法通过exports暴露出来, 便于其他模块调用
module.exports = send;