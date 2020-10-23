import {receiveConfig, sendConfig} from '../mail-config';

// 封装邮件发送接口
const nodemailer = require('nodemailer');

// 开启一个SMTP连接
let transporter = nodemailer.createTransport(sendConfig)

// 填写邮件信息
let mailOptions = receiveConfig;

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