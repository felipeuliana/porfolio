module.exports = {
  'src/**/*.(ts|tsx|js)': filenames => [
    'yarn lint --fix',
    'yarn test --run --bail=0 --changed=HEAD~1'
  ]
}
