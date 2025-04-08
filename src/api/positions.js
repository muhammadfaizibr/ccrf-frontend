import departments from 'api/departments.js';


const positions = [
    {
      "department": departments.technology,
      "title": "Full-Stack Developer",
      "short_description": "Join our tech team to build robust web applications using modern technologies.",
      "detailed_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      "department": departments.administrative,
      "title": "DevOps Engineer",
      "short_description": "Manage our cloud infrastructure and deployment pipelines.",
      "detailed_description": "Seeking an experienced DevOps Engineer to optimize our CI/CD pipelines and cloud infrastructure. Work with cutting-edge technologies to ensure smooth deployments and system reliability."
    },
    {
      "department": departments.operational,
      "title": "UI/UX Designer",
      "short_description": "Design intuitive and beautiful user interfaces for our applications.",
      "detailed_description": "Create user-centered designs by understanding business requirements, and user feedback. Work closely with product managers and developers to implement responsive and accessible interfaces."
    }
  ]

  export default positions;