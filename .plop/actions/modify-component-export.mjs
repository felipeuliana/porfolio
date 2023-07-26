export default function modifyComponentExport (basePath) {
  return {
    path: `${basePath}/index.ts`,
    pattern: /(\/\/ COMPONENT EXPORTS)/g,
    template: ',\n  {{pascalCase name}}\n$1',
    type: 'modify'
  }
}
