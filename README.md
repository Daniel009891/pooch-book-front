# **Poochbook**

Poochbook is a social media platform to share all the lovely memories or silly moments you have with your pets. It was prodominently created for dogs however any pets are welcome! On poochbook you can create your fury best friend a profile, which gives you access to add posts showing what they've been up to, like or downvote other users posts, comment on posts and save your favoirite posts. You can also follow your favourite members, so you always stay in the loop with their crazy antics on a dedicated feed page. 

Once a memeber has signed up they will be directed to the sign in page. After signing in successfully you will be directed to the hompage,which displays all the posts from other members. To the right hand side (or top if on mobile) you have a popular profiles section, this is where the most followed users are located. if you decide to follow one or more of these, you will be able to see their posts in the dedicated feed section of the NavBar. If you click your profile in the top right corner you can add a picture to represent your pet, update your bio and username. Profile stats are also displayed including number of posts, followers and following. The NavBar also contains a saved section, this will update when you save your favourite posts from either the feed or homepage. 

Once you're on the HomePage, you can "Add post", you can also use the search bar above the "Add post" section to search through all posts using a keyword or a user's name.

On the posts page you will see the full post on a card, the number of likes, number of downvotes and number of comments at the bottom section. At the top section the users profile, the date the post was created on and the save icon is displayed. There is a dropdown menu also in the top section represented by three dots, this allows users to editor delete posts they own. This is the same with comments the user owns.

This project is the final of five projects that need to be completed to receive a diploma in Software Development from The Code Institute.

## **Responsive screen display**

![screenshot](documentation/features/responsive-design.png)


A live version of this website will be found here: https://pooch-book-front-57849ba2db72.herokuapp.com/

* Deployed FrontEnd - https://pooch-book-front-57849ba2db72.herokuapp.com/

* Deployed BackEnd API - https://pooch-book-api-b940e6d3707a.herokuapp.com/

* BackEnd Repo - https://github.com/Daniel009891/my-api

* FrontEnd Repo - https://github.com/Daniel009891/pooch-book-front



## **Table of Contents** ##
<details><summary>UX</summary>

- [User Demographic](#user-demographic "User Demographic")
- [Site Goals](#site-goals "Site Goals")
- [Audience](#audience "Audience")
- [User Stories](#user-stories "User Stories")

</details>
<details><summary>Design</summary>

- [Colour Scheme](#colour-scheme "Colour Scheme")
- [Typography](#typography "Typography")
- [Iconography](#iconography "Iconography")
- [Wireframes](#wireframes "Wireframes")
- [Images](#images "Images")

</details>
<details><summary>Features</summary>

- [NavBar](#navbar "NavBar")
- [Home Landing Page](#home-landing-page "Home Landing Page")
- [Post Page](#post-page "Post Page")
- [Feed](#feed "Feed")
- [Liked](#liked "Liked")
- [Saved](#saved "Saved")
- [Profile Page](#profile-page "Profile Page")
- [Sign-in](#sign-in "Sign-in")
- [Sign-up](#sign-up "Sign-up")
- [No results found](#no-results-found "No results found")
- [CRUD](#crud "CRUD")
- [Defensive Design](#defensive-design "Defensive Design")
- [Future Implementations](#future-implementations "Future Implementations")
- [Components](#components "Components")

</details>

<details><summary>Technologies Used</summary>

- [Languages Used](#languages-used "Languages Used")
- [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used "Frameworks, Libraries and Programs Used")
- [Databases platform and cloud storage](#databases-platform-and-cloud-storage "Databases platform and cloud storage")

</details>
<details><summary>Testing</summary>

- [Introduction](#introduction "Introduction")
- [Validator testing](#validator-testing "Validator Testing")
- [Manual Testing](#manual-testing "Manual Testing")
- [User Story Testing](#user-story-testing "User Story Testing")
- [Fixed Bugs and Solutions](#fixed-bugs-and-solutions "Fixed Bugs and Solutions") 
- [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")

</details>

<details><summary>Deployment</summary>

- [GitHub](#github "GitHub")
- [Heroku](#heroku "heroku")

</details>


<details><summary>Credits</summary>

- [Acknowledgements](#acknowledgements "Acknowledgements")
- [Sources](#sources "Sources")
- [Media](#media "Media")

</details>

------------------------------------------------------------------------------------------------------------

## **UX**

### **User Demographic**

This application has been designed for users with all kinds of pets and ages, to showcase their pets adventures and to make friends with like minded owners. Make your fury best friend a profile and start interacting!


### **Site Goals**

The goal for this site has been to build a content sharing platform to allow users to make social media profiles for their pets. Including adding posts, following and unfollowing each other, liking or downvoting posts, as well as saving your favourite posts. A search bar is also provided to search for posts using keywords, or simply search a users name.


### **Audience**

For animal lovers and their pets! Owners looking to make friends or simply an animal lover with no pets! All are accepted.

### **User Stories**
User Stories and Backend Tasks can be found in this GitHub repository project Kanban board, and for this project, all user stories can be found [here](https://github.com/users/Daniel009891/projects/4)

## **Design**

### **Colour Scheme**
The colour scheme was chosen from researching trending colour schemes on this website:
[coolers](https://coolors.co/palettes/trending).
- The background colour for the app is  * #F8F8F8 *
- The background colour for the liked icons in posts is * #F85032 / #FFA500 *
- The background colour for downvotes is * #FFA500 / #2142B2*
- The background colour for the "light" buttons is * #2ed9ff *
- The background colour for the unfollow button is * #242a3d*

The colour palette as mentioned above.
The source to put this palette together was [here](https://coolors.co/)

![screenshot](documentation/features/colour-palette.png)
![screenshot](documentation/features/colour-palette-extra.png)



### **Typography**

All fonts are from the Google Fonts library. The following fonts were chosen for the page:

- 'Manrope', sans-serif was used for the whole project

### **Iconography**

The logo used for this project was made using [Looka](https://looka.com/).

![screenshot](documentation/features/poochbook-logo-new.png)

- Other icons were taken from [Font Awesome](https://fontawesome.com/)

### **Wireframes**

Wireframe for home page/feed:

![screenshot](documentation/wireframes/home-page-wireframe.png)
<br>
<br>

Wireframe for post page:

![screenshot](documentation/wireframes/post-page-wireframe.png)
<br>
<br>

Wireframe for profile page:

![screenshot](documentation/wireframes/profile-page-wireframe.png)
<br>
<br>

Wireframe for the page to create a post:

![screenshot](documentation/wireframes/post-create-page-wireframe.png)
<br>
<br>

### **Images**

All images for the website's pages were sourced through google and stored on Cloudinary.

The images used for the posts and pet profiles were sourced from google, but mostly from my pet I live with (Bailey) and my friend's pets. 

## **Features**

### **NavBar**
NavBar, the user is not logged in.

![screenshot](documentation/features/nav-bar-logged-out.png)

NavBar, the user is logged in.

![screenshot](documentation/features/nav-bar-logged-in.png)

### **Home Landing Page**

The home screen and landing page, with the "recommended users to follow" sidebar.

![screenshot](documentation/features/home-page.png)

### **Post Page**

- The post's page, with the recommended user to follow sidebar.
- Heart and down arrow buttons to like and downvote any posts you wish. Each icon goes a solid colour once a user has clicked on it, these icons will also undo if clicked again.
- On the top right of the post beside the date posted, you have a bookmark icon to save this post, which later you can view in the "Saved" section from the NavBar. If you save a post, it will be indicated by the "bookmark" icon, which goes a solid colour once it's clicked, if clicked again, this will undo the action of saving the post.
- The three dots on the side of the post image is the button to edit or delete your post.
- And the comment section, create, edit, and delete your comments!


![screenshot](documentation/features/post-page-top.png)
![screenshot](documentation/features/post-page-bottom.png)


### **Feed**

The Feed consists of posts from users that you follow.

![screenshot](documentation/features/feed-page.png)

### **Saved**

The Saved page consists of posts the user has specifically saved for future viewing.

![screenshot](documentation/features/saved-page.png)

### **Profile Page**

- Your profile page, or another user's, along with the sidebar of recommended profiles to follow. 
- The profile page contains a bio section, the bars in the corner to edit your profile and change your username or password.
- The page also holds all of the posts that the owner of the page has added.

![screenshot](documentation/features/profile-page.png)

### **Sign-in**

Sign-in page, along with a link to sign up for an account if you haven't already!

![screenshot]()

### **Sign-up**

Sign-up page, along with a link to sign in if you have an account already!


![screenshot]()

### **No results found**
#### The "No results image" will appear when:

* The search bar entry does not exist:

![screenshot]()

* An invalid HTTP request is made:

![screenshot]()

* On the user's profile page, if no posts have been added yet:

![screenshot]()

### **CRUD**
The CRUD functionality for this project is as follows:

* The user can, once signed up to an account, update their profile with a profile picture/bio. They can also update their username and password from the profile page.
* The user can also, once a post has been created, update or delete their post. The three dots on the right of the post's image will either delete the post (and bring you back to the home page once this is done) or edit your post, bringing you to an edit post form.
* Users can also, once they've created a comment on a post, delete or edit their comments. If chosen, editing a comment will bring up a small form to retype your comment and then you can either save or close if you change your mind.
* Users can also like, downvote and/or save posts, and you can also undo all of these actions if they changed their minds.
* Users can also follow other users' accounts and unfollow them if they desire.

### **Defensive Design**

* When making a new account, the following message will appear if any of the inputs are left blank:

![screenshot]()

* Login attempts with the wrong credentials, will show the following message: 

![screenshot]()

* Login attempts leaving any input blank, will show the following message: 

![screenshot]()

* Attempts to save, like or downvote your posts will show the following messages: 

![screenshot]()
![screenshot]()

* If you choose to edit or delete your post, clicking the three dots on the right side of the post's image on the post page, will show the following icons, these icons display pictural descriptions on what purpose they serve, as well as a text description.

![screenshot]() 

![screenshot]()

* In the "Add post" section, leaving the title input blank will show the following message:

![screenshot]()

- Users who forget to add an image while creating a post will still see the post published, with a default image as shown below. Going back into the post page and editing the post will allow the user to rechoose an image:

![screenshot]()


### **Future Implementations**
Future plans for this project include:

- Add more fields for a user to add to their profile. Such as location, age, and/or email address and other social media platforms.
- Add a bark feature, similar to "poke" on Facebook, as an alert or notification.
- Add a feature to allow users to see who liked their posts.
- Allow users to delete their profile.

### **Components**
* Asset.js - component for the spinner seen while the page is loading, used in PostPage.js, PostsPage.js, PopularProfiles.js & ProfilePage.js files.

* Avatar.js - component used for displaying the profile image. Used in NavBar.js, Post.js, Profile.js, ProfilePage.js, Comment.js, and CommentCreateForm.js files.

* MoreDropdown.js - component used for the functionality and display of the icons to edit/delete posts, comments, and profiles. Only shown to the owner of such posts and their profiles.

* NavBar.js - component used for the display of the NavBar, added into the main app.js file to display at the top of the page.

* NotFound.js - component used for displaying an error image and message if an invalid page has been typed in.

## **Technologies Used**
### **Languages Used**
- HTML
- CSS
- Javascript
- React


### **Frameworks, Libraries, and Programs Used**
- [Axios](https://axios-http.com/): a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
- [Favicon](https://favicon.io/): Used to generate the favicon image from a logo generated.
- [jwt-decode](https://jwt.io/): is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
- [React-Bootstrap](https://react-bootstrap.github.io/): a component-based library that provides native Bootstrap components as pure React components.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): enables you to implement dynamic routing in a web app. 
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component): a technique that automatically adds the next page as the user scrolls down through content, more content is loaded.
- [Font Awesome](https://fontawesome.com/): a widely-used icon set that gives you scalable vector images that can be customized with CSS.
- [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/): an open-source tool for running technical website audits.
- [Am I Responsive?](https://ui.dev/amiresponsive): to ensure the project looked good across all devices.
- [HTML Markup Validation](https://validator.w3.org/): used to validate HTML code syntax.
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/): used to validate CSS code syntax.
- [Balsamiq](https://balsamiq.com/): used to create mockups/wireframes of the project prior to starting.
- [Google Fonts](https://fonts.google.com/): a computer font and web font service owned by Google. This includes free and open source font families.
- [GitHub](https://github.com/): an Internet hosting service for software development and version control using Git.
- [Heroku](https://heroku.com/): a cloud platform as a service (PaaS) supporting several programming languages. Used to 
deploy and store for final deployment.

### **Databases platform and cloud storage**

- ElephantSQL Postgres: database service provided by ElephantSQL for data storage.
- Heroku Postgres: SQL database service provided directly by Heroku for storing data.
- Cloudinary: to store images and static files in production.
- Heroku: to deploy and run the application in production.

## **Testing**
### **Introduction**
This project has been continuously tested throughout the development stages using the following features:
- Python terminal for backend functionalities
- Google Developer Tools
- Manual Testing

### **Validator Testing**
- All HTML files passed through the HTML checker with no errors.

![screenshot]()


- CSS files pass through the Jigsaw validator without error.

![screenshot]()

- All JSX code was validated and corrected throughout the development of the project.

![screenshot]()


#### **LightHouse testing**

* **For Desktop:**

    | Section | Performance | Accessibility | Best Practices | SEO |
    | --- | --- | --- | --- | --- |
    | Home |  |  |  |  |
    | Post Page |  |  |  |  |
    | Feed | |  |  |  |
    | Saved | |  | |  |
    | Sign Up |  |  |  |  |
    | Sign in |  |  |  | |
    | Profile |  |  |  |  |

* **For Mobile devices:**

    | Section | Performance | Accessibility | Best Practices | SEO |
    | --- | --- | --- | --- | --- |
    | Home |  |  |  |  |
    | Post Page |  |  |  |  |
    | Feed |  |  |  |  |
    | Saved |  |  |  |  |
    | Sign Up | | | |  |
    | Sign in | |  | |  |
    | Profile |  |  | |  |


### **Manual Testing**
Manual testing for this project was carried out as follows: 
- Users can see sign-in, sign-up, and about pages only when not logged in.
- Users can create a new account.
- Users can then, sign in to their account and then be redirected to the home page.
- Users can log out.
- Once signed in, users can create, like, save, and comment on posts. They can edit and delete their posts and comments. 
- Users can edit and update their profiles, which include a profile picture, bio entry, and a separate username and password edit feature.
- All NavLinks and buttons go to their destination.
- Clicking on the post image brings you to the post's page.
- You can like, downvote and save and also undo all of these actions if you change your mind.
- Once you hover over the like/comment/save icons, they let you know if you need to sign-in to use this feature, and once clicked on if the user is signed out, you will be redirected to the sign-in page.
- The user is notified of what each icon represents. In each post page, if the user is the owner, the three dots to the right side of the post image will bring up the edit and delete feature, both icons have a text description telling users what they represent.
- The site was continuously built on google chrome, and once built, it was successfully tested on safari browser. The only issue found on safari was the inability to sign-in properly, which was resolved after some research on Slack. (mentioned and detailed in the fixed bugs section below) 


### **User story testing**
**User story:**

1: User: Navigation - *"As a user I can view a NavBar from every page so that I can navigate easily between pages."* ✅

2: User: Routing - *"As a user I can navigate through pages quickly and easily so that I can view content without page refresh."* ✅

3: User: Authentication - Sign up - *"As a user I can create a new account so that I can access all the features for signed up users."*
✅

4: User: Authentication - Sign in - *"As a user I can sign in to the app so that I can access functionality and features for logged in users."* ✅

5: User: Authentication - Logged in Status - *"As a user I can always tell if I am logged in or not so that I can log in to use features."* ✅

6: User: Authentication - Refreshing access tokens - *"As a user I can maintain my logged-in status (for 24hrs) until I choose to log out so that my user experience is not compromised."* ✅

7: User: Navigation: Conditional rendering - *"As a logged out user I can see sign in/sign up options so that I can sign in/sign up."* ✅

8: User: Avatar - *"As a user I can view other user's avatars so that I can easily identify users of the application."* ✅

9: User: Create posts - *"As a logged in user I can create posts so that I can share my images and image content with my followers."* ✅

10: User: View a post - *"As a user I can view the details of a single post so that I can read more."* ✅

11: User: Like/save a post - *"As a logged in user I can like/save a post so that I can show and see which are my favourite posts."* ✅

12: User: View most recent posts in order - *"As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the most recent content."* ✅

13: User: Searchbar filter - *"As a user, I can search for posts with keywords, so that I can find the posts and user profiles that I prefer to see."* ✅

14: User: View liked/saved posts - *"As a logged in user I can view the posts I liked/saved so that I can find the posts that I love."* ✅

15: User: View posts of followed users - *"As a logged in user I can view content filtered by users I follow so that I can keep up to date with them specifically."* ✅

16: User: Infinite scroll - *"As a user I can keep scrolling through the images on the site, which are loaded automatically so that there is no need for a "next page/previous page" option."* ✅

17: User: Post page - *"As a user I can view the single post page so that I can read the comments specifically about that post."* ✅

18: User: Edit/delete post - *"As a post owner I can edit/delete my post title, description and image so that I can make corrections or update my post after it was created."* ✅

19: User: Create a comment - *"As a logged in user I can add comments to a post so that I can share my opinions about the post and start/have a conversation."* ✅

20: User: View comment date - *"As a user I can see how long ago a comment was made so that I know how old or new a comment is."* ✅

21: User: View comments - *"As a user I can read comments on posts so that I can read what other users think about the posts and reply to them accordingly."* ✅

22: User: Edit/delete a comment - *"As an owner of a comment I can edit and/or delete my comment so that I can edit/remove my comment from the application."* ✅

23: User: View profile page - *"As a user I can view other user's profiles so that I can see their posts and bio and read more about them."* ✅

24: User: Most popular profiles - *"As a user I can see a list of the most followed profiles so that I can see which profiles are popular and see their posts."* ✅

25: User: User profile - view user stats - *"As a user I can view statistics about a specific user: bio, number of posts, followers and users followed so that I can read more about them."* ✅

26: User: Follow/Unfollow a user - *"As a logged in user I can follow and unfollow users so that I can see and remove posts by specific users in my posts feed."* ✅

27: User: View/filter all posts by a specific user - *"As a user I can view all the posts by a specific user by filtering so that I can catch up on their latest posts, or decide to follow them."* ✅

28: User: Edit profile - *"As a logged in user I can edit my profile so that I can change my profile picture, name and bio to keep my followers updated."* ✅

29: User: Delete profile - *"As a logged in user I can delete my profile in case I decide to leave this social media."* - Future implementation.

30: Update username and password - *"As a logged in user I can update my username and password so that I can change my display name and keep my profile more secure."* ✅

31: User: "Bark/Meow" at fellow user - *"As a user I can "bark/meow" so that I can get the attention of another user."* - Future implementation.

32: Admin: Complete README documentation - *"Complete README, fully documenting sources, and all about the frontend and frameworks used."* ✅

33: User: Unlike/unsave a post - *"As a user I can unlike/unsave a post so that I can change what I see in my liked/saved feed."* ✅

34: User: Toggle button - *"As a user I can toggle the post images so that I can see them in different formats."* ✅

The link To GitHub KanBan Project - [here](https://github.com/users/Daniel009891/projects/4/views/1)

### **Fixed bugs and solutions**



### **Unfixed bugs**
- No unfixed bugs to report during the production of this project.

- There are errors in the console of these pages, that were also brought up during the walkthrough Moments. The errors are as follows:

*Failed to load resource: the server responded with a status of 401 (Unauthorized)*


## **Deployment**

### **GitHub**
The following bullet points detail the steps gone through to set up this project on GitHub:
- Create a Repository on GitHub (Not using any Code Institue Template).
- Create a new workspace. Once the workspace has started, run the following command in the terminal window:

    *npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm*

- Enter "y" to confirm installing the create-react-app package.
- Once the packages have been installed, run *npm start* to check that react is working correctly.
- Once you can see it's running efficiently, go into the App.js file and remove the React Custom header and replace it with a test text "Hello, world!", and remove the logo import at the top of the page.
- In the preview window, you should see the test text show up now.
- Once you see this test text, add, commit, and push your changes.

### **Heroku**
The following bullet points detail the steps gone through to set up this project on Heroku:
- In Heroku: Click on the "new" button and follow the steps to create a new app, noting that a unique name is required.
- Once your unique name is chosen and you've selected your appropriate region, click "Create app".
- Once this app is created, in the "deploy" tab in Heroku, you can connect this to your GitHub repository.
- From the "Deployment method" section, choose GitHub, enter the name of the repo just created and use the search feature to find it, and then click "connect".
- When you've successfully connected your repo. Go to the 'Manual Deploy' section and click 'Deploy Branch'. Click on 'build logs' to monitor the build and ensure deployment is successful. The build is completed when the log says 'Build succeeded!'.
- Next step is to install Bootstrap 4, by typing the following command in the terminal window:

    *npm install react-bootstrap@1.6.3 bootstrap@4.6.0*


## **Credits**

### **Acknowledgements**

- The Moments walkthrough was used as a guide for this project, it served as a major help in creating this site.
- My mentor at Code Institute - Martina Terlevic.

- Extra big thank you to Code Institute for this entire course, it's been a great journey so far, and the tools and support provided during this course were amazing!


### **Sources**

- The Moments walkthrough was the main source I used as a guide for this project.
- [YouTube](https://www.youtube.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [GeeksForGeeks](https://www.geeksforgeeks.org/)
- [Slack](https://www.slack.com/) - for helpful tips from fellow students!
- [W3 Schools](https://www.w3schools.com/)
- [Grammarly](https://app.grammarly.com/) - for spell checking the readme and about page.
- [Color hunt](https://colorhunt.co/) - for the colour palette in the design section.


### **Media**

- The media sourced for this website, were mostly found on Google.
- Other images were from friends and family, photos of their pets. And my own pet's images also.
- The logo was generated using a logo generator from this website - [Looka](https://looka.com/)
- The background remover tool was very useful to help with the logo and favicon - [here](https://www.remove.bg/)
- The image for favicon was generated through - [favicon.io](https://favicon.io/)
- The image for the responsive design at the top of the ReadMe was generated through -[am i responsive?](https://ui.dev/amiresponsive)


Thank you!

[Back to top](#Poochbook)