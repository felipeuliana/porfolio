import { render } from '@testing-library/react'
import Caption from '.'

describe('Caption component', () => {
  it('should render as a small', () => {
    const { getByRole } = render(<Caption>Caption as small.</Caption>)
    const captionAsSmall = getByRole('caption')

    expect(captionAsSmall).toMatchInlineSnapshot(`
      <small
        class="font-sans text-sm text-neutral font-normal "
        role="caption"
      >
        Caption as small.
      </small>
    `)
  })

  it('should render as a span', () => {
    const { getByRole } = render(
      <Caption variant='span'>Caption as span.</Caption>
    )
    const captionAsSpan = getByRole('caption')

    expect(captionAsSpan).toMatchInlineSnapshot(`
      <span
        class="font-sans text-sm text-neutral font-normal "
        role="caption"
      >
        Caption as span.
      </span>
    `)
  })

  it('should display the default style', () => {
    const { getByRole } = render(
      <Caption>With default style.</Caption>
    )
    const withDefaultStyle = getByRole('caption')

    expect(withDefaultStyle).toMatchInlineSnapshot(`
      <small
        class="font-sans text-sm text-neutral font-normal "
        role="caption"
      >
        With default style.
      </small>
    `)
  })

  it('should display the dark style', () => {
    const { getByRole } = render(
      <Caption color='dark' >With dark style.</Caption>
    )
    const withDarkStyle = getByRole('caption')

    expect(withDarkStyle).toMatchInlineSnapshot(`
      <small
        class="font-sans text-sm text-dark font-normal "
        role="caption"
      >
        With dark style.
      </small>
    `)
  })
  it('should display the light style', () => {
    const { getByRole } = render(
      <Caption color='light' >With light style.</Caption>
    )
    const withLightStyle = getByRole('caption')

    expect(withLightStyle).toMatchInlineSnapshot(`
      <small
        class="font-sans text-sm text-light font-normal "
        role="caption"
      >
        With light style.
      </small>
    `)
  })
})
