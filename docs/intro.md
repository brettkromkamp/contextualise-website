---
sidebar_position: 1
---

# Introduction

Contextualise is a simple but effective tool particularly suited for organising information-heavy projects and activities consisting of unstructured and widely diverse data and information resources &mdash; think of investigative journalism, personal and professional research projects, world building (for books, movies or computer games) and many kinds of hobbies.

## Topic Maps

There are several important aspects of **topic maps** that you need to understand in order to get the most out of Contextualise. These critical concepts include:
* Topics
* Associations
* Occurrences and information resources
* Scopes (sometimes also referred to as *context* or *perspective*)

Let's take a look at each of the above concepts in turn.

### Topics

A **topic** is... well anything, really. Examples of topics include you, your project, a company, a football club, a specific interest, event, hobby or a person. Anything goes. 

In practical terms (at least, in Contextualise), a topic is really nothing more than an identifier: something to which you can connect (information) resources, reference as part of a relationship between topics and attach meta data to.

Finally, in topic maps terminology, the creation of a topic to represent an abstract concept is called *reification*. 

### Associations

An **association**, in simple terms, is a relationship between two or more topics. It makes sense to explain the association concept with a concrete example. Let's take the most natural relationship we can think of: the relationship between a mother and her child. In topic map terms, this relationship can be described as follows: first we establish the type of the relation. In the case of a mother-child relationship we could say that the type of relationship is one of *family*. After we have decided on the type of relationship, we'll focus on the topics between which the relationship is being established. In this example, we have the mother, *Jane*; and the child, *Michael*. So, *Jane* plays the role of *mother* and *Michael* plays the role of *son*. If we wanted to notate this exact relationship we could do that, for example, in the following manner:

Jane [mother] &#8592; family &#8594; [son] Michael 

That's it! An association is of a given type. And each topic in the association plays a role in the specific relationship that is being asserted.

Another important thing to take into account is that in Contextualise all of the above entities are topics. So, the obvious two topics are *Jane* and *Michael*. But, also *mother*, *son* and *family* are all (separate) topics.

Let's take a look at another couple of associations. Specifically, we'll take a look at the relationship between *Jane* and her husband, *Peter*. And, we'll also take a look at the relationship between *Jane* and the company she works for, *Acme Widgets*. So, between *Jane* and *Peter*, her husband, we can again say that the type of relationship between them is one of *family*. Let's write down this association in a similar manner to what we did above:

Jane [wife] &#8592; family &#8594; [husband] Peter

So, between Jane and Peter there is a relationship of type *family* with *Jane* playing the role of *wife* and *Peter* playing the role of *husband*.

And, the relationship (or association, in topic map terms) between *Jane* and the company she works for could be described in the following manner:

Jane [employee] &#8592; employment &#8594; [employer] Acme Widgets

Remember, all of the entities in the above associations would be topics including *husband*, *employee*, *employment*, *employer* and the more obvious ones like *Peter* and *Acme Widgets*.

Because all of the above entities are topics, you can attach (information) resources to them. In topic maps terminology, *occurrences* are what connect information resources to topics.

### Occurrences and Information Resources
As mentioned before, from a topic map point of view, an occurrence is what establishes a connection between a topic and an information resource. In practical terms, you don't have to really think about it like that. That is, you just *attach* resources to a topic, for example, by uploading an image or providing a link to a YouTube video and behind the scenes, without any further action on your behalf, Contextualise will create the accompanying occurrence (object).

Out of the box, Contextualise supports *attaching* the following types of information resources to topics:

* [Markdown](https://daringfireball.net/projects/markdown/syntax)-based text
* Images
* Files
* Video links
* Links
* glTF-based 3D scenes

### Scopes

Pending
