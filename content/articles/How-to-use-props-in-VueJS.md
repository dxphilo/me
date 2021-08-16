---
title: Scroll Indicator in Nuxtjs

description: Make a scroll indicator in Nuxtjs

alt: scroll idicator Nuxtjs

excerpt: Make a scroll indicator in Nuxtjs

img: pexels-ready-made-3850924.jpg

tag: Nuxtjs

attribution: photo by John Philip from Pexelry
---

Vue.js is quite amazing with its application and component’s structure. It also offers some amazing capabilities.
In this article, we are going to look at how we can use and implement props in Vue.js.

**What are props?**

In simple terms, props is the acronym of properties. Props are very essential when we want to pass data from the parent components to other components. Props always take the top to bottom approach. That is props can only take the flow from parent to child components and not vice versa. Props can also be of various types such as strings, arrays, objects, numbers, Boolean,

**When do we use props?**

Props are very useful when building dynamic web pages and when you want to access some data to other components. Pros also make it easier to pass data and information needed by other components. In as much as props are important, their intense use can at times lead to a problem known as prop drilling which can make our program unclean to read and follow up when bugging issues. 
It is generally regarded as a good practice no to pass props too much through many components’ layers.

**How to implement the use of props.**

Let us take a case where we are fetching some information from an API and storing the data into our program. We will then pass through the information from the API to other components structures.

Check the code snippet shown down below.

https://gist.github.com/developerphilo/b9f2b551ab8bea1825fca18889cb61d6

from the code snippet above you can see we are fetching some information through an API and passing the data into the Photos child components. Please have a look at how we are passing the props.

To pass data as props, we are to use either the v-bind directive or we can use ':' sign to show that the data we are passing through is a prop.

https://gist.github.com/developerphilo/1771f592cf3ff120168cb81c79611aba

from the code snippet, you can notice we are looping through the data from the API and signing the relevant props ton the Photos component.

**How to register the props inside the component**

Remember we were passing down the props from the parent to the Photos child component. Now for us to access the passed in props, we need to register the props in the Photos component so we can easily access them.
Check the code snippet shown down below.

https://gist.github.com/developerphilo/7b5a26b83f4a69aa04a816a1f27cd642

you can easily identify how we are registering the props inside our child component.
Render Prop Values inside the Child Components.

https://gist.github.com/developerphilo/3888e67073b1cf8da7a27c9dda114657

we can easily render the value of a prop inside the components using the mustache or the double curly braces in the component as shown above.
Resources

Vue.js [Documentation] (https://vuejs.org/v2/guide/components-props.html)

**Final thought**

Props are very important when you want to pass down some data from the parent to child components. On the contrary, make sure to use props moderately or else you may find yourself in a scenario where you implement a lot of prop drilling.

Thank you for reading through this article this far, if you found it helpful, please don't hesitate to share it out with others.

