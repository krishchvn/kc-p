(this.webpackJsonpkcp=this.webpackJsonpkcp||[]).push([[0],{26:function(A,e,t){},27:function(A,e,t){},45:function(A,e,t){"use strict";t.r(e);var s=t(1),c=t.n(s),a=t(11),n=t.n(a),i=(t(26),t(27),t(7)),l=t(2),r=t(8),o=(t(28),t.p,t.p+"static/media/profile_pic2.fbcd00a7.jpg"),d=t(0),g=function(){var A=Object(s.useState)(!0),e=Object(r.a)(A,2),t=e[0],c=e[1],a=Object(s.useState)(!1),n=Object(r.a)(a,2),i=n[0],l=n[1];return Object(s.useEffect)((function(){var A=setInterval((function(){c(!1),l(!0)}),4e3),e=setInterval((function(){c(!0),l(!1)}),8e3);return function(){clearInterval(A),clearInterval(e)}}),[]),Object(d.jsxs)("div",{className:"h-screen w-full bg-black flex items-center justify-center relative ",children:[Object(d.jsx)("div",{className:"w-80 h-80  relative h-full w-full",children:Object(d.jsx)("img",{src:"https://www.pngkey.com/png/full/63-633306_tall-building-silhouette-at-getdrawings-png-transparent-skyscraper.png",alt:"Background Image",className:"w-full h-full object-cover object-center absolute top-0 left-0 opacity-5"})}),Object(d.jsxs)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center",children:[Object(d.jsx)("img",{src:o,alt:"Overlay Image",className:"w-full xs:w-24 xs:h-24 sm:w-40 sm:h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full mx-auto mb-4"}),Object(d.jsxs)("div",{className:"text-base text-center pt-4 ",children:[t&&!i&&Object(d.jsxs)("div",{className:"text-2xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl animate-fadeIn  font-oswald",children:[Object(d.jsx)("span",{className:"text-white",children:"Hi, I'm Krishnakumar "}),Object(d.jsx)("span",{className:"text-yellow-400",children:"Chavan"})]}),i&&!t&&Object(d.jsxs)("div",{className:" text-2xl  xs:text-2xl sm:text-4xl md:text-4xl lg:text-5xl animate-fadeIn font-oswald",children:[Object(d.jsx)("span",{className:"text-white",children:"Seeking Internship Opportunities"}),Object(d.jsx)("span",{className:"text-yellow-400",children:" For Summer 2024 "})]})]})]})]})},j=t(17),x=t.n(j),m=t(19),b=(t(31),Object(s.createContext)()),B=function(A){var e=A.children,t={project:Object(s.useRef)(null),about:Object(s.useRef)(null),skills:Object(s.useRef)(null)};return Object(d.jsx)(b.Provider,{value:t,children:e})},u=function(){return Object(s.useContext)(b)},h=function(){var A=Object(s.useState)(!1),e=Object(r.a)(A,2),t=e[0],c=e[1],a=function(){c(!t)},n=u(),l=function(A){n[A]&&n[A].current&&n[A].current.scrollIntoView({behavior:"smooth"})};return Object(d.jsx)("nav",{className:"bg-gradient-to-b from-yellow-700 to-yellow-600 p-8 h-auto w-full font-oswald font-light   text-white ",children:Object(d.jsx)(m.SlideDown,{children:t?Object(d.jsxs)("div",{className:" flex-col justify-between",children:[Object(d.jsx)("div",{className:" float-left mx-2 mt-1 lg:hidden ",children:Object(d.jsx)("button",{onClick:a,className:"",children:Object(d.jsx)(x.a,{})})}),Object(d.jsxs)("div",{className:"md:flex md:justify-center text-center text-sm  md:text-lg lg:text-3xl",children:[Object(d.jsx)("div",{className:"px-10 md:px-4 py-1 ",children:Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("button",{className:" transform font-light transition duration-500 hover:scale-110 opacity-90",children:"home"})})}),Object(d.jsx)("div",{className:"px-4 py-1 ",children:Object(d.jsx)("button",{onClick:function(){return l("about")},className:"transform font-light transition duration-500 hover:scale-110 opacity-90",children:"about"})}),Object(d.jsx)("div",{className:"px-4 py-1",children:Object(d.jsx)("button",{onClick:function(){return l("projects")},className:" transform font-light transition duration-500 hover:scale-110 opacity-90 ",children:"projects"})}),Object(d.jsx)("div",{className:"px-4 py-1",children:Object(d.jsx)("button",{onClick:function(){return l("skills")},className:"transform font-light transition duration-500 hover:scale-110 opacity-90 ",children:"skills"})})]})]}):Object(d.jsxs)("div",{className:" w-full h-auto py-1 ",children:[Object(d.jsx)("div",{className:" lg:hidden",children:Object(d.jsx)("button",{onClick:a,className:"justify-end pl-2",children:Object(d.jsx)(x.a,{})})}),Object(d.jsxs)("div",{className:" hidden lg:flex justify-center text-center   text-md md:text-lg lg:text-3xl",children:[Object(d.jsx)("div",{className:"px-4 py-2",children:Object(d.jsx)("button",{className:"transform font-light transition duration-500 hover:scale-110 opacity-80",children:Object(d.jsx)(i.b,{to:"/",children:"home"})})}),Object(d.jsx)("div",{className:"px-4 py-2  ",children:Object(d.jsx)("button",{onClick:function(){return l("about")},className:" transform font-light transition duration-500 hover:scale-110 opacity-80",children:"about"})}),Object(d.jsx)("div",{className:"px-4 py-2",children:Object(d.jsx)("button",{onClick:function(){return l("projects")},className:" transform font-light transition duration-500 hover:scale-110 opacity-80 ",children:"projects"})}),Object(d.jsx)("div",{className:"px-4 py-2",children:Object(d.jsx)("button",{onClick:function(){return l("skills")},className:" transform font-light transition duration-500 hover:scale-110 opacity-80 ",children:"skills"})}),Object(d.jsx)("div",{className:""})]})]})})})},f=function(){var A=Object(s.useRef)(),e=u();return Object(s.useEffect)((function(){e.skills=A}),[e]),Object(d.jsxs)("div",{ref:A,className:"bg-gradient-to-b from-black  to-red-900 w-full h-full pb-24",children:[Object(d.jsx)("div",{className:"relative",children:Object(d.jsx)("p",{className:"text-center text-white opacity-80 text-3xl md:text-4xl lg:text-6xl font-oswald font-normal px-24 py-20 tracking-widest",children:"Skills"})}),Object(d.jsx)("div",{className:"grid grid-cols-4 gap-4 mx-10",children:[{skill:"Python",rating:"90%"},{skill:"Data Structures",rating:"85%"},{skill:"SQL",rating:"90%"},{skill:"Machine Learning",rating:"90%"},{skill:"PyTorch",rating:"70%"},{skill:"C++",rating:"90%"},{skill:"JavaScript",rating:"80%"},{skill:"ReactJS",rating:"80%"},{skill:"TailwindCSS",rating:"90%"},{skill:"Bootstrap",rating:"70%"},{skill:"Algorithms",rating:"85%"},{skill:"NodeJS",rating:"90%"}].map((function(A){return Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)("div",{className:"text-center mt-0 m-2 md:m-4 lg:m-6 text-md md:text-xl lg:text-3xl",children:Object(d.jsx)("p",{className:"text-gray-400",children:A.skill})}),Object(d.jsx)("div",{class:"w-full bg-gray-600 rounded-full h-1 dark:bg-gray-600",children:Object(d.jsx)("div",{class:"bg-red-500 h-1 rounded-full",style:{width:A.rating}})})]})}))})]})},w=t.p+"static/media/insta_fill.44373db6.jpg",C=t.p+"static/media/mail_f.3ccde77f.jpg",Q=t.p+"static/media/outlook_f.277f2109.jpg",E=function(){return Object(d.jsx)("div",{className:" bg-gradient-to-b from-red-800 to-black w-full h-full bg-black opacity-90",children:Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsxs)("div",{className:" my-8 py-8   text-center text-gray-400 w-1/3 flex-col border-r border-gray-100",children:[Object(d.jsx)("p",{className:"p-1 text-white font-bold",children:"NAVIGATE"}),Object(d.jsx)("p",{className:"  p-1  hover:text-gray-100",children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),Object(d.jsx)("p",{className:"p-1 hover:text-gray-100",children:Object(d.jsx)(i.b,{to:"/",children:"About"})}),Object(d.jsx)("p",{className:"p-1 hover:text-gray-100",children:"Projects"}),Object(d.jsx)("p",{className:"p-1 hover:text-gray-100",children:"Skills"})]}),Object(d.jsxs)("div",{className:"my-8 border-r border-gray-100 w-1/3 flex-col  ",children:[Object(d.jsxs)("div",{className:" text-center my-8 text-lg md:text-2xl text-gray-100   ",children:[Object(d.jsx)("span",{className:"p-2  ",children:"Contact & View My Other Profiles"}),Object(d.jsxs)("div",{className:"flex justify-center ",children:[Object(d.jsx)("div",{className:"mx-2 my-1",children:Object(d.jsx)("a",{href:"mailto:kchavan@buffalo.edu",target:"_blank",children:Object(d.jsx)("img",{className:"h-8 w-8",src:Q,alt:""})})}),Object(d.jsx)("div",{className:"mx-2 my-1 pt-1",children:Object(d.jsx)("a",{href:"mailto:krishnakumarchavan11@gmail.com",target:"_blank",children:Object(d.jsx)("img",{className:"h-5 w-8",src:C,alt:""})})}),Object(d.jsx)("div",{className:"mx-2 my-1 ",children:Object(d.jsx)("a",{href:"https://www.linkedin.com/in/krishnakumar-chavan/",target:"_blank",children:Object(d.jsx)("img",{className:"h-8 w-8 ",src:"data:image/jpeg;base64,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gQWAC9nCCZs9gAAQ+O5qAhAAAjMBCACBF5cACADWVnk6AcARgEoJAAKAAGALYAQQAATAnCIACAACACYAAcAAYE4RANxaEQDcWk0AAoAJAAEABACztS2AAAACgFsrAgAIACAAnNNmngL69YACgCOA0viJQIAAYAJAAHAGgACAUgkA2KsIANYVAgAIACAAgAAAAsCNOAQUAEAAwKgiAIAAAAIACAAgAIAAUI3FJRAABAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQABMAlAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEADgLTml7n8uAwT0czIBgC0AIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIAAuASgAAAMQOwugoQ0ZpSk9LsQkBEsy0AOAMABAAQACBSAJwCQkDznwB4DggBrbYAYAtgCwC2AEDELYAJAAJPAItLAfEsfwNgDwDxdgB/A2APADF3AAIAAuBiQNwATC4GRDP9C8DqOQAE8/vs//dbgUeXA2L5veib5BAAoh4BmADABKAAEHH9/w2A5wAQypRMAGACSCmltCoABHJaHwXACAABB4D/AuC9QBDGMj0JgBEAAu0A0tMAHF0UCGJ9HoD//k9A5ScA67MAGAEgiv8W+38BWIwAEOMEYHkhAEYAiDYAPAyAEQCCDQCPfjWYEQDqtz5c6A8DsCgAhBoAHv9y0KO3A0LllkN6LQDrweWBuj1e5I9/PfjoDcFQtSdr/HEA0r3fEgYVW+8f/+/t0/9/7xpBte6f/ADgJxNAOtkEQLWere/mWSE8CYBKzc+O+Z8FYP3lMkGlBwDPzvja53/IMQBU6fD8p3+3L4wJTetSQXWOL7zVt3nhz937TWFQneml9/m9eLMfu8blgqrML57uvTztT0N2waAiy8/14wFYp14BoB7rr5ef779y3qcAUNP6//nKwd5rB/4KAPWv/1cDoABQzf7/16sP9l5/5L9OnQLA9s0/X39//xvv+Vk9DYTtm3698U3+b77pb8zeEwjbdnrzu3veXuFT7lxA2LDD2z/n771tfvfDQQBs1evH/x+aAFJaxtZBAGx0+//zvR/v8e4mfx1tA2CTt//j/bt/5iMDfrt3Fgibu/1/5Kd7fWyHf+ebg2Bjt/8P/aKvDy7sZm8fANtxOnzsJ/x/+M7e3dkHwEam/+P0wT/5idF+2HkeAOVbDh//4f6f2ttLABS//I+nT/zpTx7u9YOzAKhh+P9SAFJqB98mDEVaT6fP/l6fLyzm3PfGACjNOJ2+sJq/9KGarvPbQ6Ck1T9+6Td7f3mcz13nxwVAAeZp/vLv9P3Wfj53bds6EYBbWZZ5mtfvrOFvfwq5bZrcJMcCcDXrnJZ1WSZXAgAA+Iz/A9KMHasunHRKAAAAAElFTkSuQmCC",alt:""})})}),Object(d.jsx)("div",{className:"mx-2 my-1  cursor-pointer",children:Object(d.jsx)("a",{href:"https://www.instagram.com/krishchvn/",target:"_blank",children:Object(d.jsx)("img",{className:"h-8 w-8",src:w,alt:"instagram"})})})]})]}),Object(d.jsx)("div",{className:" text-center mt-10",children:Object(d.jsx)("span",{className:" text-xs md:text-sm text-gray-400",children:"Made using React and TailwindCSS"})})]}),Object(d.jsxs)("div",{className:" text-center text-md md:text-2xl my-16 mx-2  w-1/3",children:[Object(d.jsx)("span",{className:"text-white",children:"Designed & Created By"}),Object(d.jsx)("p",{className:"text-gray-300",children:"Krishnakumar Chavan"})]})]})})},O=function(){var A=Object(s.useRef)(),e=u();return Object(s.useEffect)((function(){e.about=A}),[e]),Object(d.jsx)("div",{ref:A,className:"bg-gradient-to-b from-yellow-600 to-black p-8 text-white ",children:Object(d.jsxs)("div",{className:"skew-y-6",children:[Object(d.jsx)("h2",{className:"text-center text-white opacity-80 text-3xl md:text-4xl lg:text-6xl font-oswald font-normal px-24 py-12 tracking-widest",children:"About Me"}),Object(d.jsxs)("p",{className:"text-sm text-gray-300 md:m-2 lg:m-4 md:text-lg lg:text-xl",children:["I'm currently pursuing Masters in Computer Science with a specialization of AI/ML at University at Buffalo - SUNY. I am an aspiring Software Developer. I have expertise in Python, Machine Learning, and Deep Learning. I have also worked on ",Object(d.jsx)("br",{}),"\xa0\xa0\xa0\xa0 -Automation Testing,",Object(d.jsx)("br",{})," \xa0\xa0\xa0\xa0 -Backup and Restore Services on Databases ",Object(d.jsx)("br",{})," \xa0\xa0\xa0\xa0 -Web Development tools such as Javascript, React.js, Node.js (MERN Stack).",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"My objective is to contribute towards the organization's goals, emphasizing ethical values. I aim to align with the global team's action plans, fostering collaboration to achieve overall customer satisfaction. My focus is on cultivating a positive and enriching work experience for myself and the team. ",Object(d.jsx)("br",{}),"(PS: I came up with the above line, without ChatGPT, which I am fairly proud of lol.)",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Outside of professionalism and student life, you'll find me exploring diverse interests, from going hiking to playing basketball to watching classic old movies on weekends.",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Check out more about me below"]}),Object(d.jsx)("div",{className:" text-center opacity-80   mt-6  text-sm  sm:text-md  md:text-xl lg:text-2xl",children:Object(d.jsx)("button",{onClick:function(){window.open("https://drive.google.com/file/d/1lnlzhtNw0YrvCShldlwJmr8AEjA1Nmpx/view?usp=sharing","_blank")},className:"transition duration-500 ease-in-out border-2 border-white w-auto px-2 py-1 sm:px-4 sm:py-2 text-white font-oswald hover:border-red-500 transform hover:-translate-y-1 hover:scale-110 ",children:Object(d.jsx)("span",{className:"",children:"Resume "})})})]})})},p=t.p+"static/media/Hemoscribe.05e34c5f.jpg",v=t.p+"static/media/chickfork.cacc72b3.jpg",I=t.p+"static/media/Gesture.12a8a288.jpg",N=function(){var A=[{imageSrc:p,description:Object(d.jsxs)("div",{className:"",children:["-Conducted data modification, cleaning, and visualization on a smoking dataset to enhance feature understanding. ",Object(d.jsx)("br",{})," -Utilized Principal Component Analysis (PCA), hyperparameter tuning, and implemented 8 different Machine Learning models to evaluate performance metrics.",Object(d.jsx)("br",{}),"-Developed a full-stack, dynamic, and responsive user interface using Flask and Streamlit and integrated user input functionality into the interface, allowing the system to provide predictions with high accuracy.",Object(d.jsx)("br",{})," -Demonstrated proficiency in data preprocessing, machine learning model selection, and web development to create an end-to-end solution for smoking prediction.",Object(d.jsx)("br",{})]}),title:"HemoScribe: Tobacco Use Profiler"},{imageSrc:I,description:Object(d.jsxs)("div",{className:"",children:["-Designed and implemented a webcam-based gesture recognition application, showcasing my technical proficiency",Object(d.jsx)("br",{}),"-Utilized OpenCV and Mediapipe to analyze and translate gestures, highlighting my adaptability and precision.",Object(d.jsx)("br",{})," -Created a seamless, low-latency website using Django, reflecting my commitment to enhancing user experiences and contributing to the efficient operation indicating similar skills for office assistance.",Object(d.jsx)("br",{})]}),title:"Gesture Recognition System"},{imageSrc:v,description:Object(d.jsxs)("div",{className:"",children:["-Developed a MERN stack restaurant webpage with dynamic features.",Object(d.jsx)("br",{}),"-Utilized HTML/CSS, Bootstrap, React.js, and React Hooks for frontend and Node.js, and Express.js for backend functionality.",Object(d.jsx)("br",{})," -Implemented Add To Cart, Remove from Cart, Axios data fetching, and Node-based JWT authentication for a smooth ordering tasks experience for customers..",Object(d.jsx)("br",{}),"-Utilized MongoDB for efficient data management demonstrating skills applicable to elevating customer interactions"]}),title:"Chickfork - The Restaurant App"}],e=Object(s.useRef)(null),t=u();return Object(s.useEffect)((function(){t.projects=e}),[t]),Object(d.jsxs)("div",{ref:e,className:" container mx-auto px-8 ",children:[Object(d.jsx)("p",{className:"text-center text-white opacity-80 text-3xl md:text-4xl lg:text-6xl font-oswald font-normal px-24 py-12 tracking-widest",children:"Projects"}),Object(d.jsx)("div",{className:"",children:A.map((function(A,e){return Object(d.jsxs)("div",{className:"flex flex-col md:flex-row my-16",children:[Object(d.jsx)("div",{className:"md:w-4/5 w-full h-auto  pr-4 animate_left ",children:Object(d.jsx)("img",{src:A.imageSrc,alt:"Project ".concat(e+1),className:"w-full rounded-lg border-t border-b  border-white"})}),Object(d.jsxs)("div",{className:" w-full md:w-2/3 my-4  animate_right",children:[Object(d.jsx)("p",{className:"text-center text-gray-400  text-center m-2 md:m-4 lg:m-6 text-md md:text-xl lg:text-3xl font-bold ",children:A.title}),Object(d.jsx)("p",{className:"md:my-2 text-left text-sm text-gray-400 md:m-2 lg:m-4 md:text-lg lg:text-xl",children:A.description})]})]},e)}))})]})};var y=function(){return Object(d.jsx)("div",{className:"App bg-black",children:Object(d.jsx)(i.a,{children:Object(d.jsx)(l.c,{children:Object(d.jsx)(l.a,{path:"/",exact:!0,children:Object(d.jsxs)(B,{children:[Object(d.jsx)(g,{}),Object(d.jsx)(h,{}),Object(d.jsx)(O,{}),Object(d.jsx)(N,{}),Object(d.jsx)(f,{}),Object(d.jsx)(E,{})]})})})})})},D=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,57)).then((function(e){var t=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,n=e.getTTFB;t(A),s(A),c(A),a(A),n(A)}))};n.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),D()}},[[45,1,2]]]);
//# sourceMappingURL=main.d779ce89.chunk.js.map