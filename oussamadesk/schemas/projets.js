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
            validation: (Rule) => Rule.required(),
        },
        {
            name: "mission",
            type: "string",
            title: "Mission",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "mission",
                maxLength: 200,
                slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
            },
        },
        {
            name: "lieu",
            type: "string",
            title: "Lieu",
        },
        {
            name: "date",
            type: "date",
            title: "Année",
            options: {
                dateFormat: "Y",
            },
        },
        {
            name: "description",
            title: "Description",
            type: "richtext",
        },
    ],
};
