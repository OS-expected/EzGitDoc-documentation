---
id: changelog
title: Changelog
slug: /changelog
---

export const Fixed = ({children}) => ( <span style={{
      backgroundColor: '#B20000',
      borderRadius: '2px',
      fontSize: '80%',
      color: '#fff',
      paddingTop: '0.2rem',
      paddingBottom: '0.2rem',
      paddingLeft: '5.8rem',
      paddingRight: '5.8rem',
}}>{'fixes'}</span> );

export const Added = ({children}) => ( <span style={{
    backgroundColor: '#25c2a0',
    borderRadius: '2px',
    fontSize: '80%',
    color: '#fff',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
    paddingLeft: '4rem',
    paddingRight: '4rem',
}}>{'improvements'}</span> );

export const Changed = ({children}) => ( <span style={{
    backgroundColor: '#D4AB2D',
    borderRadius: '2px',
    fontSize: '80%',
    color: '#fff',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
    paddingLeft: '5rem',
    paddingRight: '5rem',
}}>{'changes'}</span> );

### v1.7.5 (16.10.2020)

<Changed></Changed> 

```
- Changed "save to file" file extension from .txt to .md
- Changed classes name which contained 'dark' to 'custom'
- Removed body background definition from body style attribute
- Changed footer badges
- Removed unnecessary styles (badge sonar)
- Moved element border styling to ezGitPart class
- Modified highlighting system to restore previous color(rather than hard coded one)
```

<Added></Added> 

```
- Added LESS.js to the project
- Implemented 4 new themes: Light Doc | Calm | Dark Doc | Raw Dark
```

<Fixed></Fixed>

```
- Fixed resetting image alignment after turning on/off "nonspaced elements" setting
- Fixed iconic list code output
- Fixed Alt + F key combination for badge element
- Fixed removing last element from EzGitDoc with confirmation feature
- Fixed logo-preloader-body with logo-body usage
```

<hr/>

### v1.7.4 (10.10.2020)

<Changed></Changed> 

```
- Changed all modals appearances
- Separated settings and references logic to new files(ezReferencesLogic, ezSettings)
- Changed DOCS button color to purple
- Changed EzGitDoc starting note look
- Increased min height for EzGitDoc elements to 40px
- Modified createBadge() func in ezGenlogic.js
```

<Added></Added> 

```
- Added new element to EzGitDoc, details-summary
- Added setting to turn on/off space between elements (Spaced elements)
- Added setting to require confirmation on deleting single elements
- Implemented References modal to quickly move between elements (great for bigger projects)
```

<Fixed></Fixed>

```
- Fixed link code generation error (func not implemented)
- Fixed centering badges in EzGitDoc designer
- Fixed staying margins between badges on enabled setting: Nonspaced elements
```

<hr/>

### v1.7.3 (07.10.2020) 

<Changed></Changed> 

```
- Removed hardcoded URL for image table generation
- Extended credits in generated output with date
- Minor createHeader() function code improvement
- Changed color for active list group item
- Moved h/image/table elements previews to badge with icon
- Refactored ezLogicTranslator.js file
- Moved docs button near reset
- Updated EzGitDoc tool logo
- Fixed missing ending slash for img
```

<Added></Added> 

```
- Implemented update option for Image Table(change all images sizes at once)
- Implemented new table options: kbd and linked kbd
- Added reference to GitHub repository through icon in the sidebar
```

<Fixed></Fixed>

```
- Fixed shields.io default badge (old: plastic => new: flat)
- Fixed naming convention (old: Label => new: Badge)
```

<hr/>

### v1.7.2 (02.10.2020)

<Changed></Changed> 

```
- Removed from master branch quickstart images except gif
- Removed documentation from EzGitDoc and added redirections to docs from Docusaurus2
```

<Fixed></Fixed>

```
- Fixed no closing slash for img tag
```

<hr/>

### v1.7.1 (11.09.2020)

<Changed></Changed> 

```
- Generate Code button -> reduced padding, brought back elegant style, added icon
```

<Added></Added> 

```
- Added to text table update section button that allows to add extra rows into the table
- Added to the list update section button that allows to add extra items
```
<Fixed></Fixed>

```
- Fixed icon and name in modal responsible for updating list
```

<hr/>

### v1.7.0 (08.09.2020)

<Changed></Changed> 

```
- Removed "Close" button from modals (user can still close it in 3 ways)
- Moved generate code button to the top right corner and changed it look
- Reviewed JS code using ESLint by using standard JavaScript style
- Made minor changes(refactor) to project logic
```

<Added></Added> 

```
- Added required/optional text to fields in modals
```

<hr/>

### v1.6.1 (02.07.2020)

<Fixed></Fixed> 

```
- Fixed missing placeholder images (changed baseUrl from placehold.it to place-hold.it)
```

<hr/>

### v1.6.0 (20.05.2020)

<Changed></Changed> 

```
- Changed name of the badge appearing next to the label tool in sidebar
```

<Added></Added> 

```
- Added first version of Quick Builder 
(allows to obtain doc scheme much faster but no preview and less options)
```

<hr/>

### v1.5.1 (10.04.2020)

<Fixed></Fixed>

```
- Fixed problem of disappearing generated Code tool output after making changes to it.
```

<hr/>

### v1.5.0 (09.04.2020)

<Changed></Changed> 

```
- Changed delete tool background color
- Changed left and right border of rendered elements
- Moved passed data validation to separate file - ezValidation.js
- Set minimum cell width for td tag
- Removed margin for table class
- Reversed values returned by isWhiteSpaceOrIndentOnly()
- Limited rendered table height to 200px
```

<Added></Added>

```
- Added to each EzGitDoc tool, button allowing to edit data(except image type table)
- Added ezUpdateLogic.js
- Added for each tool update modal
- Added extra pickable parameter to label tool called style
- Added hover effect for both, delete and edit tool
```

<Fixed></Fixed>

```
- Fixed problem of uneven margin between some rendered elements
- Fixed list code generation
- Fixed image src when feeding only height field
```

<hr/>

### v1.4.0 (01.04.2020)

<Changed></Changed> 

```
- Removed logo on page and animation which was set up through JS code
- Removed navbar and it's toggle functionality
- Moved preloader function to eventListener
- Changed modals appearence to the right side
- Reorganized and recolored modal buttons
- Artificially increased time of preloader with ~1 second
- Aligned notifications to the left top corner
- Removed position relative from the body tag
- Removed button group from the main page
- Changed popovers placement to the left
- Set minimum height for workingSpace
- Changed modals header icons
- Changed applied top/bottom margin to elements on 2%
    - (previously: 5px)
- Changed border styling of created elements
- Changed shortkeys arrangement to QWER-ASDF 
    - (previously: QWE-ASDR)
- Rearranged the way copy to clipboard information was shown when clicking button
```

<Added></Added> 

```
- Added sidebar menu and it's styles
- Added new element - label with preview option
- Added extra buttons(full page preview, scroll to the top/bottom)
- Added configurable settings(automated modals, notifications autohide)
- Added working TAB key indent for textareas
- Added bootstrap colorpicker support
- Added custom scroll bar to the project
- Added back to the top button for updates section.
- Added scrollbehaviour making scrolls smooth for modern browsers
- Added to each tool reset button that allows to clear modal
- Added to the button responsible for template reset confirmation request
- Added separate logo body class for preloader
- Added subsection reference for examples in the documentation
```

<Fixed></Fixed> 

```
- Fixed problem of overflowing data(over white border), when there was too much text
- Fixed problem of creating empty div table element, when rows was set to 0 and cols > 0
- Fixed inputs when submitting not only value but whitespaces(where necessary)
```

<hr/>

### v1.3.0 (28.03.2020)

<Changed></Changed>

```
- Updated Notes section for each element
- Updated EzGitDoc manual
- EzGitDoc displays properly breaklines and spaces made in Code element
- Image URL field is predefined with blank value now
    - (previously: URL used only placeholder attribute)
- Some elements(e.g. image table) will have extra tips printed as comments
- Header styles can be now picked from the list
    - (previously: header styles could be picked from the dropdown)
- Table type can be now picked from the list
    - (previously: table type could be picked from the dropdown)
- Now EzGitDoc uses placehold to display blank image containers 
    - (previously: used wiki 'no image' image)
- Updated some images stored in the repository
- Buttons responsible for creating elements are now bonded into one group
    - (previously there were 2 groups of 4 and 3 buttons)
- removeAllElements uses JQuery remove func now
    - (previously removeAllElements used textContent variable)
- Hovering over header, list and table types will show examples
```

<Added></Added>

```
- Added preloader
- Added to the list third type which allows to create list of links
- Added 'back to the top' button for Quick start and EzGitDoc examples sections
```

<Fixed></Fixed>

```
- Fixed Reset button (properly recovers 'Add first element..' block)
```

<hr/>

### v1.2.0 (24.03.2020)

<Changed></Changed>

```
- Reduced scroll amount needed to show navbar(from 400 to 220)
- Rearranged main page interface, added footer
- Updated manual data, images
```

<Added></Added>

```
- Added demo element on the page
- Added GitHub repository reference and Help button to navbar
- Added some padding to created text element
- Added contact form option
- Added leaving/refreshing page confirmation
```

<hr/>

### v1.1.0 (04.03.2020)

<Changed></Changed>

```
- Reduced scroll amount needed to show navbar(from 700 to 400)
```

<Added></Added>

```
- Implementend shortcut keys for markdown parts
- Added Updates section to Help modal
```

<hr/>

### v1.0.0 (29.02.2020)

<Added></Added>

```
- Published first version of EzGitDoc
```

