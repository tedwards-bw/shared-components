Creates a local or remote link using React Router's Link component. External / internal is inferred by the URL provided to `to`.

**Basic Links**
```js
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
  <Link to="/local/route">Local route text link</Link>
  <Link to="https://google.com">Remote text link</Link>
  <Link.Icon icon="unicorn" to="/foo">Iconic link</Link.Icon>
  <Link.Icon icon="cat" to="/bar" />
  <Link.Wrap to="/foo">Invisible wrap link</Link.Wrap>
  <Link onClick={() => alert('clicked')}>Link with click handler</Link>
</div>
```

**Text Link Styles**
```js
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
  <Link.Negative to="/foo">Negative local route link</Link.Negative>
  <Link.Negative to="https://google.com">Negative remote link</Link.Negative>
  <Link.Positive to="/foo">Positive local route link</Link.Positive>
  <Link.Positive to="https://google.com">Positive remote link</Link.Positive>
  <Link.Dark to="/foo">Dark local route link</Link.Dark>
  <Link.Dark to="https://google.com">Dark remote link</Link.Dark>
  <div style={{ background: '#004658', margin: 'auto', padding: '5px' }}>
    <Link.Inverted to="/foo">Inverted local route link</Link.Inverted>
  </div>
  <div style={{ background: '#004658', margin: 'auto', padding: '5px 25px 5px 5px' }}>
    <Link.Inverted to="https://google.com">Inverted remote link</Link.Inverted>
  </div>
  <Link appearFocused to="/foo">Controlled focus-styled link</Link>
</div>
```

**Icon Link Styles**
```js
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
  <Link.Icon.Negative icon="moderator" to="/foo">Negative local route link</Link.Icon.Negative>
  <Link.Icon.Negative icon="delete" to="https://google.com">Negative remote link</Link.Icon.Negative>
  <Link.Icon.Positive icon="api" to="/foo">Positive local route link</Link.Icon.Positive>
  <Link.Icon.Positive icon="help" to="https://google.com">Positive remote link</Link.Icon.Positive>
  <Link.Icon.Dark icon="expensive2" to="/foo">Dark local route link</Link.Icon.Dark>
  <Link.Icon.Dark icon="courses" to="https://google.com">Dark remote link</Link.Icon.Dark>
  <div style={{ background: '#004658', margin: 'auto', padding: '5px' }}>
    <Link.Icon.Inverted icon="loginRounded" to="/foo">Inverted local route link</Link.Icon.Inverted>
  </div>
  <div style={{ background: '#004658', margin: 'auto', padding: '5px' }}>
    <Link.Icon.Inverted icon="file" to="https://google.com">Inverted remote link</Link.Icon.Inverted>
  </div>
  <Link.Icon appearFocused icon="attention" to="/foo">Controlled focus-styled link</Link.Icon>
</div>
```
