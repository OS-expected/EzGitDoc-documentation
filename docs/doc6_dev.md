---
id: doc6
title: JS structure
slug: /start
---

import useBaseUrl from '@docusaurus/useBaseUrl';

<p align="center">
<img src={useBaseUrl('img/dev/jsStructure1.png')} alt="Dev - 1" height="300px"/>
</p>

<p align="right">
<span>source: <a href="https://pixabay.com/pl/vectors/infografika-schody-post%C4%99p-krok-2895154/" target="_blank">pixabay.com</a></span>
</p>

<p align="justify">
  EzGitDoc designer logic is split into more than one script file to make it easier to understand, maintain and view it's source code for potential contributors or viewers. In this article, you will find out responsibilities for each script created for  EzGitDoc.
</p>

### ezBtnController.js

<hr/>

- Attaches to page key combinations that trigger specific modals
- Closes all modals on using valid key combination

### ezGenLogic.js

<hr/>

- EzGitDoc UI Core that setup's & generate's elements in designer

### ezLogicTranslator.js

<hr/>

- Translates elements created by UI Core into code that can be used in ```.md``` file

### ezMisc.js

<hr/>

- Initializes elements in <em>(document).ready</em> function
- Implements:
  - toast (and it's time counter)
  - helpful functions (e.g. GenerateUniqueId, validateURL, checkIfNumber, checkifNaN)
  - list group ```active``` class management
  - copying code to clipboard
  - saving code to file
  - RESET, GENERATE CODE buttons behaviour


### ezQuickBuilder.js

<hr/>

- Translates Quickbuilder input into ```.md``` code

### ezReferencesLogic.js

<hr/>

- Builds anchors to elements created by UI Core for ```References``` modal
- Implements highlighting system
- Implements changing element's position system

### ezSettings.js

<hr/>

- Defines available settings for EzGitDoc tool
- Defines functions for saving/loading settings
- Defines functions for  ```Theme, Settings``` modals UIs

### ezUpdateLogic.js

<hr/>

- Triggers and then loads chosen element's data into update modal
- Defines update logic for elements created by UI Core (ezGenLogic.js)

### ezValidation.js

<hr/>

- Defines messages for toasts
- Defines functions for validation requests