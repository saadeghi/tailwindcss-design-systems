# Tailwind CSS Design Systems

`⚠️ Work in progress`

Themeable CSS component plugin for Tailwind CSS.  
Optional pre-built CSS components based on famous design systems and pattern libraries including Material Design, Bootstrap and more.

## Why?  
Let's say, you like Tailwind's utility-first approach but you don't want to copy paste same class names for common components (button, input, etc...) everytime.  
You can use pre-built CSS components based on a design system and use your favorie utility classes with them. Let's say you want your custom layout made by Tailwind's utility classes but you want your button's base style to look like Material Design buttons.

## How to use?  
Install Tailwind CSS:  
`npm i tailwindcss`

Install Tailwind CSS Design Systems plugin:  
`npm i tailwindcss-design-systems`

Add it to your `tailwind.config.js`:  

```
module.exports = {
    purge: ['./path_to_your_files/**/*.html'],
    theme: {
        designSystem: 'bootstrap', // 👈 choose which design system you want to use [material/bootstrap/ios/macos/...]
    },
    variants: {},
    plugins: [
        require('tailwindcss-design-systems'), // 👈 add this line to enable the plugin
    ],
};
```
## What if I'm not using all the components?  
If you set up `purge` option in your `tailwind.config.js` all unused component styles will be purged, so don't worry about the file size.
