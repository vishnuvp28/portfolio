const ProjectCardData = [
  {
    imgsrc:
      "data:image/png;base64,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",
    title: "Stack Overflow Clone",
    view: "https://sensational-pixie-2f080c.netlify.app",
    source: "https://github.com/vishnuvp28/stack-overflow-clone",
    source1:"https://github.com/vishnuvp28/stackoverflow-backend"
  },
  {
    imgsrc:
      "https://www.stealthlabs.com/wp-content/uploads/2021/04/multi-factor-authentication-mfa-1.jpg",
    title: "Multi Authentication",
    view: "https://peaceful-starlight-2210e6.netlify.app",
    source: "https://github.com/vishnuvp28/authentication-frontend",
    source1:"https://github.com/vishnuvp28/authentication-backend"
  },
  {
    imgsrc:
    "https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500",
  title: "Youtube Clone",
  view: "https://aesthetic-elf-6e4be5.netlify.app",
  source: "https://github.com/vishnuvp28/web-code1",
  },
  {
    imgsrc:
      "https://assets.weforum.org/article/image/JMF96ETfn1kSViVnUou1Z0XIDwWcPpT5mrPc7-ytpAc.jpg",
    title: "library management",
    view: "https://warm-cascaron-3c9ac3.netlify.app/",
    source: "https://github.com/vishnuvp28/library-management-crud",
  },

  // {
  //   imgsrc:
  //     "https://images.unsplash.com/photo-1541971875076-8f970d573be6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFsbCUyMGJvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  //   title: "Hall Booking",
  //   view: "https://node-2-x830.onrender.com",
  //   source: "https://github.com/vishnuvp28/Node-2",
  // },
  {
    imgsrc:
      "https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudCUyMHRlYWNoZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    title: "CRUD-student-teacher",
    view: "https://amazing-marshmallow-64e05a.netlify.app/",
    source: "https://github.com/vishnuvp28/crud-student-teacher",
  },
  {
    imgsrc:
      "https://images.unsplash.com/photo-1601598851547-4302969d0614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcHBpbmclMjBjYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    title: "Add to cart",
    view: "https://whimsical-sunflower-406099.netlify.app/",
    source: "https://github.com/vishnuvp28/react-day2",
  },
 
];

export default ProjectCardData;
