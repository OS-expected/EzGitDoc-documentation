---
id: doc6
title: Updates
slug: /updates
---

### v1.7.2 (02.10.2020)

- removed from master branch quickstart images except gif. <br/>
- removed documentation from EzGitDoc and added redirections to docs created in Docusaurus2. <br/>
- fixed no closing slash for img tag. <br/>

### v1.7.1 (11.09.2020)

- Reduced padding on Generate Code button, brought back elegant style, added icon. <br/>
- Fixed icon and name in modal responsible for updating list. <br/>
- Added to text table update section button that allows to add extra rows into the table. <br/>
- Added to the list update section button that allows to add extra items.

### v1.7 (08.09.2020)

- Removed "Close" button from modals as user can still close it in 3 ways.
- Moved generate code button to the top right corner and changed it look.
- Reviewed JS code using ESLint by using standard JavaScript style.
- Change Made minor changes(refactor) to logic.
- New Added required/optional text to fields in modals.

### v1.6.1 (02.07.2020)

- Fixed problem of missing placeholder images by changing their source from placehold.it to place-hold.it.

### v1.6 (20.05.2020)

- Changed name of the badge appearing next to label tool in sidebar.
- Added first version of Quick Builder 
    - allows to obtain doc scheme much faster but at the cost of missing preview and less options.

### v1.5.1 (10.04.2020)

- Fixed problem of 'disappearing' generated Code tool output after making changes to it.

### v1.5 (09.04.2020)

- Fixed problem of uneven margin between some rendered elements.
- Fixed list code generation.
- Fixed image src when feeding only height field.
- Changed delete tool background color.
- Changed left and right border of rendered elements.
- Moved passed data validation to separate file - ezValidation.js.
- Set minimum cell width for td tag.
- Removed margin for table class.
- Reversed values returned by isWhiteSpaceOrIndentOnly().
- Limited rendered table height to 200px. Any higher height will cause vertical scroll to appear.
- Added to each EzGitDoc tool, button allowing to edit data(except image type table).
- Added ezUpdateLogic.js.
- Added for each tool update modal.
- Added extra pickable parameter to label tool called style.
- Added hover effect for both, delete and edit tool.



### v1.4 (01.04.2020)

- Fixed problem of overflowing data(over white border), when there was too much text.
- Fixed problem of creating empty div table element, when rows was set to 0 and cols > 0.
- Fixed inputs when submitting not only value but whitespaces(where necessary).
- Removed logo on page and animation which was set up through JS code.
- Removed navbar and it's toggle functionality.
- Moved preloader function to eventListener.
- Changed modals appearence to the right side.
- Reorganized and recolored modal buttons.
- Artificially increased time of preloader with ~1 second.
- Aligned notifications to the left top corner.
- Removed position relative from the body tag.
- Removed button group from the main page.
- Changed popovers placement to the left.
- Set minimum height for workingSpace.
- Changed modals header icons.
- Changed applied top/bottom margin to elements on 2%.
    - (previously: 5px)
- Changed border styling of created elements.
- Changed shortkeys arrangement to QWER-ASDF. 
    - (previously: QWE-ASDR)
- Rearranged the way copy to clipboard information was shown when clicking button.
- Added sidebar menu and it's styles.
- Added new element - label with preview option.
- Added extra buttons(full page preview, scroll to the top/bottom).
- Added configurable settings(automated modals, notifications autohide).
- Added working TAB key indent for textareas.
- Added bootstrap colorpicker support.
- Added custom scroll bar to the project.
- Added back to the top button for updates section.
- Added scrollbehaviour making scrolls smooth for modern browsers.
- Added to each tool reset button that allows to clear modal.
- Added to the button responsible for template reset confirmation request.
- Added separate logo body class for preloader.
- Added subsection reference for examples in the documentation.

### v1.3 (28.03.2020)

- Reset button properly recovers 'Add first element..' block.
- Updated Notes section for each element.
- Updated EzGitDoc manual.
- EzGitDoc displays properly breaklines and spaces made in Code element.
- Image URL field is predefined with blank value now. 
    - (previously: URL used only placeholder attribute)
- Some elements(e.g. image table) will have extra tips printed as comments.
- Header styles can be now picked from the list. 
    - (previously: header styles could be picked from the dropdown)
- Table type can be now picked from the list. 
    - (previously: table type could be picked from the dropdown)
- Now EzGitDoc uses placehold to display blank image containers. 
    - (previously: used wiki 'no image' image)
- Updated some images stored in the repository.
- Buttons responsible for creating elements are now bonded into one group. 
    - (previously there were 2 groups of 4 and 3 buttons).
- removeAllElements uses JQuery remove func now. 
    - (previously removeAllElements used textContent variable).
- Hovering over header, list and table types will show examples.
- Added preloader.
- Added to the list third type which allows to create list of links.
- Added 'back to the top' button for Quick start and EzGitDoc examples sections.

### v1.2 (24.03.2020)

- Reduced scroll amount needed to show navbar(from 400 to 220).
- Rearranged main page interface, added footer.
- Updated manual data, images.
- Added demo element on the page.
- Added GitHub repository reference and Help button to navbar.
- Added some padding to created text element.
- Added contact form option.
- Added leaving/refreshing page confirmation.

### v1.1 (04.03.2020)

- Reduced scroll amount needed to show navbar(from 700 to 400).
- Implementend shortcut keys for markdown parts.
- Added Updates section to Help modal.

### v1.0 (29.02.2020)

- Publish 1.0 EzGitDoc release.

