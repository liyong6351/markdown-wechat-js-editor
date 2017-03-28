# Markdown js editor
markdown js editor is a editor prepare for wechat post eidt.It support customize style in many html tag.  
as far as now, It support  &lt;p&gt;、&lt;h1&gt;、&lt;h2&gt;、&lt;h3&gt;、&lt;h4&gt;、&lt;h5&gt;、&lt;h6&gt; etc.   

# Process Introduce
1. It's based on makdown.js,after rendering from markdown you will get the native html code.
2. Transfer the html code to DOM tree.
3. Set the different style for each tag.
4. Return the new DOM tree to viewer

# How to use
1. checkout the project use git
2. put the project anywhere but don't change the structure of the directory
3. open the index.html and editor the content as you like
4. click the create button and you will see the preformace after the rendering

# How to define the customer style  
Now we suggest you to define the color and the main icon before the title  
See [style.js](js/style.js)  
1. CommonStyle array used to define the common style such as font etc. 
2. Such as blueStyle/pinkStyle array are all the main style you can customize.
3. If you insert a style array,you need to insert the icon and color as blueStyle,the define the parameter passed from index.html to the js code，and the you need to change function chooseStype to define when to use the new style. For example.Let me insert a redStyle.First you need to insert the style in style.js named redStyle.Then add a selection in the index.html whose id is 'styleNode'.change the function chooseStype last

# Attention 
Because wechat has define the anti theft on the images,so maybe you will see 'this image comes from wechat……'.
In a word you mayn't use the icon from wechat as you like.If so We suggest two way to solve the problem.
1. **Chrome + Referer Control extension** and the config the filter you like. 
2. **Firefox + Referer Control extension** and the config the filter you like. 