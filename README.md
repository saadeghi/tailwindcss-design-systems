# Tailwind CSS Design Systems

`⚠️ Work in progress`

Tailwind CSS component plugin that brings you pre-built styles based on famous design systems and pattern libraries including Material Design, Bootstrap and more.

## Why?  
If you want to use Tailwind CSS but you don't want to design every single element, you can use pre-built CSS components based on a design system and use your favorie utility classes with them. Let's say you want your custom layout made by Tailwind's utility classes but you want your buttons to look like Material Design buttons.

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
        designSystem: 'bootstrap', //choose which design system you want to use [material/bootstrap/ios/macos/...]
    },
    variants: {},
    plugins: [
        require('./tailwindcss-design-systems'), //add this line to active the plugin
    ],
};
```
## What if I don't use all the components?  
If you set up `purge` option in your `tailwind.config.js` all unused component styles will be purged, so don't worry about the file size.
