package kino.service;

import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;

public class MailService {

    private MailSender mailSender;

    public MailService(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void setMailSender() {
    }

    public void sendMail(String from, String to, String subject, String msg) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(from);
        message.setTo(to);
        message.setSubject(subject);
        message.setText(msg);
        mailSender.send(message);
    }

}
