export default {
    type: "document",
    title: "projets",
    name: "Projets",
    fields: [
        {
            name: "image",
            type: "image",
            title: "Image du programme",
            options: {
                hotspot: true,
            },
        },
        {
            name: "titre",
            type: "string",
            title: "Titre",
            validation: (Rule) => Rule.required(),
        },
        {
            name:"description",
            type:"text",
            title:"Description"
        },
        {
            name:"body",
            title:"Body",
            type:"richtext"
        }
        
    ],
};
