var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'mail.server.com',
    secure: true, // use SSL 
    auth: {
        user: 'your@email.com',
        pass: 'yourpassword'
    }
};

// create reusable transporter object using the default SMTP transport 
var transporter = nodemailer.createTransport(smtpConfig);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// setup e-mail data with unicode symbols 
var mailOptions = {
    from: 'info@life.com', // sender address 
    to: 'bb@bb.com,qq@qq.com,mm@mm.com', // list of receivers 
    subject: 'Hello', // Subject line 
    text: 'Hello world', // plaintext body 
    html: '<b>Hello world</b>' // html body 
};

function mail(i) {
	var mailOptions = {
	    from: 'info@test.com', // sender address 
	    to: 'xx@xx.com,zz@zz.com,cc@cc.com', // list of receivers 
        cc: 'ok@scg.co.th', // Comma separated list or an array
	    subject: 'Hello ✔' + (i + 1), // Subject line 
	    text: 'Hello world', // plaintext body 
	    html: '<b>Hello world</b>' // html body 
	};
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info) {
	    if (error) {
	        return console.log('Message[' + i + '] sent error: ' + error);
	    }
	    console.log('Message[' + i + '] sent: ' + info.response);
	});
}

for (var i = 0; i < 1000; i ++) {
	setTimeout(function() {
		mail(i);
	},  (i / 100));
}
