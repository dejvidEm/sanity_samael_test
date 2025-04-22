export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nadpis',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Link',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      title: 'Obrázek',
      type: 'image',
    },
    {
      name: 'smallDescription',
      title: 'Krátký popis',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Obsah',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
