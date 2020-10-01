---
id: doc4
title: Examples
---

<p align="justify">
Here you will find some examples on how each element is being displayed on EzGitDoc page and how generated code looks in *.md file. Code samples are not included as with EzGitDoc it's very simple to create them. Most are generated in HTML tags but not all(as mentioned in the first case) like list. In the near future I plan to add setting that gives ability to choose between md and html.
</p>

### Code

#### EzGitDoc

<blockquote>
<p>
<img src="../static/img/examples/e1.png" alt="Example 01"/>
</p>
</blockquote>

#### Result

<blockquote>
<p>
<img src="../static/img/examples/e2.png" alt="Example 02" height="60px"/>
</p>
</blockquote>

### Header

#### EzGitDoc

<blockquote>
<p>
<img src="../static/img/examples/e3.png" alt="Example 03"/>
</p>
</blockquote>

#### Result

<blockquote>
<p>
<img src="../static/img/examples/e4.png" alt="Example 04" height="100px"/>
</p>
</blockquote>

<p align="justify">
EzGitDoc is using HTML &lt;h&gt; tags to create headers in *.md file but it's also possible to use hashtag markdown. HTML tags are 'slightly better' for me due to the fact that they can be used inside other tags like paragraphs while hashtags not. Check the image below. 
</p>

<blockquote>
<p>
<img src="../static/img/examples/e5.png" alt="Example 05" height="150px"/>
</p>
</blockquote>

### Image

#### EzGitDoc

<blockquote>
<p>
<img src="../static/img/examples/e6.png" alt="Example 06" height="150px"/>
</p>
</blockquote>

#### Result

<blockquote>
<p>
<img src="../static/img/examples/e7.png" alt="Example 07" height="150px"/>
</p>
</blockquote>

### Link

#### EzGitDoc

<blockquote>
<p>
<img src="../static/img/examples/e8.png" alt="Example 08"/>
</p>
</blockquote>

#### Result

<blockquote>
<p>
<img src="../static/img/examples/e9.png" alt="Example 09" height="35px"/>
</p>
</blockquote>

:::note
You can also make hyperlink by using Text element and anchor tag. If you want that single link to be aligned center or right, you can do this using align attribute. 
:::

### List

#### EzGitDoc

<blockquote>
<p>
<img src="../static/img/examples/e10.png" alt="Example 10"/>
</p>
</blockquote>

#### Result

<blockquote>
<p>
<img src="../static/img/examples/e11.png" alt="Example 11" height="150px"/>
</p>
</blockquote>

<p align="justify">
Example shows two(out of three) types of list that you can create. Typical one with point or custom one(with icon). Third one can be used to for e.g. describe pros in short with icons. Below is old example from EzGitDoc.
</p>

<blockquote>
<p>
<img src="../static/img/examples/e12.png" alt="Example 12" height="150px"/>
</p>
</blockquote>

:::note
By adding extra breakline, you can put description of each advantage below bold title. 
:::

### Table

#### EzGitDoc

<blockquote>
<p>
<img src="../static/img/examples/e13.png" alt="Example 13" height="180px"/>
</p>
</blockquote>

#### Result

<blockquote>
<p>
<img src="../static/img/examples/e14.png" alt="Example 14" height="180px"/>
</p>
</blockquote>

<p align="justify">
In the image 2 table types were presented. Typical one with text and second holding images. Sometimes we want to share some screenshots if it's game repository, library or front-end part example etc. I suggest using table to make fancy gallery. If you plan to make one, remember that you need to have same resolution images and then find best width x height composition(or accept unequal rows/image stretches). It costs some time but the effect is very satisfying. Example below from <a href="https://github.com/trolit/projectZero">Project Zero</a> repository:
</p>

<blockquote>
<p>
<img src="../static/img/examples/e15.png" alt="Example 15" height="220px"/>
</p>
</blockquote>

### Text

#### EzGitDoc

<blockquote>
<p>
<img src="../static/img/examples/e16.png" alt="Example 16" height="120px"/>
</p>
</blockquote>

#### Result

<blockquote>
<p>
<img src="../static/img/examples/e16_1.png" alt="Example 16.1" height="120px"/>
</p>
</blockquote>

:::note
Keep in mind that in the text element you can use HTML tags like anchor(a).
:::

### Label

#### EzGitDoc

<blockquote>
<p>
<img src="../static/img/examples/e17.png" alt="Example 17"/>
</p>
</blockquote>

#### Result

<blockquote>
<p>
<img src="../static/img/examples/e18.png" alt="Example 18" height="110px"/>
</p>
</blockquote>

#### Result (left whitespace between each badge)

<blockquote>
<p>
<img src="../static/img/examples/e19.png" alt="Example 19" height="60px"/>
</p>
</blockquote>

<p align="justify">
Labels are great to give short information. EzGitDoc allows to make static badges but you can make dynamic ones by yourself or use predefined. Visit <a href="https://shields.io/">Shields.io</a> to learn more. If you want labels to stay in one line, simply leave just one whitespace between them. 
</p>