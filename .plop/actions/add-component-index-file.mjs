export default function addComponentIndexFile (basePath) {
  return {
    path: `${basePath}/{{dashCase name}}/index.tsx`,
    templateFile: 'templates/component.tsx.hbs',
    type: 'add'
  }
}
