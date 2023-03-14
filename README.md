# GitHub User Search App

This app allows you to search for GitHub users by username and view their profiles. It was built using React and leverages the GitHub API to fetch user data.

To create the app, I used a design from [frontendmentor.io](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6) which was created in Figma.

# You can view the live site [here.](https://kieran-gill-github-user-search-app-vite.vercel.app/)

## Table of Contents

- [GitHub User Search App](#github-user-search-app)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Technologies Used](#technologies-used)
  - [Components and Styling](#components-and-styling)
  - [Responsive Design](#responsive-design)
  - [Error Handling](#error-handling)
  - [Dark Mode](#dark-mode)
  - [Future Improvements](#future-improvements)
  - [Conclusion](#conclusion)
  - [Useful Resources](#useful-resources)
  - [Author](#author)

## Screenshots

<table>
<tr>
<td>
  <img src="screenshots\darkmode screenshot.png" width="500" />
</td>
<td>
  <img src="screenshots\mobile dark screenshot.png"  width="200"  />
  </td>
  </tr>
<tr>
<td>
  <img src="screenshots\lightmode screenshot.png" width="500" />
</td>
<td>
  <img src="screenshots\mobile-light screenshot.png"  width="200"  />
  </td>
  </tr>
</table>

## Links

- Live Site URL: [https://kieran-gill-github-user-search-app-vite.vercel.app/]()

# My process

## Technologies Used

- React
- React Hooks (useState, useEffect, useLocalStorage)
- CSS (grid, flexbox)
- Vite
- Mobile-first workflow
- CSS custom properties

## Components and Styling

The app consists of three main components: SearchForm, SearchResults, and UserCard. While building the app, I considered dividing SearchResults into smaller components, but ultimately decided against it to keep the codebase simple and readable.

To style the components, I created a CSS file for each one, which was manageable for this small project. However, I recognize that this approach could become unwieldy in larger projects, so I plan to use a CSS-in-JS library like styled-components in the future.

## Responsive Design

I used a combination of grid and flexbox to ensure the app is fully responsive for mobile, tablet, and desktop devices. The app adjusts its layout and styles to fit each screen size and orientation.

## Error Handling

I implemented error handling for three scenarios: when the user searches without entering a username, when the entered username is not found, and when the API rate limit (60 requests per hour) is exceeded. Each scenario displays a different message to the user, making it clear what went wrong and how to proceed.

## Dark Mode

I added a dark mode theme feature to the app by following an [online tutorial.](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/) While the approach I used to implement it works, I believe there may be better ways to achieve this functionality. Although I considered using useContext, I ultimately decided against it as it might be overkill for this project. However, I plan to refactor the code in the future to improve the implementation and make it more maintainable.

## Future Improvements

In the future, I plan to refactor the code to make it more modular and maintainable. I also want to refactor the dark mode feature so that is meets best practice standards.

## Conclusion

Overall, I had a lot of fun building this GitHub user search app and learned a lot about React and CSS. I hope you find it useful and enjoyable to use. Feel free to check out the code and leave any feedback or suggestions on my [linkedIn](www.linkedin.com/in/kieran-gill)!

## Useful resources

- [CSS Tricks article about implementing dark mode](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/)

## Author

- [Kieran Gill - Portfolio ](https://kieran-gill-portfolio.netlify.app/)
- [Frontend Mentor profile](hhttps://www.frontendmentor.io/profile/KieranWebDev)
- [LinkedIn](www.linkedin.com/in/kieran-gill)
