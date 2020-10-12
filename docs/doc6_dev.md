---
id: doc6
title: JS structure
slug: /start
---

import useBaseUrl from '@docusaurus/useBaseUrl';

:::caution

DEV section is still under construction

:::

### ezBtnController.js

- Attaches to page key combinations that trigger specific modals
- Closes all modals on using valid key combination

### ezGenLogic.js

- EzGitDoc UI Core that setup's & generate's elements on page

### ezLogicTranslator.js

- Translates elements created by UI Core into code for *.md file

### ezMisc.js

- Initializes elements in <em>(document).ready</em> function
- Implements:
  - toast (and it's time counter)
  - helpful functions (e.g. GenerateUniqueId, validateURL, checkIfNumber, checkifNaN)
  - list group ```active``` class management
  - copying code to clipboard
  - saving code to file
  - RESET, GENERATE CODE buttons behaviour


### ezQuickBuilder.js

- Translates Quickbuilder input into *.md code

### ezReferencesLogic.js

- Builds anchors to elements created by UI Core for ```References``` modal
- Implements highlighting system

### ezSettings.js

- Defines available settings for EzGitDoc tool
- Defines functions for loading settings and managing ```Settings``` modal badges

### ezUpdateLogic.js

- Triggers and then loads chosen element's data into update modal
- Defines update logic for elements created by UI Core (ezGenLogic.js)

### ezValidation.js

- Defines messages for toasts
- Defines functions for UI Core validation