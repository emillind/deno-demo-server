# deno-demo-server

Server application for Deno and JSR demo purposes.

## Run

```bash
# Start application on localhost:8000
deno task dev
```

## Definition

This application spins up a very simple express api with the following two endpoints:

```bash
# POST localhost:8000/translate/toRovarsprak
Request Body {
  text: string
}
Response Body {
  originalText: string
  translatedText: string
}

# POST localhost:8000/translate/fromRovarsprak
Request Body {
  text: string
}
Response Body {
  originalText: string
  translatedText: string
}
```
