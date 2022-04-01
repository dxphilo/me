---
title: Master Tailwind CSS

description: Master tailwind with this awesome tailwind css class cheat sheet

alt: Tailwind CSS Cheatsheet

excerpt: Master tailwind with this class cheatsheet

img: pexels-joo-vtor-heinrichs-5022456.jpg

tag: tailwind css

attribution: photo by John Philip from Pexelry
---

Master Tailwind CSS with This Cheat sheet

Master tailwind with this awesome tailwind css class cheat sheet.

Tailwind CSS allows us to build modern websites with the respective classes without writing a single native css. Just like other CSS libraries like Bootstrap, Tailwind also has responsive classes that we only need to call in our application.

This article will get you up and started really quick with Tailwind and make beautiful websites and UIs.

Tailwind is amazing since we have to only call the respective classes and Tailwind css will take care of everything. On top of that we don’t have to worry about responsivity as all is taken care of by Tailwind on different devices.

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. From Tailwind.org.

In this article we will see the most basic CSS classes and their relative properties in CSS.

Backgrounds

**Background Repeat**

This property sets how the background image is repeated.
Utilities for controlling the repetition of an element's background image.

```
Class                   Properties

bg-repeat               background-repeat: repeat;

bg-no-repeat            background-repeat: no-repeat;

```

**Background Size**

This property defines the size of the background image.

```
Class                   Properties

bg-auto                 background-size: auto;

bg-cover                background-size: cover;

bg-contain              background-size: contain;

```

**Background Position**

This property sets the initial position for each background image.

```
Class                   Properties

bg-bottom               background-position: bottom;

bg-center               background-position: center;

bg-left                 background-position: left;

```

**Background attachment**

This property sets if the background image should scroll with the rest of the page or remain fixed.

```
Class                   Properties

bg-fixed                background-attachment: fixed;

bg-local                background-attachment: local;

bg-scroll               background-attachment: scroll;

```

**Font Size**

Font size is a css property that controls the font size of a character or a text.

```
Class                   Properties

text-2xl                font-size: 1.5rem;
                        line-height: 2rem;

text-3xl                font-size: 1.875rem;
                        line-height: 2.25rem;

text-4xl                font-size: 2.25rem;
                        line-height: 2.5rem;

text-5xl                font-size: 3rem;
                        line-height: 1;

text-6xl                font-size: 3.75rem;
                        line-height: 1;

text-7xl                font-size: 4.5rem;
                        line-height: 1;

text-8xl                font-size: 6rem;
                        line-height: 1;

text-9xl                font-size: 8rem;
                        line-height: 1;

```

**Font Weight**

This property defines how thick or thin characters in a text should be displayed.

```
Class                   Properties

font-thin               font-weight: 100;

font-extralight         font-weight: 200;

font-light              font-weight: 300;

font-normal             font-weight: 400;

font-medium             font-weight: 500;

font-semibold           font-weight: 600;

font-bold               font-weight: 700;

font-extrabold          font-weight: 800;

font-black              font-weight: 900;

```

**Letter Spacing**

This property sets the horizontal spacing behavior between text and characters.

```
Class                   Properties

tracking-tighter        letter-spacing: -0.05em;

tracking-tight          letter-spacing: -0.025em;

tracking-normal         letter-spacing: 0em;

tracking-wide           letter-spacing: 0.025em;

tracking-wider          letter-spacing: 0.05em;

tracking-widest         letter-spacing: 0.1em;

```

**Line Height**

This property is used to define the height of an element.

```
Class                    Properties

leading-3               line-height: .75rem;

leading-4               line-height: 1rem;

leading-5               line-height: 1.25rem;

leading-6               line-height: 1.5rem;

leading-7               line-height: 1.75rem;

leading-8               line-height: 2rem;

leading-9               line-height: 2.25rem;

leading-10              line-height: 2.5rem;

leading-none            line-height: 1;

leading-tight           line-height: 1.25;

leading-snug            line-height: 1.375;

leading-normal          line-height: 1.5;

leading-relaxed         line-height: 1.625;

leading-loose           line-height: 2;

```

**Text Alignment**

This property is used to set the horizontal alignment of a text.

```
Class                       Properties

text-left                   text-align: left;

text-center                 text-align: center;

text-right                  text-align: right;

text-justify                text-align: justify;

```

**Text Decoration**

This property is used to set or remove decorations from text.

```
Class                        Properties

underline                   text-decoration: underline;

line-through                text-decoration: line-through;

no-underline                text-decoration: none;

```

**Border Radius**

This property defines the radius of the elements corners.

```
Class                         Properties

rounded-none                border-radius: 0px;

rounded-sm                  border-radius: 0.125rem;

rounded                     border-radius: 0.25rem;

```

**Border Width**

This property controls the width of am elements borders.

```
Class                    Properties

border-0                 border-width: 0px;

border-2                 border-width: 2px;

border-4        	     border-width: 4px;

border-8                 border-width: 8px;

border                   border-width: 1px;

```

**Border Style**

This property sets the style of borders of different elements.

```
Class                       Properties

border-solid                border-style: solid;

border-dashed               border-style: dashed;

border-dotted               border-style: dotted;

border-double               border-style: double;

border-none                 border-style: none;

```

**Height**

Height property allows us to set the height of our elements. In tailwind we use the specified classes to set respective heights.

```
Class                   Properties

h-1                     height: 0.25rem;

h-2                     height: 0.5rem;

h-3                     height: 0.75rem;

h-4                     height: 1rem;

h-5                     height: 1.25rem;

h-6                     height: 1.5rem;

h-7                     height: 1.75rem;

h-8                     height: 2rem;

h-screen                height: 100vh;

```

**Display**

This property sets and specifies if and how an element will be displayed.

```
Class                   Properties

block                   display: block;

inline-block            display: inline-block;

inline                  display: inline;

flex                    display: flex;

inline-flex             display: inline-flex;

```

**FLEX**

**Flex Direction**

This property defines how the flexbox items are ordered within a flexbox container.

```
Class                   Properties

flex-row                flex-direction: row;

flex-row-reverse        flex-direction: row-reverse;

flex-col                flex-direction: column;

flex-col-reverse        flex-direction: column-reverse;

```

**Flex Wrap**

This property defines whether the flex items are forced within a single container or can be flowed into multiple containers.

```
Class                   Properties

flex-wrap               flex-wrap: wrap;

flex-wrap-reverse       flex-wrap: wrap-reverse;

flex-nowrap             flex-wrap: nowrap;

```

**Flex**

This property allows controlling how flex items both grow and shrink.

```
Class                   Properties

flex-1                  flex: 1 1 0%;

flex-auto               flex: 1 1 auto;

flex-initial            flex: 0 1 auto;

flex-none               flex: none;

```

**Justify Content**

This property defines how the browser distributes space between and around flex elements.
Utilities for controlling how flex and grid items are positioned along a container's main axis.

```
Class                   Properties

justify-start           justify-content: flex-start;

justify-end             justify-content: flex-end;

justify-center          justify-content: center;

justify-between         justify-content: space-between;

justify-around          justify-content: space-around;

justify-evenly          justify-content: space-evenly;

```

**Aligning Items**

This property specifies the default alignment for items inside the flexible container.

```
Class                   Properties

items-start             align-items: flex-start;

items-end               align-items: flex-end;

items-center            align-items: center;

items-baseline          align-items: baseline;

items-stretch           align-items: stretch;

```

**Visibility**

This property controls the visibility of elements.

```
Class                   Properties

visible                 visibility: visible;

invisible               visibility: hidden;

```

We have not covered some of the basic tailwind CSS properties and classes in this article. Please feel free to check out the Tailwind documentation which is very great and easy to follow along.

**Conclusion**

Tailwind css provides awesome UI and responsive classes. Apart from that it also speeds up our development process and workflows. since we have less to worry about the styling and focus on the development part.

Thank for reading this article if you found it helpful please do not forget to share.
Check out some of my blogs here.
