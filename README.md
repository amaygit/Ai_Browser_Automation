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

```tsx
import { Button } from "@/components/ui/button";
```
