# Big Money App Idea

## Table of Contents

### Introduction

This application was developed as way to help educate people and to understand their budgeting habbits providing a way for them to be able to set goals based on their income, current needs and the things that they want. This app was developed after I put our a request on LinkedIn to see if there was some cool idea's out their for an application and this was one which I was keen to explore a bit more to get to an MVP level. 

My client: Andrew Taylor

The idea: to try and develop an app similar to the pocketbook app but using a rewards based system where they could set different things want either wanted to or needed to purchase. This would sit over their bank app giving them a easy to use  GUI to help test and manage their budgets and understand different elements about their spending. 

The goal: To deliver a level of functionality consistent with an MVP level concept which we could then explore further after testing and reviewing.

Research shows that most Australians have low to medium budgeting. The vast majority of research respondents indicated that they either don't budget or budget in a no systematic manner ie in their heads.  Whilst the underlying causes of this are various one of the key reasons is that the budgeting process is tedious and requires extensive ongoing maintenance - people simply don't pursue the process over time , irrespective of their intentions.  Similarly , people with low financial literacy do not know how to start or are overwhelmed with the process.  This app provides a new method for budgeting and increasing financial literacy by shifting the budgeting process from an expense analysis approach to a desire driven model and ensures that sustaining a budget is as easy as one simple step of prioritising the current set of wants.

### The Technology

I discussed with the client the technology stack that we would look at using, as a start I advised that it would have to be Javascript based but in regards to what we would use to develop would be based on what best serves the idea's concept. As we had limited time to develop the application, we decided to try and make a dynamic version of the application to best showcase the idea as a proof of concept where we could look at developing a complete backend with the required functionality if we decided to pursue the project further. This involved originally an app with two separate core components being the MyBudget and MyWealth elements which would be able to showcase their bills, needs and wants and provide a engaging and illustrative


### Development stages:

#### First communication - LinkedIn Post :

As I wanted to see whether I could take on a project with a real life client so I put a request on my LinkedIn to see if there were any cool ideas which would suit the project brief. I got a lot of traction online and two ideas stuck with me:

1. MRI scanning tests for training Doctors and identifying and understanding different types of scans.
2. Budgeting app aimed at helping young people understand all elements of their business.

As I had limited time I tried to organise meetings as quickly as I could and unfortunately it was a lot harder to be able to get the potential clients to sit down so we could discuss the project. The person doing the MRI scanning was in the end unavailable to participate in the project as he was looking at developing the application through an agency which left the budgeting app to develop. I understood the degree of difficulty that would be involved developing a budgeting app but underestimated the time it would take to define each different component and start building them out through a purely react front end.


#### First Meeting 1:

For the first meeting I sat down with the client and went through the structure of his idea and how it would work. The first part of what we discussed was a) what did the app need to solve and b) what was his vision for an MVP version of that app. We ran through the user cases and how this application would be used in the future.

The key outcomes of this meeting were to:

- Set the expectations on both of our ends especially around the input from both parties and what the hopeful expected outcome would be for the project.
- The best form of communication and a plan to meet up and discuss the project as certain elements were defined and achieved. We agreed that Trello would be the best way to define the user cases and follow our development plan as it progressed. 
- Expectations around client and developer including the expectations for the code and who owns it.

### Defining the first steps
<img width="1032" alt="at - email1" src="https://user-images.githubusercontent.com/25731546/26932128-f260739a-4ca5-11e7-8df2-c73c8b0b6748.png">

### Reviewing the concepts from Andrew and providing feedback around what we could look at doing
<img width="1028" alt="je email 1" src="https://user-images.githubusercontent.com/25731546/26932130-f2685650-4ca5-11e7-88fb-cf2ff367c9cf.png">


### Defining the core goal of what the app will achieve:
![photo](https://user-images.githubusercontent.com/25731546/26929866-964ca076-4c9e-11e7-8c26-39ce6ba30560.jpg)

### Wireframe designs of the HomePage:
![homepage](https://user-images.githubusercontent.com/25731546/26930201-f80bca66-4c9f-11e7-8725-fbf289a62695.png)

### Wireframe designs of the MyBudget area:
![mybudget](https://user-images.githubusercontent.com/25731546/26930203-f8422da4-4c9f-11e7-9a36-2fe575752146.png)

### First review of the rules behind the application:
![budgeting tool structure](https://user-images.githubusercontent.com/25731546/26932462-deec0c74-4ca6-11e7-84f3-ea255b582cbb.png)

### Trello screen 1 - Projet Breakdown
<img width="1127" alt="big money - screen1" src="https://user-images.githubusercontent.com/25731546/26953108-d947ec62-4ceb-11e7-9995-8b8be4ef0398.png">

### Trello screen 2 - Project Breakdown
<img width="1121" alt="big money - screen2" src="https://user-images.githubusercontent.com/25731546/26953109-d94a1eb0-4ceb-11e7-8364-382ebb38a453.png">


#### Meeting 2:

The second meeting was organised just over a week later due to unforeseen circumstances which didn't provide us a lot of time to be able to fianlise the design and how the processes.

In this meeting we discussed the:

- First Initial app design including the layout and how each different element process would work. 
- The budgeting formula and process: This was an element this still had not been finalised and played a large role in how the application would get designed and developed. The key outcome for this was that there were two initial ways we could go about designing the budgeting process:

### Attempt to define the processes and the application design
<img width="1000" alt="at email 2" src="https://user-images.githubusercontent.com/25731546/26932129-f2648d9a-4ca5-11e7-8d69-2c24b6549cf9.png">

### Defining the different values for the schema
<img width="699" alt="budgeting_element_-_various_steps_on_big_money_app_planner___trello" src="https://user-images.githubusercontent.com/25731546/26929963-0a0e4a5a-4c9f-11e7-930d-b446ed7b3361.png">

### High level design of the rules process
![photo](https://user-images.githubusercontent.com/25731546/26929866-964ca076-4c9e-11e7-8c26-39ce6ba30560.jpg)


1. A priority based system. This would use the persons income, them assigning certain transactions from their bank account as bills and assigning a weekly amount to spend on food, groceries etc. Then a certain amount would be set aside where they could put money aside a portion of their money depending on the level of priority and total cost of that item. This was a concept which I put forward but on feedback from the client this was not the initial system he was looking for and he asked for the weekend to better understand how he wanted the process to work.

2. An item based system. This would be based on capping the total amount of items that they could put in their budgeting and designate a different portion of their disposable income based on the total amount of items available. The issue was this was that it would take a lot of different functionality and provide issues when trying to display the data based on the state that I had setup for the assigment. In the end, we agreed to leave it for now and try to see how far we could get with the structure he wanted and if we needed we could adjust the rules around the application after reviewing it further.

<img width="270" alt="trello screenshot" src="https://user-images.githubusercontent.com/25731546/26929367-c16ae9cc-4c9c-11e7-99dd-a996db7f06a9.png">

Note: It was around this time I was starting to get worried that the core requirements for the assignment weren't completely defined prior to me starting the development around them. This slowly became a much larger issue more and more as development continued where there were certain holes in how the application would be able to function.

#### Meeting 3 - Final Meeting:

For the final review of the project, there were some key elements which we discussed around where the MVP product was at and what would be next to help this project get to the next stage of development. As far as the assignment process and development there are still quite a few issues around how the process will work and the rules which would need to be built into the actual application to ensure that the application achieves it's core goals and also is functional to a certain extent. The actual concept will continue to be developed but I believe that the actual budgeting process needs to be more formalised before proceeding to the final stage of development. 

Key takeaways:

Looking at my assignment now, there are quite a few things wrong with the way I approached it from the begininning.

Here are some key take aways:

- Don't get appendicitus just prior to the assignment

Appendix are weak.

- Managing nested state in your react application and why Redux would have been the smart option... because managing nested state is a PAIN and causes serious heartache.

Redux was one of those things I would have loved to develop into my application but I consistently put it on the backburner based on the concept that I thought it would have been too hard to complete in time. Looking back, I think I spent too much time developing 'functionality' and not developing and implementing the functional core components of the assignment leaving me no time to actually stop and implement the most important elements.

The key reason why Redux was so important for me is because my components were nested too deeply and managing and tracking certain data that I was passing through would get to between 4-5 levels causing headaches.

Redux allows you to have a 'store' where you can store and call your state into components depending on where they are located in your application. This removes the stress behind developing and passing through functions, making sure that they are in the correct area and also passing through the data that needs to be fed into those functions. I did learn a lot about how to build and develop different types of functions and wish that they could have been translated onto my page, but I will have to continue understanding how you need to call these functions and where. This would have made developing and implementing stateless components in my application a lot easier rather than a lot of the cluttered and built up code that I have sitting in my different core components.

The other reason why Redux was so important is because it helps you define your basic stateless components and build out all the required stateful components when you require them. 

- Defining the component structure prior to starting development including defining the file structure

I believe that if I had completely scoped out how the look and feel would be including the processes behind the budgeting element then I would have a very different looking appliction than what I have currently. Understanding how state worked properly was a learning curve for me as I saw the benefits and the issues with nested state elements and how it can compound issues further on down the track. Passing data through your state and managing it can take a lot of work to get the exact outcome that your looking for from your state but if you are able to have a strong state structure and ability to call data that doesn't clutter your code/cause spaghetti functionality then it saves you a lot of hassle.

- Developing my functions using a step by step process, need to take a step back from writing the functions all at once and go through ensuring that a) I can receive the data b) the function produces the correct output c) the parameters I am passing through are completely connected.

This ties back into the how we manage and use out state, structure our data and call functions throughout different components of your app. Ensuring that you are following a standard process of developing your functions on a step-by-step basic is essential when you are developing more complex functions in your app. What I found that I was doing is writing out a complete function and then trying to make the puzzle pieces pull together, what I needed to be doing is grabbing each piece one at a time and connecting them in a way that made sense in the context of the situation.

