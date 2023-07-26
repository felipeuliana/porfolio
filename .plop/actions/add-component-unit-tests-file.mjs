export default function addComponentUnitTestsFile (basePath) {
  return {
    path: `${basePath}/{{dashCase name}}/tests.tsx`,
    templateFile: 'templates/unit-tests.tsx.hbs',
    type: 'add'
  }
}
