# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:
Setup @components/ui/sonner.tsx in @app/layout.tsx  and  alter the existing @app/page.tsx so that when we click on the button , we use toast api

Add a dummy page under "test" name which will be protected(do not make it public in the proxy.ts) - to test if redirects works, do not run server, i will be testing manually

now clean up my page.tsx. The only thing i want  rendered  inside  is the user button component from clerk
```tsx
import { Button } from "@/components/ui/button";
```
