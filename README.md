# Developer Portfolio 🔥 


## A clean, modern and responsive dev portfolio using Tailwind CSS & Next JS


<p align="center">
  <kbd>
    <img src="https://s9.gifyu.com/images/overview.gif"></img>
  </kbd>
</p>

### Just Simple and well design portfolio to showcase works and skills
 - Useful for the freelancing journey 🚀. You can showcase your skills and the works you have done.   
 - Highly customizable portfolio. You can easily customize it as you want.     

## Live Demo 🚀
[don't click here](https://dhavalcode.com)

## Technologies Used 🖥️

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Email JS](https://www.emailjs.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Iconify](https://iconify.design/)



## Getting Started

```bash
# Clone this repository
git clone https://github.com/dhavalCode/dev-portfolio.git

# Go into the repository
cd dev-portfolio

# Setup default environment variables

# For Linux
cp env.example .env.local
# For Windows
copy env.example .env.local

# Install dependencies
npm install

# Start a local dev server
npm start
```

## Setup 

- Create ENV File 

```bash
- dev-portfolio
  - node_modules
  - public
  - src
  - .env         <-- create it here
  - env.example  <-- this is the base file
  - .gitignore
  - package-lock.json
  - package.json
```

```env
// .env
EMAIL_SERVICE_ID= "YOUR SERVICE ID"
EMAIL_TEMPLATE_ID= "YOUR TEMPLATE ID"
PUBLIC_KEY= "YOUR PUBLIC KEY"
```
- Email JS - [Sign Up](https://dashboard.emailjs.com/sign-up)
- Quick Tutorial : https://youtu.be/I4DKr1JLC50



## Customize according to your need.

#### Personalize page content in `src/mock/profile.js` & modify it as per your need.

```javascript
export const SOCIAL_LINKS = [
  {
    link: 'https://www.facebook.com/inha.yoon.75/',
    icon: 'akar-icons:facebook-fill',
  },
  {
    link: 'https://github.com/yooninha',
    icon: 'akar-icons:github-fill',
  },
  {
    link: 'https://dreampulse-dev.tistory.com/',
    icon: 'simple-icons:tistory',
  },
];

export const HERO_TITLES = ['Inha Yoon', '3D Graphic Developer', 'Game Creation Enthusiast'];

export const aboutParagraph =
  'Highly motivated and enthusiastic Full Stack Developer with experience in 3D graphics, developing and create game such as Unreal, Unity, graphic apis. ';

export const contactEmail = 'dchipin@naver.com';

export const documentTitle = 'Hello I am Inha Yoon | Full Stack Developer | Game Creation Enthusiast'


```

#### Customize Project Section

 `/src/mock/projects.js`
 
 - change projects with yours.

#### Customize Skill Section

 `/src/mock/tech-skills.js`
  
  - change skills with yours.
  - You can easily add new skill, new icon by providing iconify icon name.
  - example as below: 
```javascript
  {
    label: 'Your Skill',
    proficiency: '90%',
    icon: 'icon',  // <-- find icon from iconnify
    iconClasses: 'text-3xl', // <-- add classes
  }
```

## Add more Lottie
- checkout this directory `src/mock/lottie`
- You can add more lottie in `.json` format and use it. 


## Deploy on Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FdhavalCode%2Fdev-portfolio%2F)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## For the Future
If you want to add more, Please don't hesitate to open a [pull request](https://github.com/dhavalCode/dev-portfolio/pulls).


##  👋 Get in Touch

[![Twitter Follow](https://img.shields.io/twitter/follow/dhavalcode?style=social)](https://twitter.com/dhavalCode)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dhavalcode) 



