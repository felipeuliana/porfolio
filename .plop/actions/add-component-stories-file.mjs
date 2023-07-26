export default function addComponentStoriesFile (basePath) {
  return {
    path: `${basePath}/components/{{pascalCase name}}.stories.tsx`,
    templateFile: 'templates/stories.ts.hbs',
    type: 'add'
  }
}
