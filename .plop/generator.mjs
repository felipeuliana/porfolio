import addComponentIndexFile from './actions/add-component-index-file.mjs'
import addComponentStoriesFile from './actions/add-component-stories-file.mjs'
import addComponentUnitTestsFile from './actions/add-component-unit-tests-file.mjs'
import modifyComponentExport from './actions/modify-component-export.mjs'
import modifyComponentImport from './actions/modify-component-import.mjs'

export default function (plop) {
  const COMPONENTS_PATH = '../src/components'
  const STORIES_PATH = '../src/stories'

  plop.setGenerator('component', {
    description: 'Create a component structure.',
    prompts: [
      {
        message: 'What is your component name?',
        name: 'name',
        type: 'input'
      }
    ],
    actions: [
      addComponentIndexFile(COMPONENTS_PATH),
      addComponentStoriesFile(STORIES_PATH),
      addComponentUnitTestsFile(COMPONENTS_PATH),
      modifyComponentImport(COMPONENTS_PATH),
      modifyComponentExport(COMPONENTS_PATH)
    ]
  })
}
