export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d7583d5c710c2a67fbf091a',
                  title: 'Sanity Studio',
                  name: 'sndwrld-studio',
                  apiId: '6fedc4ff-f7c0-4c76-b801-c4073450bfa2'
                },
                {
                  buildHookId: '5d7583d5d6e05e06b7e7ca4c',
                  title: 'Blog Website',
                  name: 'sndwrld',
                  apiId: '4b26c3e0-7cf6-40bc-96f5-bcf5ae936b5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/sndwrld',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sndwrld.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
