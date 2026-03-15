Whenever creating any tsx files, and you are using any user facing code, make sure to use translations by editing src/lang/en.json or src/lang/nl.json

Then use the translation key like so

```tsx
const { formatMessage } = getIntl(locale);

{formatMessage({ id: "translation.key" })}
```

Where `locale` is a component prop that is passed down from the page. 