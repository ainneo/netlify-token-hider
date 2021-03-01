# What this is

this shows how to use netlify with just plain html js and css, together with netlify functions.

## How to use (Manual)

Clone or fork this repo, link to a git host (like GitHub or GitLab), and deploy to Netlify at https://app.netlify.com

## How to use (Netlify Dev)

Make sure you have the latest CLI version:

```bash
npm i -g netlify-cli
```

Deploy on locahost:8888

```
netlify dev
```

and develop away! use `netlify functions:create` new functions as needed

To deploy for a new site:
```
netlify init
# optionally do a preview deploy: netlify deploy
# or straight to prod: netlify deploy --prod
```

If you have an existing Netlify site use `netlify link` instead.

You can check your login status with `netlify status`, and also check out the [browser extension](https://chrome.google.com/webstore/detail/netlify-browser-extension/dkhfpnphbcckigklfkaemnjdmghhcaoh?hl=en-US) and [menubar app](https://github.com/stefanjudis/netlify-menubar).

## How to write new functions, for example add a token-hider to hide API keys

Watch this 7 minute video: https://youtu.be/gWIK_QHyuWs


### Recap
* fork/clone repo
* upload to git and netlify
* make sure you have netlify CLI
* use `netlify link` to link netlify to remote directory
* to hide token, create a new token function: run ```netlify functions:create```
* pick a template - options available in the terminal
* after picking a template, the template is generated inside a functions folder


### Netlify files 
* .netlify - before using netlify dev, you must authenticate, make sure your site is linked to a Netlify siteID located in the state.json
* functions - folder is the backend for netlify
    * This is where netlify templates get downloaded to
* netlify.toml - netlify configs
* gitignore - has netlify configs


### How to add your token/keys
To add keys/token (do not add them in the functions file):
    * Go to your netlify site settings
        * Go to Build & Deploy
            * Inside of Environment define your values
In token-hide.js:
    * configure template to make your api call
In your browser:
    * go to: http://localhost:8888/.netlify/functions/token-hider
        * check your network tabs for 200 status 
        * now your keys should be hidden from the network tab/front-end

### API call
Add headers to get only json data, and not all of the html:
{headers: {Accept: "application/json"}



