const greeting_example_btn = document.getElementById("greeting-example-button");
const about_me_example_btn = document.getElementById("about-me-example-button");
const my_skills_example_btn = document.getElementById("my-skills-example-button");
const my_projects_example_btn = document.getElementById("my-projects-example-button");
const example_greeting_text = document.getElementById("example-greeting-text");
const example_about_me_text = document.getElementById("example-about-me-text");
const example_my_skills_text = document.getElementById("example-my-skills-text");
const example_my_projects_text = document.getElementById("example-my-projects-text");

greeting_example_btn.addEventListener("click",()=>{
   if(example_greeting_text.style.display === "none"){
      example_greeting_text.style.display ="block";
   }
   else{
      example_greeting_text.style.display = "none";
   }
})

about_me_example_btn.addEventListener("click",()=>{
   if(example_about_me_text.style.display === "none"){
      example_about_me_text.style.display ="block";
   }
   else{
      example_about_me_text.style.display = "none";
   }
})

my_skills_example_btn.addEventListener("click",()=>{
   if(example_my_skills_text.style.display === "none"){
      example_my_skills_text.style.display ="block";
   }
   else{
      example_my_skills_text.style.display = "none";
   }
})

my_projects_example_btn.addEventListener("click",()=>{
   if(example_my_projects_text.style.display === "none"){
      example_my_projects_text.style.display ="block";
   }
   else{
      example_my_projects_text.style.display = "none";
   }
})