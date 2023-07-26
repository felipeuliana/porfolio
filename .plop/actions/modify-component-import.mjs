export default function modifyComponentImport (basePath) {
  const component = '{{pascalCase name}}'
  const path = '@/components/{{dashCase name}}'

  return {
    path: `${basePath}/index.ts`,
    pattern: /(\/\/ COMPONENT IMPORTS)/g,
    template: `import ${component} from \'${path}\'\n$1`,
    type: 'modify',

  }
}
