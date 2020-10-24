---
id: doc7
title: Custom theme
slug: /dev/custom-theme
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p align="center">
<img src={useBaseUrl('img/dev/customTheme1.png')} alt="Custom Theme - 1" height="350px"/>
</p>

<p align="right">
<span>source: <a href="https://pixabay.com/pl/illustrations/renowacja-farba-praca-sztandar-kot-1262389/" target="_blank">pixabay.com</a></span>
</p>

<p align="justify">
If you want to create your own theme in Less.js for EzGitDoc and start from existing template, it's recommended to use raw-dark theme since it was expanded with more constants and overrides most elements styles. Basicly, if you overwrite <code>@primary-color</code> variable, you will have most of the elements that appear on the page changed. Remaining constants and styles will still need to be polished in order to get better results.
</p>

<div>
  <a class="button button--primary" href="https://raw.githubusercontent.com/trolit/EzGitDoc/master/less/theme-raw-dark.less" target="_blank">
    Open raw-dark theme
  </a>
</div>

<br/>

<p align="justify">
If you've prepared your theme, simply import it to the EzGitDoc into head section.
</p>

```html
<link rel="stylesheet/less" type="text/css" href="less/theme-yourThemeName.less">
```

<p align="justify">
Scroll until themes modal section or use <code>CTRL-F</code> key combination with "Themes Modal" phrase to quickly relocate to mentioned section. Inside modal's body add your theme adjusting <code>class</code>, <code>onclick</code> and <code>title</code> attributes.
</p>

```html
<div class="theme-box theme-yourThemeName" onclick="setTheme('yourThemeName')" data-tooltip="tooltip" data-placement="top" title="YourThemeName"></div>
```

<br/>

<p align="center">
<span class="iconify" data-icon="fxemoji:informationsource" data-inline="false" height="80px"></span>

Finally, if you would like to share your results with others, <br/>feel free to create pull request with your theme <a href="https://github.com/trolit/EzGitDoc/pulls" target="_blank">here <span class="iconify" data-icon="brandico:github" data-inline="false"></span></a>
</p>