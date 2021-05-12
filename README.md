<p align="center"><img src="https://www.google.com/recaptcha/about/images/google-reCAPTCHA.svg" alt="" width="250" /></p>
<h4 align="center">reCAPTCHA protects your website from fraud and abuse.</h4>
<p align="center">reCAPTCHA uses an advanced risk analysis engine and adaptive challenges to keep malicious software from engaging in abusive activities on your website. Meanwhile, legitimate users will be able to login, make purchases, view pages, or create accounts and fake users will be blocked.</p>

<hr/>

You just have to change the code here just sitekey:

```jsx
   <Recaptcha
      sitekey="6Lc3hNEaAAAAAIuZ4UCTIGb2Cj1Dx_rdSyivJSgV"
      render="explicit"
      verifyCallback={this.verifyCallback}
      onloadCallback={this.recaptchaLoaded}
   />
```

or if you don't have reactjs. only default js:

```jsx
   <script src='https://www.google.com/recaptcha/api.js'></script>
    <script>
    function submitUserForm() {
        var response = grecaptcha.getResponse();
        if(response.length == 0) {
            document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">This field is required.</span>';
            return false;
        }
        return true;
    }
     
    function verifyCaptcha() {
        document.getElementById('g-recaptcha-error').innerHTML = '';
    }
    </script>
```
