### Recieve Form submissions from your website 
How to send email from HTML contact form without any backend language (like PHP/ Node), instead we'll use service to integrate form submission on your website 

1. form submit
![form submit](https://formsubmit.co/)

#### CONNECT YOUR FORM
> click on `email link beta` from the menu, enter the email address you'd want to recieve all form submits from.

> Pointing the action-attribute of your form to our URL will enable submissions to be sent to your email address.
```bash
<form action="https://formsubmit.co/rtrreem.rchc@gmail.com" method="POST" />
#enter the email you registered to recieve form submits
```

#### ADD NAME ATTRIBUTES
Include a name attribute in all form elements (i.e. <input>, <select>, and <textarea>) to receive the submission data.
```bash
<input type="email" name="email">
```

#### SEND AND CONFIRM
Submit the form once. This first-time-use will trigger an email requesting confirmation.
> code 
```bash

```
> for some reason formsubmit wasnt working (as in it wasnt sending the mail notification to my registered email id), but formspree works 


1. Formspree 
![Formspree](https://formspree.io/)
> click on create new form and note the form endpoint they provide you 
```bash
https://formspree.io/f/myyooyak
```
> code 
```bash
<body>
    <div class="container">
        <h1>Contact Form</h1>
        <form action="https://formspree.io/f/myyooyak" method="POST" >
            <!-- were having client side validation -->
            <input type="text" name="Name" id="" placeholder="Full Name" required>
            <input type="email" name="Email" id="" placeholder="Email" required>
            <select name="Continent" id="">
                <option value="">Africa</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value="">America</option>
                <option value="">Australia</option>
                <option value="">Antarctica</option>
            </select>
            <textarea name="Message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
            <button type="submit">send</button>
        </form>
    </div>
</body>
```