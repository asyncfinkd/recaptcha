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


## Contributing

The main purpose of this repository is to continue evolving Google Recaptcha core, making it faster and easier to use. Development of Google Recaptcha happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Google Recaptcha.

## [Code of Conduct](CODE_OF_CONDUCT.md)

Google Recaptcha has adopted a Code of Conduct that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## [Contributing Guide](CONTRIBUTING.md)

Read our contributing guide to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Google Recaptcha.

## License

Google Recaptcha is [MIT licensed](LICENSE)

