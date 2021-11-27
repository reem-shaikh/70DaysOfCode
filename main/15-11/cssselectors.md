# CSS Selectors:
used to apply style properties to a single/ multiple specific html elements

1. Element/type Selectors 
2. class selectors 
3. ID selectors 
4. Universal selector 
5. Group selectors 

# 6. Combinators
  to understand combinators lets first understand operators.
        operators:
        operand operator operand

**Combinators tells relationship between any two selectors**

        syntax:
        selector combinator selector

## descendant    
  adds styling to all elements inside parent element    
>> **ul li**

<ul>
<li> </li>
<li> </li>
</ul>

## direct child  
 accepts only direct child of parent element  
>> **div > b**

<div>
<b>lorem</b>
</div>

# Sibling selectors
li inside the same element ul at the same level of nesting are siblings 

<ul>
<li> </li>
<li> </li>
</ul>


## general sibling  
it selects all the elements in the parent tag but after the element its applied on 
>> **li.red ~ li**

<ul>
<li class="red"> </li>
<li> lorem2</li> shows styling on this
<li> lorem2</li> and this
</ul>


## adjacent sibling 
only checks the one element directly after the parent element 
>> **li.red + li**

<ul>
<li class="red"> </li>
<li> lorem2</li> shows styling on this only
<li> lorem2</li> 
</ul>

## or    
styles all the elements seperated by comma   
>> **div,a*

## and   
styles only div with classname red           
>> **div.red*

<div class="red">lorem ipsum dolor</div>


# 7. Psuedo Selectors
    - psuedo elements (::)
      selects a part of the element
**deals with position**

    - psuedo class (:) 
      selects the entire element 
**deal with state** 

## Psuedo Elements 
1. ::before 
> div.red:before
{
    content: 'before';
}

//adds before the container and after at the end of container 

2. ::after 
> div.red:after
{
    content: 'after';
}

# position

- first-letter 
(edits first letter of pg)

- first-line

- first-child
  selects the very first child 
> li:first-child

- last-child 
> li:last-child

- nth-child(2n)
  starts from 2(1)=2nd element and keeps styling alternately at thesse intervals 
> li:nth-child

- nth-last-child(3)
  3rd last child 

- only-child
  for selecting an element which is a child 
> span:only-child 

<div> it will style on this span
  <span>
    <b> nested text </b>
  </span>
</div>

// However it wont apply style on this span 
<div class="red"> this is a div </div>
<span id="blue"> this is a span </span>


- first-of-type
  for selecting first element from every container irrespective of parent or child
> span:first-of-type 

<div> it will style on this span
  <span>
    <b> nested text </b>
  </span>
</div>

// apply styling on this span as well
<div class="red"> this is a div </div>
<span id="blue"> this is a span </span>


- last-of-type
  for selecting last element from every container 
> li:last-of-type 


- nth-of-type(2)
  shows styling on 2nd element 
> li:nth-of-type(2)
  
- nth-last-of-type(2)
  second last element from the container 

- only-of-type
  styles all the elements which are of this type 
>> this is same as only-child 
> span:only-of-type- styles all the spans irrespective of child or parent

- not
  element which does not have a certain property 
> li:not(.green)

<ul>
<li>item 1</li> //styling here 
<li class="green">item 2 </li> 
</ul>

## Pseudo classes
    used to style element based on how user interacts on the page

# state
- hover 
  when hovered over element what changes are made
> li:hover

- active 

- focus
  on the state of clicking on the element changes will be made 
> input:focus 
> button:focus

- required
  only selects inputs with required attribute 
> input:required 

- checked
  when clicked on checkbox what property will be applied 
> input:checked

- disabled
  to disable for instance say radiobutton/ checkbox 
> input:disabled 



# 9. Attribute selector 
add property to a specific attribute 


